import { promises as fs } from 'node:fs';
import path from 'node:path';

import { listPackage } from '@electron/asar';

const projectRoot = path.resolve(process.cwd());
const distDir = path.join(projectRoot, 'dist');
const packDir = path.join(projectRoot, 'pack');
const PLUGIN_IDENTIFIER = 'vrchat-osc';

async function dirExists(targetPath) {
  try {
    const stats = await fs.stat(targetPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function getAllFiles(directory) {
  const stack = [directory];
  const files = [];
  while (stack.length) {
    const current = stack.pop();
    if (!current) continue;
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(entryPath);
      } else {
        files.push(entryPath);
      }
    }
  }
  return files;
}

async function validateDistOutput() {
  if (!(await dirExists(distDir))) {
    throw new Error('Missing dist directory. Run "pnpm build" first.');
  }

  const entries = await getAllFiles(distDir);
  const hasPlugin = entries.some((entry) =>
    entry.includes(`${path.sep}${PLUGIN_IDENTIFIER}`),
  );

  if (!hasPlugin) {
    throw new Error(
      `VRChat plugin chunk missing from ${path.relative(
        projectRoot,
        distDir,
      )}.`,
    );
  }
}

async function validatePackArtifacts() {
  if (!(await dirExists(packDir))) {
    console.warn(
      'Pack directory not found; skipping packaged artifact validation.',
    );
    return;
  }

  const files = await getAllFiles(packDir);
  const asarFiles = files.filter((file) => file.endsWith('.asar'));

  if (!asarFiles.length) {
    console.warn('No asar archives detected under pack/. Skipping check.');
    return;
  }

  let found = false;
  for (const asarPath of asarFiles) {
    const entries = await listPackage(asarPath);
    if (entries.some((entry) => entry.includes(PLUGIN_IDENTIFIER))) {
      found = true;
      break;
    }
  }

  if (!found) {
    throw new Error(
      `VRChat plugin missing from packaged artifacts in ${path.relative(
        projectRoot,
        packDir,
      )}.`,
    );
  }
}

async function run() {
  await validateDistOutput();
  await validatePackArtifacts();
  console.log('✓ VRChat OSC plugin detected in build outputs.');
}

run().catch((error) => {
  console.error(error.message ?? error);
  process.exitCode = 1;
});


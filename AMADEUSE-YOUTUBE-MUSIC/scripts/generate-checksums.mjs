import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const outputDir = path.join(projectRoot, 'pack');
const checksumFile = path.join(outputDir, 'CHECKSUMS.sha256');

async function dirExists(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function collectFiles(dirPath) {
  const files = [];
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
    } else {
      files.push(entryPath);
    }
  }
  return files;
}

async function computeSha256(filePath) {
  const hash = createHash('sha256');
  const data = await fs.readFile(filePath);
  hash.update(data);
  return hash.digest('hex');
}

async function run() {
  if (!(await dirExists(outputDir))) {
    console.warn('Pack directory not found; skipping checksum generation.');
    return;
  }

  const files = await collectFiles(outputDir);
  const relative = files
    .filter((file) => !file.endsWith('CHECKSUMS.sha256'))
    .sort((a, b) => a.localeCompare(b));

  const lines = [];
  for (const filePath of relative) {
    const hash = await computeSha256(filePath);
    const relPath = path.relative(outputDir, filePath).replace(/\\/g, '/');
    lines.push(`${hash}  ${relPath}`);
  }

  if (!lines.length) {
    console.warn('No files found in pack/ to checksum.');
    return;
  }

  await fs.writeFile(checksumFile, `${lines.join('\n')}\n`);
  console.log(`✓ SHA256 checksums written to ${path.relative(projectRoot, checksumFile)}`);
}

run().catch((error) => {
  console.error('Failed to generate checksums:', error);
  process.exitCode = 1;
});


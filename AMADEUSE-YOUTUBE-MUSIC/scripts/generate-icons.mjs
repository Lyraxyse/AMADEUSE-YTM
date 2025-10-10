import { promises as fs } from 'node:fs';
import path from 'node:path';

import sharp from 'sharp';
import png2icons from 'png2icons';

const projectRoot = path.resolve(process.cwd());
const sourcePath = path.join(projectRoot, 'logo_background.png');
const outputDir = path.join(projectRoot, 'build', 'icons');
const pngDir = path.join(outputDir, 'png');

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function createRoundedBase(size) {
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
  );

  return sharp(sourcePath)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: circleSvg, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function generatePngVariants(baseBuffer) {
  const sizes = [512, 256, 128, 64, 48, 32, 24, 16];
  await Promise.all(
    sizes.map(async (size) => {
      const fileName = `${size}x${size}.png`;
      const outPath = path.join(pngDir, fileName);
      const buffer = await sharp(baseBuffer)
        .resize(size, size)
        .png({ compressionLevel: 9 })
        .toBuffer();
      await fs.writeFile(outPath, buffer);
      if (size === 512) {
        await fs.writeFile(path.join(outputDir, fileName), buffer);
      }
    }),
  );
}

async function generateIco(baseBuffer) {
  const basePng = await sharp(baseBuffer)
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toBuffer();
  const ico = png2icons.createICO(
    basePng,
    png2icons.BILINEAR,
    false,
    0,
    true,
  );
  if (!ico) {
    throw new Error('ICO generation failed');
  }
  await fs.writeFile(path.join(outputDir, 'ama.ico'), ico);
}

async function generateIcns(baseBuffer) {
  const basePng = await sharp(baseBuffer)
    .resize(1024, 1024)
    .png({ compressionLevel: 9 })
    .toBuffer();
  const icns = png2icons.createICNS(basePng, png2icons.BILINEAR, false, 0);
  if (!icns) {
    throw new Error('ICNS generation failed');
  }
  await fs.writeFile(path.join(outputDir, 'ama.icns'), icns);
}

async function run() {
  await ensureDir(outputDir);
  await ensureDir(pngDir);

  const baseRounded = await createRoundedBase(1024);

  await Promise.all([
    generatePngVariants(baseRounded),
    generateIco(baseRounded),
    generateIcns(baseRounded),
  ]);
  console.log('Icon assets generated in build/icons');
}

run().catch((error) => {
  console.error('Failed to generate icons:', error);
  process.exitCode = 1;
});

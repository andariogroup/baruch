/**
 * Converts source images into WebP under public/images/<bucket>/.
 *
 * Run it when new assets arrive:
 *   node scripts/convert-assets.mjs <source-dir> [bucket]
 *
 * `bucket` is one of `generated`, `repository` or `real` and must match the
 * provenance recorded in src/data/images.ts.
 */
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const BUCKETS = new Set(['generated', 'repository', 'real']);
const SOURCE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

const [sourceDir, bucket = 'generated'] = process.argv.slice(2);

if (!sourceDir) {
  console.error('Usage: node scripts/convert-assets.mjs <source-dir> [bucket]');
  process.exit(1);
}

if (!BUCKETS.has(bucket)) {
  console.error(`Unknown bucket "${bucket}". Expected one of: ${[...BUCKETS].join(', ')}`);
  process.exit(1);
}

const outputDir = path.join(process.cwd(), 'public', 'images', bucket);
await mkdir(outputDir, { recursive: true });

const entries = await readdir(sourceDir, { withFileTypes: true });
const sources = entries
  .filter((entry) => entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)
  .sort();

if (sources.length === 0) {
  console.error(`No convertible images found in ${sourceDir}`);
  process.exit(1);
}

const manifest = [];

for (const name of sources) {
  const input = path.join(sourceDir, name);
  const outputName = `${path.basename(name, path.extname(name))}.webp`;
  const output = path.join(outputDir, outputName);

  const { width, height } = await sharp(input)
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  manifest.push({ file: `/images/${bucket}/${outputName}`, width, height });
  console.log(`${outputName.padEnd(28)} ${width}x${height}`);
}

// Written next to the assets so declared dimensions in src/data/images.ts can
// be checked against reality instead of guessed.
await writeFile(
  path.join(outputDir, 'manifest.json'),
  `${JSON.stringify({ bucket, assets: manifest }, null, 2)}\n`,
  'utf8',
);

console.log(`\n${manifest.length} asset(s) written to public/images/${bucket}`);

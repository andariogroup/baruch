/**
 * Temporary compositional assets for local development.
 *
 * These are abstract scenes, not photographs of BARUCH, and must stay tagged
 * as AI_GENERATED / generated until real photography replaces them.
 *
 *   node scripts/generate-placeholders.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'images', 'generated');

const ASSETS = [
  {
    file: 'hero-jungle-coast.webp',
    width: 1280,
    height: 720,
    svg: jungleCoast,
  },
  {
    file: 'caribbean-sunset.webp',
    width: 1280,
    height: 720,
    svg: sunset,
  },
  {
    file: 'restaurant-garden.webp',
    width: 1152,
    height: 864,
    svg: garden,
  },
  {
    file: 'hammock-garden.webp',
    width: 1152,
    height: 864,
    svg: hammocks,
  },
  {
    file: 'buritaca-river.webp',
    width: 1152,
    height: 864,
    svg: river,
  },
  {
    file: 'room-private-double.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => room(w, h, '#d9c4a4', 1),
  },
  {
    file: 'room-private-triple.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => room(w, h, '#cbb892', 2),
  },
  {
    file: 'room-private-quad.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => room(w, h, '#c4b087', 3),
  },
  {
    file: 'room-private-family.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => room(w, h, '#bba67d', 4),
  },
  {
    file: 'room-shared-six.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => dorm(w, h, '#9bb7a6', 3),
  },
  {
    file: 'room-shared-seven.webp',
    width: 864,
    height: 1152,
    svg: (w, h) => dorm(w, h, '#8eae9d', 4),
  },
];

function jungleCoast(width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7ec8c4"/>
        <stop offset="45%" stop-color="#159aa0"/>
        <stop offset="100%" stop-color="#0c6e73"/>
      </linearGradient>
      <linearGradient id="canopy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2f5a32"/>
        <stop offset="100%" stop-color="#6b8f45"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#sky)"/>
    <ellipse cx="${width * 0.78}" cy="${height * 0.18}" rx="${width * 0.14}" ry="${height * 0.12}" fill="#f4b800" opacity="0.55"/>
    <path d="M0 ${height * 0.62} Q ${width * 0.25} ${height * 0.48} ${width * 0.5} ${height * 0.58} T ${width} ${height * 0.5} V ${height} H0 Z" fill="#0a4a4e"/>
    <path d="M0 ${height * 0.72} Q ${width * 0.3} ${height * 0.6} ${width * 0.55} ${height * 0.7} T ${width} ${height * 0.62} V ${height} H0 Z" fill="#08545a"/>
    <ellipse cx="${width * 0.12}" cy="${height * 0.2}" rx="${width * 0.28}" ry="${height * 0.42}" fill="url(#canopy)"/>
    <ellipse cx="${width * 0.02}" cy="${height * 0.45}" rx="${width * 0.22}" ry="${height * 0.38}" fill="#3d6a38"/>
    <ellipse cx="${width * 0.92}" cy="${height * 0.28}" rx="${width * 0.24}" ry="${height * 0.4}" fill="#4e6b31"/>
  </svg>`;
}

function sunset(width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f4b800"/>
        <stop offset="38%" stop-color="#f47c20"/>
        <stop offset="72%" stop-color="#c44a2a"/>
        <stop offset="100%" stop-color="#1f2929"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#dusk)"/>
    <circle cx="${width * 0.5}" cy="${height * 0.42}" r="${height * 0.12}" fill="#faf8f2" opacity="0.9"/>
    <path d="M0 ${height * 0.7} Q ${width * 0.2} ${height * 0.62} ${width * 0.45} ${height * 0.72} T ${width} ${height * 0.66} V ${height} H0 Z" fill="#1f2929" opacity="0.72"/>
    <path d="M0 ${height * 0.82} Q ${width * 0.35} ${height * 0.74} ${width * 0.7} ${height * 0.84} T ${width} ${height * 0.78} V ${height} H0 Z" fill="#14201f"/>
  </svg>`;
}

function garden(width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#eef2e6"/>
    <rect y="${height * 0.55}" width="100%" height="${height * 0.45}" fill="#6b8f45"/>
    <rect x="${width * 0.18}" y="${height * 0.22}" width="${width * 0.64}" height="${height * 0.38}" rx="28" fill="#faf8f2"/>
    <rect x="${width * 0.22}" y="${height * 0.28}" width="${width * 0.56}" height="${height * 0.26}" rx="18" fill="#f3efe5"/>
    <circle cx="${width * 0.16}" cy="${height * 0.7}" r="${height * 0.16}" fill="#4e6b31"/>
    <circle cx="${width * 0.86}" cy="${height * 0.66}" r="${height * 0.2}" fill="#3d6a38"/>
    <circle cx="${width * 0.5}" cy="${height * 0.18}" r="${height * 0.08}" fill="#f4b800" opacity="0.45"/>
  </svg>`;
}

function hammocks(width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#f3efe5"/>
    <rect y="${height * 0.62}" width="100%" height="${height * 0.38}" fill="#6b8f45"/>
    <rect x="${width * 0.18}" width="18" y="${height * 0.12}" height="${height * 0.62}" fill="#3d4a32"/>
    <rect x="${width * 0.8}" width="18" y="${height * 0.12}" height="${height * 0.62}" fill="#3d4a32"/>
    <path d="M${width * 0.2} ${height * 0.28} Q ${width * 0.5} ${height * 0.52} ${width * 0.8} ${height * 0.28}" fill="none" stroke="#159aa0" stroke-width="22" stroke-linecap="round"/>
    <path d="M${width * 0.22} ${height * 0.34} Q ${width * 0.5} ${height * 0.56} ${width * 0.78} ${height * 0.34}" fill="none" stroke="#0c6e73" stroke-width="10" stroke-linecap="round"/>
    <ellipse cx="${width * 0.12}" cy="${height * 0.22}" rx="${width * 0.16}" ry="${height * 0.18}" fill="#4e6b31"/>
    <ellipse cx="${width * 0.9}" cy="${height * 0.18}" rx="${width * 0.18}" ry="${height * 0.2}" fill="#3d6a38"/>
  </svg>`;
}

function river(width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7ec8c4"/>
        <stop offset="100%" stop-color="#0c6e73"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#cfe6d4"/>
    <path d="M${width * 0.18} 0 Q ${width * 0.4} ${height * 0.3} ${width * 0.32} ${height * 0.55} T ${width * 0.48} ${height} H ${width * 0.78} Q ${width * 0.6} ${height * 0.7} ${width * 0.68} ${height * 0.4} T ${width * 0.52} 0 Z" fill="url(#water)"/>
    <ellipse cx="${width * 0.12}" cy="${height * 0.3}" rx="${width * 0.22}" ry="${height * 0.32}" fill="#4e6b31"/>
    <ellipse cx="${width * 0.9}" cy="${height * 0.5}" rx="${width * 0.24}" ry="${height * 0.36}" fill="#3d6a38"/>
    <ellipse cx="${width * 0.78}" cy="${height * 0.18}" rx="${width * 0.16}" ry="${height * 0.18}" fill="#6b8f45"/>
  </svg>`;
}

function room(width, height, wall, beds) {
  const bedHeight = Math.floor(height * 0.12);
  const startY = Math.floor(height * 0.38);
  const bedRects = Array.from({ length: beds }, (_, index) => {
    const y = startY + index * (bedHeight + 28);
    return `<rect x="${width * 0.16}" y="${y}" width="${width * 0.68}" height="${bedHeight}" rx="18" fill="#faf8f2"/>
      <rect x="${width * 0.16}" y="${y}" width="${width * 0.18}" height="${bedHeight}" rx="18" fill="#e7e0d0"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${wall}"/>
    <rect y="${height * 0.72}" width="100%" height="${height * 0.28}" fill="#cbb892"/>
    <rect x="${width * 0.12}" y="${height * 0.1}" width="${width * 0.32}" height="${height * 0.2}" rx="12" fill="#faf8f2" opacity="0.55"/>
    ${bedRects}
  </svg>`;
}

function dorm(width, height, wall, rows) {
  const bedHeight = Math.floor(height * 0.1);
  const startY = Math.floor(height * 0.28);
  const beds = Array.from({ length: rows }, (_, index) => {
    const y = startY + index * (bedHeight + 36);
    return `<rect x="${width * 0.1}" y="${y}" width="${width * 0.36}" height="${bedHeight}" rx="14" fill="#faf8f2"/>
      <rect x="${width * 0.54}" y="${y}" width="${width * 0.36}" height="${bedHeight}" rx="14" fill="#faf8f2"/>
      <rect x="${width * 0.1}" y="${y + bedHeight + 8}" width="${width * 0.12}" height="18" rx="4" fill="#6b5a3d"/>
      <rect x="${width * 0.54}" y="${y + bedHeight + 8}" width="${width * 0.12}" height="18" rx="4" fill="#6b5a3d"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${wall}"/>
    <rect y="${height * 0.78}" width="100%" height="${height * 0.22}" fill="#7d9788"/>
    ${beds}
  </svg>`;
}

await mkdir(outputDir, { recursive: true });

const manifest = [];

for (const asset of ASSETS) {
  const svg = asset.svg(asset.width, asset.height);
  const output = path.join(outputDir, asset.file);
  const { width, height } = await sharp(Buffer.from(svg))
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  manifest.push({
    file: `/images/generated/${asset.file}`,
    width,
    height,
  });
  console.log(`${asset.file.padEnd(28)} ${width}x${height}`);
}

await writeFile(
  path.join(outputDir, 'manifest.json'),
  `${JSON.stringify({ bucket: 'generated', assets: manifest }, null, 2)}\n`,
  'utf8',
);

console.log(`\n${manifest.length} placeholder asset(s) written to public/images/generated`);

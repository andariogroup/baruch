/**
 * Image governance.
 *
 * `status` records where an asset came from. It is never rendered to visitors;
 * it exists so temporary assets can be audited and swapped out when the
 * hostal's own photography arrives.
 *
 * - `AI_GENERATED`: produced for temporary visual composition.
 * - `REPOSITORY`: licensed stock used for generic destination scenes.
 * - `REAL`: genuine BARUCH photography.
 *
 * A temporary asset must never be presented as a real photograph of BARUCH,
 * and must never be used to imply a facility or feature that has not been
 * confirmed. Alt text therefore describes the scene generically.
 */
export type ImageStatus = 'AI_GENERATED' | 'REPOSITORY' | 'REAL';

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  status: ImageStatus;
  /** Provenance note for content governance, not for display. */
  source?: string;
};

/** True when the page is showing at least one non-BARUCH image. */
export function hasTemporaryAssets(
  assets: readonly (ImageAsset | undefined)[],
): boolean {
  return assets.some((asset) => asset !== undefined && asset.status !== 'REAL');
}

/** Native dimensions of the temporary assets, per public/images/generated/manifest.json. */
const WIDE = { width: 1280, height: 720 } as const;
const LANDSCAPE = { width: 1152, height: 864 } as const;
const PORTRAIT = { width: 864, height: 1152 } as const;

function generated(file: string, size: { width: number; height: number }): ImageAsset {
  return {
    src: `/images/generated/${file}`,
    ...size,
    status: 'AI_GENERATED',
    source:
      'Temporary asset generated for development composition. Awaiting real BARUCH photography at higher resolution.',
  };
}

/**
 * Temporary asset set. Replace each entry with real photography, update the
 * dimensions, and flip `status` to `REAL`; no component code needs to change.
 */
export const images = {
  hero: generated('hero-jungle-coast.webp', WIDE),
  restaurant: generated('restaurant-garden.webp', LANDSCAPE),
  nature: generated('hammock-garden.webp', LANDSCAPE),
  sunset: generated('caribbean-sunset.webp', WIDE),
  destination: generated('buritaca-river.webp', LANDSCAPE),
  rooms: {
    'private-2': generated('room-private-double.webp', PORTRAIT),
    'private-3': generated('room-private-triple.webp', PORTRAIT),
    'private-4': generated('room-private-quad.webp', PORTRAIT),
    'private-5': generated('room-private-family.webp', PORTRAIT),
    'shared-6': generated('room-shared-six.webp', PORTRAIT),
    'shared-7': generated('room-shared-seven.webp', PORTRAIT),
  },
} as const;

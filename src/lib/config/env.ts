/**
 * Reads optional public configuration from the environment.
 *
 * Empty, invalid or unsafe values become `null` so the UI can omit them
 * instead of publishing a broken link or an invented fact.
 */

export function optionalText(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

/** Digits only. Rejects values too short to be a usable international number. */
export function optionalPhone(value: string | undefined): string | null {
  const digits = value?.replace(/\D/g, '') ?? '';
  return digits.length >= 8 ? digits : null;
}

export function optionalHttpUrl(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export function optionalCoordinates(
  latitudeRaw: string | undefined,
  longitudeRaw: string | undefined,
): { latitude: number; longitude: number } | null {
  if (!latitudeRaw?.trim() || !longitudeRaw?.trim()) return null;

  const latitude = Number.parseFloat(latitudeRaw);
  const longitude = Number.parseFloat(longitudeRaw);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return null;
  }

  return { latitude, longitude };
}

function stripTrailingSlash(value: string): string {
  return value.replace(/\/$/, '');
}

function httpsOrigin(host: string): string {
  const hostname = host.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return `https://${hostname}`;
}

/**
 * Canonical origin for metadata, sitemap and JSON-LD.
 *
 * Prefers `NEXT_PUBLIC_SITE_URL`. On Vercel, falls back to the production
 * domain or the current deployment host so previews never emit localhost.
 */
export function resolveSiteUrl(
  explicit?: string,
  vercel?: {
    env?: string;
    productionUrl?: string;
    url?: string;
  },
): string {
  const configured = explicit?.trim();
  if (configured) return stripTrailingSlash(configured);

  if (vercel?.env === 'production' && vercel.productionUrl?.trim()) {
    return httpsOrigin(vercel.productionUrl);
  }

  if (vercel?.url?.trim()) {
    return httpsOrigin(vercel.url);
  }

  return 'http://localhost:3000';
}

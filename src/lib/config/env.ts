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

/** Confirmed public origin. Apex (`baruchhostal.com`) canonicalizes here. */
export const PRODUCTION_SITE_HOST = 'www.baruchhostal.com';
export const PRODUCTION_SITE_APEX = 'baruchhostal.com';
export const PRODUCTION_SITE_URL = `https://${PRODUCTION_SITE_HOST}`;

function stripTrailingSlash(value: string): string {
  return value.replace(/\/$/, '');
}

function canonicalizeOrigin(value: string): string {
  const withProtocol = value.includes('://') ? value : `https://${value}`;
  const parsed = new URL(withProtocol);
  const hostname = parsed.hostname;

  if (hostname === PRODUCTION_SITE_APEX || hostname === PRODUCTION_SITE_HOST) {
    return PRODUCTION_SITE_URL;
  }

  return stripTrailingSlash(parsed.origin);
}

/**
 * Canonical origin for metadata, sitemap and JSON-LD.
 *
 * Prefers `NEXT_PUBLIC_SITE_URL`. Apex and www both resolve to the confirmed
 * `www` origin so crawlers never see a split host. Production builds emit
 * that origin even when the env var is missing; Vercel previews keep their
 * deployment host (and stay noindex).
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
  if (configured) {
    try {
      return canonicalizeOrigin(configured);
    } catch {
      return stripTrailingSlash(configured);
    }
  }

  if (vercel?.env === 'production') {
    return PRODUCTION_SITE_URL;
  }

  if (vercel?.url?.trim()) {
    try {
      return canonicalizeOrigin(vercel.url);
    } catch {
      return httpsFallback(vercel.url);
    }
  }

  return 'http://localhost:3000';
}

function httpsFallback(host: string): string {
  const hostname = host.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return `https://${hostname}`;
}

/**
 * Single source of truth for BARUCH business configuration.
 *
 * Operational facts that change per environment come from env vars. Empty or
 * invalid values stay `null` and the UI must not invent a substitute.
 */

import {
  optionalCoordinates,
  optionalHttpUrl,
  optionalPhone,
  optionalText,
  PRODUCTION_SITE_URL,
  resolveSiteUrl,
} from '@/lib/config/env';

export { PRODUCTION_SITE_URL };

export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Canonical origin for this build.
 *
 * Production (including a local `next build`) uses the confirmed www host.
 * Vercel previews keep their `*.vercel.app` host so they cannot compete in
 * search. Local `next dev` stays on localhost unless the env var is set.
 */
export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL, {
  env:
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development'
      ? process.env.VERCEL_ENV
      : process.env.VERCEL_ENV === 'production' ||
          process.env.NODE_ENV === 'production'
        ? 'production'
        : process.env.VERCEL_ENV,
  url: process.env.VERCEL_URL,
});

/**
 * External booking engine. BARUCH does not manage inventory, availability or
 * reservations; the CTA hands the visitor off to the provider in a new tab.
 */
export const bookingEngine = {
  url: optionalHttpUrl(process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL),
} as const;

/**
 * Digits only, international format, no `+` or separators.
 * When unset, WhatsApp CTAs stay visible but disabled.
 */
export const whatsapp = {
  number: optionalPhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
} as const;

export const analytics = {
  measurementId: optionalText(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
} as const;

export const brand = {
  name: 'BARUCH Hostal',
  shortName: 'BARUCH',
  /** Design concept, not an approved commercial slogan. */
  creativeIdea: 'Explora afuera. Descansa aquí.',
  logo: {
    src: '/brand/baruch-logo.png',
    width: 356,
    height: 241,
  },
} as const;

const coordinates = optionalCoordinates(
  process.env.NEXT_PUBLIC_LATITUDE,
  process.env.NEXT_PUBLIC_LONGITUDE,
);

const mapsUrl = optionalHttpUrl(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL);

export const location = {
  locality: 'Buritaca',
  region: 'Magdalena',
  country: 'Colombia',
  countryCode: 'CO',
  streetAddress: optionalText(process.env.NEXT_PUBLIC_STREET_ADDRESS),
  postalCode: optionalText(process.env.NEXT_PUBLIC_POSTAL_CODE),
  coordinates,
  mapsUrl,
} as const;

export const contact = {
  phone: optionalPhone(process.env.NEXT_PUBLIC_PHONE),
  email: optionalText(process.env.NEXT_PUBLIC_EMAIL),
} as const;

const SOCIAL: readonly { name: string; env: string | undefined }[] = [
  { name: 'Instagram', env: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { name: 'Facebook', env: process.env.NEXT_PUBLIC_FACEBOOK_URL },
  { name: 'TikTok', env: process.env.NEXT_PUBLIC_TIKTOK_URL },
  { name: 'YouTube', env: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  { name: 'Google', env: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL },
];

/** Only verified official profiles belong here. */
export const socialProfiles: readonly { name: string; url: string }[] = SOCIAL.flatMap(
  (profile) => {
    const url = optionalHttpUrl(profile.env);
    return url ? [{ name: profile.name, url }] : [];
  },
);

const LOCALITY_MAP_QUERY = encodeURIComponent(
  `${location.locality}, ${location.region}, ${location.country}`,
);

/**
 * Prefer an official Maps/place URL, then verified coordinates, then the
 * locality name. Never invent a pin.
 */
export function getMapUrl(): string {
  if (location.mapsUrl) return location.mapsUrl;

  if (location.coordinates) {
    const { latitude, longitude } = location.coordinates;
    return `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${LOCALITY_MAP_QUERY}`;
}

export const siteConfig = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  url: SITE_URL,
  brand,
  location,
  contact,
  bookingEngine,
  whatsapp,
  analytics,
  socialProfiles,
} as const;

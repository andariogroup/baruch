import { DEFAULT_LOCALE, type Locale, LOCALES } from '@/config/site';

/**
 * Page keys are locale-independent identifiers. Each one maps to a localized,
 * indexable path segment so `/es/alojamiento` and `/en/accommodation` are
 * separate URLs that can be cross-referenced with hreflang.
 */
export const PAGE_KEYS = [
  'home',
  'accommodation',
  'restaurant',
  'experiences',
  'location',
  'contact',
  'discover',
  'privacy',
  'cookies',
  'terms',
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

type LocalizedSegments = Record<PageKey, string>;

const SEGMENTS: Record<Locale, LocalizedSegments> = {
  es: {
    home: '',
    accommodation: 'alojamiento',
    restaurant: 'restaurante',
    experiences: 'experiencias',
    location: 'ubicacion',
    contact: 'contacto',
    discover: 'descubre-buritaca',
    privacy: 'privacidad',
    cookies: 'cookies',
    terms: 'terminos',
  },
  en: {
    home: '',
    accommodation: 'accommodation',
    restaurant: 'restaurant',
    experiences: 'experiences',
    location: 'location',
    contact: 'contact',
    discover: 'discover-buritaca',
    privacy: 'privacy',
    cookies: 'cookies',
    terms: 'terms',
  },
};

/** Builds an absolute app path, e.g. `/es/alojamiento/privada-2-personas`. */
export function path(
  locale: Locale,
  page: PageKey,
  ...rest: readonly string[]
): string {
  const parts = [locale, SEGMENTS[locale][page], ...rest].filter(
    (part) => part.length > 0,
  );
  return `/${parts.join('/')}`;
}

/** Fully-qualified URL, required for canonical, hreflang, OG and sitemap. */
export function absoluteUrl(origin: string, pathname: string): string {
  return `${origin}${pathname}`;
}

/**
 * Language alternates for a page, keyed by locale, plus `x-default` pointing at
 * the default locale so crawlers have an unambiguous fallback.
 */
export function languageAlternates(
  page: PageKey,
  ...rest: readonly string[]
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of LOCALES) {
    alternates[locale] = path(locale, page, ...rest);
  }
  alternates['x-default'] = path(DEFAULT_LOCALE, page, ...rest);
  return alternates;
}

/** Same page, other locale — used by the language switcher. */
export function alternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function localeSegments(locale: Locale): LocalizedSegments {
  return SEGMENTS[locale];
}

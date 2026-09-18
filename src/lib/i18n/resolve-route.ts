import { type Locale, LOCALES } from '@/config/site';
import {
  type AccommodationCategory,
  categoryBySlug,
  categorySlug,
  publishedCategories,
} from '@/data/accommodation';
import { type PageKey, PAGE_KEYS, localeSegments } from './routes';

/**
 * Localized URLs differ per language (`/es/alojamiento` vs
 * `/en/accommodation`), which file-based routing cannot express directly.
 * A single catch-all segment resolves the incoming path to a page key, so the
 * URLs stay localized and indexable while the code stays organised by page.
 */
export type ResolvedRoute =
  | { kind: 'page'; page: Exclude<PageKey, 'home'> }
  | { kind: 'accommodationDetail'; category: AccommodationCategory };

export function resolveRoute(
  locale: Locale,
  segments: readonly string[],
): ResolvedRoute | undefined {
  const map = localeSegments(locale);

  if (segments.length === 1) {
    const page = PAGE_KEYS.find(
      (key) => key !== 'home' && map[key] === segments[0],
    );
    return page ? { kind: 'page', page: page as Exclude<PageKey, 'home'> } : undefined;
  }

  if (segments.length === 2 && segments[0] === map.accommodation) {
    const category = categoryBySlug(locale, segments[1]);
    return category ? { kind: 'accommodationDetail', category } : undefined;
  }

  return undefined;
}

/** Every static route the catch-all is responsible for, across both locales. */
export function allRouteParams(): { locale: string; segments: string[] }[] {
  const params: { locale: string; segments: string[] }[] = [];

  for (const locale of LOCALES) {
    const map = localeSegments(locale);

    for (const key of PAGE_KEYS) {
      if (key === 'home') continue;
      params.push({ locale, segments: [map[key]] });
    }

    for (const category of publishedCategories()) {
      params.push({
        locale,
        segments: [map.accommodation, categorySlug(locale, category.id)],
      });
    }
  }

  return params;
}

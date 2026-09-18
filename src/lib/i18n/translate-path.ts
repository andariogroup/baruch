import { type Locale, isLocale } from '@/config/site';
import {
  type AccommodationId,
  accommodationCategories,
  categorySlug,
} from '@/data/accommodation';
import { type PageKey, PAGE_KEYS, localeSegments } from './routes';

/**
 * Reverse lookup from a localized URL segment to the locale-independent key it
 * represents, so the language switcher can move a visitor to the equivalent
 * page instead of dropping them on the home page.
 */
type SegmentKey =
  | { kind: 'page'; key: PageKey }
  | { kind: 'category'; key: AccommodationId };

function resolveSegment(
  locale: Locale,
  segment: string,
): SegmentKey | undefined {
  const segments = localeSegments(locale);
  const pageKey = PAGE_KEYS.find(
    (key) => segments[key] !== '' && segments[key] === segment,
  );
  if (pageKey) {
    return { kind: 'page', key: pageKey };
  }

  const category = accommodationCategories.find(
    (item) => categorySlug(locale, item.id) === segment,
  );
  if (category) {
    return { kind: 'category', key: category.id };
  }

  return undefined;
}

function localizeSegment(locale: Locale, key: SegmentKey): string {
  return key.kind === 'page'
    ? localeSegments(locale)[key.key]
    : categorySlug(locale, key.key);
}

/**
 * Translates a pathname into `target`, keeping the visitor on the same page.
 * Unrecognised segments fall back to the target locale's home page rather than
 * producing a URL that does not exist.
 */
export function translatePath(pathname: string, target: Locale): string {
  const [first, ...rest] = pathname.split('/').filter(Boolean);

  if (!first || !isLocale(first)) {
    return `/${target}`;
  }

  const source: Locale = first;
  if (rest.length === 0) {
    return `/${target}`;
  }

  const translated: string[] = [];
  for (const segment of rest) {
    const key = resolveSegment(source, segment);
    if (!key) {
      return `/${target}`;
    }
    translated.push(localizeSegment(target, key));
  }

  return `/${[target, ...translated].join('/')}`;
}

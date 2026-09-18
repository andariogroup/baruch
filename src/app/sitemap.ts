import type { MetadataRoute } from 'next';
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from '@/config/site';
import { categorySlug, publishedCategories } from '@/data/accommodation';
import { type PageKey, PAGE_KEYS, path } from '@/lib/i18n/routes';

/**
 * Only indexable pages are listed. Legal documents are marked `noindex` in
 * their metadata, so including them here would send conflicting signals.
 */
const EXCLUDED: readonly PageKey[] = ['privacy', 'cookies', 'terms'];

const PRIORITIES: Partial<Record<PageKey, number>> = {
  home: 1,
  accommodation: 0.9,
  restaurant: 0.7,
  experiences: 0.7,
  location: 0.7,
  discover: 0.6,
  contact: 0.5,
};

function alternates(page: PageKey, ...rest: readonly string[]) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${SITE_URL}${path(locale, page, ...rest)}`;
  }
  languages['x-default'] = `${SITE_URL}${path(DEFAULT_LOCALE, page, ...rest)}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGE_KEYS) {
      if (EXCLUDED.includes(page)) continue;

      entries.push({
        url: `${SITE_URL}${path(locale, page)}`,
        lastModified,
        changeFrequency: page === 'home' ? 'weekly' : 'monthly',
        priority: PRIORITIES[page] ?? 0.5,
        alternates: alternates(page),
      });
    }

    for (const category of publishedCategories()) {
      const slug = categorySlug(locale, category.id);
      entries.push({
        url: `${SITE_URL}${path(locale, 'accommodation', slug)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: alternates('accommodation', slug),
      });
    }
  }

  return entries;
}

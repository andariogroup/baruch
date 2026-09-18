import { describe, expect, it } from 'vitest';
import { LOCALES, SITE_URL } from '@/config/site';
import { getDictionary } from '@/content';
import { publishedCategories } from '@/data/accommodation';
import sitemap from '@/app/sitemap';
import {
  breadcrumbJsonLd,
  lodgingBusinessJsonLd,
  organizationJsonLd,
} from '@/lib/seo/structured-data';

describe('structured data', () => {
  it('omits unvalidated address, phone and coordinates', () => {
    const dict = getDictionary('es');
    const lodging = lodgingBusinessJsonLd('es', dict);
    const organization = organizationJsonLd(dict);

    for (const node of [lodging, organization]) {
      const address = node.address as Record<string, unknown>;
      expect(address.addressLocality).toBe('Buritaca');
      expect(address.streetAddress).toBeUndefined();
      expect(address.postalCode).toBeUndefined();
      expect(node.telephone).toBeUndefined();
    }

    expect(organization.logo).toBe(`${SITE_URL}/brand/baruch-logo.png`);
    expect(lodging.geo).toBeUndefined();
  });

  it('never asserts a rating or a price', () => {
    const dict = getDictionary('es');
    const serialized = JSON.stringify(lodgingBusinessJsonLd('es', dict));

    expect(serialized).not.toContain('aggregateRating');
    expect(serialized).not.toContain('priceRange');
    expect(serialized).not.toContain('offers');
  });

  it('builds absolute breadcrumb items in order', () => {
    const crumbs = [
      { name: 'Inicio', href: '/es' },
      { name: 'Alojamiento', href: '/es/alojamiento' },
    ];
    const jsonLd = breadcrumbJsonLd(crumbs) as {
      itemListElement: { position: number; item: string }[];
    };

    expect(jsonLd.itemListElement.map((item) => item.position)).toEqual([1, 2]);
    expect(jsonLd.itemListElement[1].item).toBe(`${SITE_URL}/es/alojamiento`);
  });
});

describe('sitemap', () => {
  const entries = sitemap();

  it('lists every locale page and category detail, excluding legal pages', () => {
    // 7 indexable pages plus 6 categories, per locale.
    expect(entries).toHaveLength(LOCALES.length * (7 + publishedCategories().length));

    for (const excluded of ['/privacidad', '/cookies', '/terminos', '/privacy', '/terms']) {
      expect(entries.some((entry) => entry.url.endsWith(excluded))).toBe(false);
    }
  });

  it('uses absolute URLs and declares alternates for both locales', () => {
    for (const entry of entries) {
      expect(entry.url.startsWith(SITE_URL)).toBe(true);

      const languages = entry.alternates?.languages as
        | Record<string, string>
        | undefined;
      expect(languages).toBeDefined();
      expect(languages?.['x-default']).toBeDefined();
      for (const locale of LOCALES) {
        expect(languages?.[locale]?.startsWith(SITE_URL)).toBe(true);
      }
    }
  });

  it('contains no duplicate URLs', () => {
    const urls = entries.map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe('metadata copy', () => {
  it('keeps every page title and description unique within a locale', () => {
    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      const pages = [
        dict.home,
        dict.accommodation,
        dict.restaurant,
        dict.experiences,
        dict.location,
        dict.contact,
        dict.discover,
      ];

      const titles = pages.map((page) => page.title);
      const descriptions = pages.map((page) => page.description);

      expect(new Set(titles).size).toBe(titles.length);
      expect(new Set(descriptions).size).toBe(descriptions.length);

      for (const description of descriptions) {
        expect(description.length).toBeGreaterThan(70);
        expect(description.length).toBeLessThanOrEqual(185);
      }
    }
  });
});

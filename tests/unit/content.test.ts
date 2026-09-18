import { describe, expect, it } from 'vitest';
import { LOCALES, brand } from '@/config/site';
import { getDictionary } from '@/content';
import {
  accommodationCategories,
  categoryBySlug,
  categoryCopy,
  categorySlug,
  publishedCategories,
} from '@/data/accommodation';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { nearbyPlaces, placeCopy } from '@/data/destination';
import { images } from '@/data/images';

/**
 * Content governance is enforced here rather than by review alone: these tests
 * fail the build if an unvalidated fact is published or a translation drifts.
 */

/** Collects every string in a nested object, ignoring keys. */
function collectStrings(value: unknown, found: string[] = []): string[] {
  if (typeof value === 'string') {
    found.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, found);
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectStrings(item, found);
  }
  return found;
}

function collectKeyPaths(value: unknown, prefix = ''): string[] {
  if (!value || typeof value !== 'object') return [prefix];
  if (Array.isArray(value)) return [`${prefix}[]`];

  return Object.entries(value).flatMap(([key, child]) =>
    collectKeyPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('dictionaries', () => {
  it('expose identical key structures across locales', () => {
    const [first, ...rest] = LOCALES.map((locale) =>
      collectKeyPaths(getDictionary(locale)).sort(),
    );

    for (const other of rest) {
      expect(other).toEqual(first);
    }
  });

  it('are fully serializable, so they can cross into Client Components', () => {
    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      expect(() => JSON.stringify(dict)).not.toThrow();
      expect(collectStrings(dict).length).toBeGreaterThan(0);
    }
  });

  it('never leave a template placeholder unnamed', () => {
    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      expect(dict.common.guests.one).toContain('{count}');
      expect(dict.common.guests.other).toContain('{count}');
      expect(dict.footer.rights).toContain('{year}');
    }
  });

  it('publish no price, rate or currency figure', () => {
    // Rates live in the external booking engine; the site must not state one.
    const pricePattern =
      /(\$|COP|USD|EUR)\s?\d|\b\d{1,3}(?:[.,]\d{3})+\b|\bprecio de\b|\bdesde \$/i;

    for (const locale of LOCALES) {
      const offenders = collectStrings(getDictionary(locale)).filter((text) =>
        pricePattern.test(text),
      );
      expect(offenders).toEqual([]);
    }
  });

  it('publish no distance or travel time to nearby destinations', () => {
    // The "20 minutes to Tayrona" figure in the source material is unverified.
    const distancePattern =
      /\b\d+\s?(min|minutos|minutes|hrs?|horas?|hours?|km|kilómetros|kilometers|m)\b/i;

    for (const locale of LOCALES) {
      const strings = [
        ...collectStrings(getDictionary(locale)),
        ...nearbyPlaces.flatMap((place) => {
          const copy = placeCopy(locale, place.id);
          return [copy.name, copy.note];
        }),
      ];

      expect(strings.filter((text) => distancePattern.test(text))).toEqual([]);
    }
  });
});

describe('accommodation catalogue', () => {
  it('publishes exactly the six documented categories', () => {
    expect(publishedCategories()).toHaveLength(6);
    expect(
      publishedCategories()
        .map((category) => category.capacity)
        .sort((a, b) => a - b),
    ).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it('sells private rooms whole and shared rooms per bed', () => {
    for (const category of accommodationCategories) {
      if (category.type === 'PRIVATE') {
        expect(category.bookingMode).toBe('ROOM');
        expect(category.bathroom).toBe('PRIVATE');
        expect(category.amenities).toContain('privateBathroom');
      } else {
        expect(category.bookingMode).toBe('BED');
        expect(category.bathroom).toBe('SHARED');
        expect(category.amenities).toContain('sharedBathroom');
        expect(category.amenities).toContain('locker');
      }
    }
  });

  it('gives every category a unique slug and round-trips it per locale', () => {
    for (const locale of LOCALES) {
      const slugs = publishedCategories().map((category) =>
        categorySlug(locale, category.id),
      );

      expect(new Set(slugs).size).toBe(slugs.length);

      for (const category of publishedCategories()) {
        const slug = categorySlug(locale, category.id);
        expect(categoryBySlug(locale, slug)?.id).toBe(category.id);
      }
    }
  });

  it('describes each category with alt text in the matching locale', () => {
    for (const locale of LOCALES) {
      for (const category of publishedCategories()) {
        const copy = categoryCopy(locale, category.id);
        expect(copy.name.length).toBeGreaterThan(0);
        expect(copy.description.length).toBeGreaterThan(0);
        expect(copy.imageAlt.length).toBeGreaterThan(10);
      }
    }
  });
});

describe('image governance', () => {
  const assets = [
    images.hero,
    images.restaurant,
    images.nature,
    images.sunset,
    images.destination,
    ...Object.values(images.rooms),
  ];

  it('keeps every current asset marked as temporary', () => {
    for (const asset of assets) {
      expect(asset.status).not.toBe('REAL');
      expect(asset.source).toBeDefined();
    }
  });

  it('points at files that exist on disk', () => {
    for (const asset of assets) {
      const filePath = path.join(
        process.cwd(),
        'public',
        asset.src.replace(/^\//, ''),
      );
      expect(existsSync(filePath), asset.src).toBe(true);
    }
  });
});

describe('brand mark', () => {
  it('ships a real logo file for chrome and JSON-LD', () => {
    const filePath = path.join(
      process.cwd(),
      'public',
      brand.logo.src.replace(/^\//, ''),
    );
    expect(existsSync(filePath)).toBe(true);
    expect(brand.logo.width).toBeGreaterThan(0);
    expect(brand.logo.height).toBeGreaterThan(0);
  });
});

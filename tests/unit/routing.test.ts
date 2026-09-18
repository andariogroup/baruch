import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES } from '@/config/site';
import { categorySlug, publishedCategories } from '@/data/accommodation';
import { format, plural } from '@/lib/i18n/format';
import { allRouteParams, resolveRoute } from '@/lib/i18n/resolve-route';
import { PAGE_KEYS, languageAlternates, path } from '@/lib/i18n/routes';
import { translatePath } from '@/lib/i18n/translate-path';

describe('localized paths', () => {
  it('prefixes every page with its locale', () => {
    for (const locale of LOCALES) {
      for (const page of PAGE_KEYS) {
        expect(path(locale, page).startsWith(`/${locale}`)).toBe(true);
      }
    }
  });

  it('gives Spanish and English distinct segments', () => {
    // Shared segments would make the two trees compete as duplicates.
    for (const page of PAGE_KEYS) {
      if (page === 'home' || page === 'cookies') continue;
      expect(path('es', page)).not.toBe(path('en', page).replace('/en', '/es'));
    }
  });

  it('includes an x-default alternate pointing at the default locale', () => {
    const alternates = languageAlternates('accommodation');
    expect(alternates['x-default']).toBe(path(DEFAULT_LOCALE, 'accommodation'));
    for (const locale of LOCALES) {
      expect(alternates[locale]).toBe(path(locale, 'accommodation'));
    }
  });
});

describe('route resolution', () => {
  it('resolves every generated static param', () => {
    for (const { locale, segments } of allRouteParams()) {
      const route = resolveRoute(locale as (typeof LOCALES)[number], segments);
      expect(route, `${locale}/${segments.join('/')}`).toBeDefined();
    }
  });

  it('enumerates both locales for every page and category', () => {
    // Pages minus home, plus one detail page per category, per locale.
    const expected =
      LOCALES.length * (PAGE_KEYS.length - 1 + publishedCategories().length);
    expect(allRouteParams()).toHaveLength(expected);
  });

  it('rejects a slug from the other locale', () => {
    expect(resolveRoute('es', ['accommodation'])).toBeUndefined();
    expect(resolveRoute('en', ['alojamiento'])).toBeUndefined();
    expect(
      resolveRoute('es', ['alojamiento', 'private-2-persons']),
    ).toBeUndefined();
  });

  it('rejects unknown and over-deep paths', () => {
    expect(resolveRoute('es', ['no-existe'])).toBeUndefined();
    expect(resolveRoute('es', ['alojamiento', 'privada-2-personas', 'x'])).toBeUndefined();
  });
});

describe('language switching', () => {
  it('keeps the visitor on the equivalent page', () => {
    expect(translatePath('/es/alojamiento', 'en')).toBe('/en/accommodation');
    expect(translatePath('/en/discover-buritaca', 'es')).toBe(
      '/es/descubre-buritaca',
    );
  });

  it('translates accommodation detail slugs', () => {
    for (const category of publishedCategories()) {
      const source = `/es/alojamiento/${categorySlug('es', category.id)}`;
      const target = `/en/accommodation/${categorySlug('en', category.id)}`;
      expect(translatePath(source, 'en')).toBe(target);
      expect(translatePath(target, 'es')).toBe(source);
    }
  });

  it('falls back to the target home page for unknown paths', () => {
    expect(translatePath('/es/pagina-inexistente', 'en')).toBe('/en');
    expect(translatePath('/unknown', 'es')).toBe('/es');
    expect(translatePath('/es', 'en')).toBe('/en');
  });
});

describe('template formatting', () => {
  it('fills named placeholders', () => {
    expect(format('© {year} BARUCH', { year: 2026 })).toBe('© 2026 BARUCH');
  });

  it('leaves unknown placeholders untouched rather than printing undefined', () => {
    expect(format('{a} {b}', { a: '1' })).toBe('1 {b}');
  });

  it('selects singular and plural variants', () => {
    const template = { one: '{count} persona', other: '{count} personas' };
    expect(plural(template, 1)).toBe('1 persona');
    expect(plural(template, 4)).toBe('4 personas');
  });
});

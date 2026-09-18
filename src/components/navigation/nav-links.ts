import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { type PageKey, path } from '@/lib/i18n/routes';

export type NavLink = { key: PageKey; label: string; href: string };

/** Primary navigation, kept short and task-oriented. */
export function primaryNavLinks(
  locale: Locale,
  dict: Dictionary,
): readonly NavLink[] {
  const pages: readonly { key: PageKey; label: string }[] = [
    { key: 'accommodation', label: dict.nav.accommodation },
    { key: 'restaurant', label: dict.nav.restaurant },
    { key: 'experiences', label: dict.nav.experiences },
    { key: 'discover', label: dict.nav.discover },
    { key: 'location', label: dict.nav.location },
    { key: 'contact', label: dict.nav.contact },
  ];

  return pages.map(({ key, label }) => ({
    key,
    label,
    href: path(locale, key),
  }));
}

export function legalNavLinks(
  locale: Locale,
  dict: Dictionary,
): readonly NavLink[] {
  return [
    { key: 'privacy' as PageKey, label: dict.legal.privacy.heading },
    { key: 'cookies' as PageKey, label: dict.legal.cookies.heading },
    { key: 'terms' as PageKey, label: dict.legal.terms.heading },
  ].map(({ key, label }) => ({ key, label, href: path(locale, key) }));
}

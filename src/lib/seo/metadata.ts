import type { Metadata } from 'next';
import { type Locale, SITE_URL } from '@/config/site';
import { getDictionary } from '@/content';
import { type PageKey, languageAlternates, path } from '@/lib/i18n/routes';

type PageMetadataInput = {
  locale: Locale;
  page: PageKey;
  /** Extra path segments, e.g. an accommodation slug. */
  segments?: readonly string[];
  title: string | { absolute: string };
  description: string;
  /** Page-specific social image; falls back to the site default. */
  image?: { src: string; width: number; height: number; alt: string };
  noindex?: boolean;
};

/**
 * Builds canonical URL, hreflang alternates and Open Graph tags for a page.
 *
 * Every indexable page gets a unique title and description plus a canonical
 * that points at its own localized URL, so the ES and EN trees are indexed
 * separately instead of competing as duplicates.
 */
export function buildPageMetadata({
  locale,
  page,
  segments = [],
  title,
  description,
  image,
  noindex = false,
}: PageMetadataInput): Metadata {
  const dict = getDictionary(locale);
  const pathname = path(locale, page, ...segments);
  const resolvedTitle = typeof title === 'string' ? title : title.absolute;

  const openGraphImage = image
    ? [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: languageAlternates(page, ...segments),
    },
    openGraph: {
      type: 'website',
      siteName: dict.meta.siteName,
      locale: dict.meta.htmlLang,
      url: `${SITE_URL}${pathname}`,
      title: resolvedTitle,
      description,
      images: openGraphImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: image ? [image.src] : undefined,
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/** `%s` is replaced by each page's own title. */
export function titleTemplate(locale: Locale): string {
  return `%s | ${getDictionary(locale).meta.siteName}`;
}

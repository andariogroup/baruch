import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type Locale, isLocale } from '@/config/site';
import { getDictionary } from '@/content';
import { categoryCopy, categorySlug } from '@/data/accommodation';
import { images } from '@/data/images';
import { allRouteParams, resolveRoute } from '@/lib/i18n/resolve-route';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { AccommodationDetailView } from '@/views/AccommodationDetailView';
import { AccommodationIndexView } from '@/views/AccommodationIndexView';
import { ContactView } from '@/views/ContactView';
import { DiscoverView } from '@/views/DiscoverView';
import { ExperiencesView } from '@/views/ExperiencesView';
import { LegalView, type LegalPage } from '@/views/LegalView';
import { LocationView } from '@/views/LocationView';
import { RestaurantView } from '@/views/RestaurantView';

/**
 * Every non-home route resolves here.
 *
 * Localized URL segments differ per language, which file-based routing cannot
 * express; a catch-all keeps the URLs localized while `generateStaticParams`
 * still enumerates the complete, finite route set so all pages prerender and
 * anything outside it returns a real 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return allRouteParams();
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/[...segments]'>): Promise<Metadata> {
  const { locale, segments } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const route = resolveRoute(locale, segments);
  if (!route) return {};

  if (route.kind === 'accommodationDetail') {
    const copy = categoryCopy(locale, route.category.id);
    return buildPageMetadata({
      locale,
      page: 'accommodation',
      segments: [categorySlug(locale, route.category.id)],
      title: `${copy.name} — ${dict.accommodation.heading}`,
      description: copy.description,
      image: {
        src: route.category.image.src,
        width: route.category.image.width,
        height: route.category.image.height,
        alt: copy.imageAlt,
      },
    });
  }

  const social = {
    src: images.hero.src,
    width: images.hero.width,
    height: images.hero.height,
    alt: dict.home.hero.imageAlt,
  };

  switch (route.page) {
    case 'accommodation':
      return buildPageMetadata({
        locale,
        page: 'accommodation',
        title: dict.accommodation.title,
        description: dict.accommodation.description,
        image: {
          src: images.rooms['private-2'].src,
          width: images.rooms['private-2'].width,
          height: images.rooms['private-2'].height,
          alt: categoryCopy(locale, 'private-2').imageAlt,
        },
      });
    case 'restaurant':
      return buildPageMetadata({
        locale,
        page: 'restaurant',
        title: dict.restaurant.title,
        description: dict.restaurant.description,
        image: {
          src: images.restaurant.src,
          width: images.restaurant.width,
          height: images.restaurant.height,
          alt: dict.restaurant.imageAlt,
        },
      });
    case 'experiences':
      return buildPageMetadata({
        locale,
        page: 'experiences',
        title: dict.experiences.title,
        description: dict.experiences.description,
        image: social,
      });
    case 'location':
      return buildPageMetadata({
        locale,
        page: 'location',
        title: dict.location.title,
        description: dict.location.description,
        image: social,
      });
    case 'contact':
      return buildPageMetadata({
        locale,
        page: 'contact',
        title: dict.contact.title,
        description: dict.contact.description,
      });
    case 'discover':
      return buildPageMetadata({
        locale,
        page: 'discover',
        title: dict.discover.title,
        description: dict.discover.description,
        image: {
          src: images.destination.src,
          width: images.destination.width,
          height: images.destination.height,
          alt: dict.home.hero.imageAlt,
        },
      });
    case 'privacy':
    case 'cookies':
    case 'terms': {
      const document = dict.legal[route.page];
      return buildPageMetadata({
        locale,
        page: route.page,
        title: document.title,
        description: document.description,
        // Legal pages add no search value and would dilute the indexed set.
        noindex: true,
      });
    }
    default:
      return {};
  }
}

export default async function SegmentPage({
  params,
}: PageProps<'/[locale]/[...segments]'>) {
  const { locale, segments } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const route = resolveRoute(locale, segments);
  if (!route) notFound();

  if (route.kind === 'accommodationDetail') {
    return (
      <AccommodationDetailView
        locale={locale}
        dict={dict}
        category={route.category}
      />
    );
  }

  return renderPage(locale, route.page);
}

function renderPage(locale: Locale, page: Exclude<string, never>) {
  const dict = getDictionary(locale);

  switch (page) {
    case 'accommodation':
      return <AccommodationIndexView locale={locale} dict={dict} />;
    case 'restaurant':
      return <RestaurantView locale={locale} dict={dict} />;
    case 'experiences':
      return <ExperiencesView locale={locale} dict={dict} />;
    case 'location':
      return <LocationView locale={locale} dict={dict} />;
    case 'contact':
      return <ContactView locale={locale} dict={dict} />;
    case 'discover':
      return <DiscoverView locale={locale} dict={dict} />;
    case 'privacy':
    case 'cookies':
    case 'terms':
      return (
        <LegalView locale={locale} dict={dict} page={page as LegalPage} />
      );
    default:
      notFound();
  }
}

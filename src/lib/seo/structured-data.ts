import { type Locale, SITE_URL, brand, contact, location } from '@/config/site';
import type { Dictionary } from '@/content/types';
import {
  type AccommodationCategory,
  amenityLabel,
  GENERAL_AMENITIES,
} from '@/data/accommodation';
import { absoluteUrl, path } from '@/lib/i18n/routes';

/**
 * Structured data is only emitted for facts that are verified and visible on
 * the page. Address, phone, coordinates, opening hours, prices and ratings are
 * omitted while they remain unvalidated — an incomplete `PostalAddress` is
 * better than an invented one, and `aggregateRating` must never be guessed.
 */

type JsonLdObject = Record<string, unknown>;

function postalAddress(): JsonLdObject {
  const address: JsonLdObject = {
    '@type': 'PostalAddress',
    addressLocality: location.locality,
    addressRegion: location.region,
    addressCountry: location.countryCode,
  };

  if (location.streetAddress) {
    address.streetAddress = location.streetAddress;
  }
  if (location.postalCode) {
    address.postalCode = location.postalCode;
  }

  return address;
}

export function websiteJsonLd(locale: Locale, dict: Dictionary): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: dict.meta.siteName,
    url: absoluteUrl(SITE_URL, path(locale, 'home')),
    inLanguage: dict.meta.htmlLang,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function organizationJsonLd(dict: Dictionary): JsonLdObject {
  const organization: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: dict.meta.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}${brand.logo.src}`,
    address: postalAddress(),
  };

  if (contact.phone) {
    organization.telephone = contact.phone;
  }
  if (contact.email) {
    organization.email = contact.email;
  }

  return organization;
}

/**
 * `LodgingBusiness` rather than `Hotel`: BARUCH operates as a hostal with
 * private rooms and shared dormitories, and the narrower type would assert
 * facilities that have not been confirmed.
 */
export function lodgingBusinessJsonLd(
  locale: Locale,
  dict: Dictionary,
): JsonLdObject {
  const lodging: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE_URL}/#lodging`,
    name: dict.meta.siteName,
    description: dict.home.description,
    url: absoluteUrl(SITE_URL, path(locale, 'home')),
    address: postalAddress(),
    amenityFeature: GENERAL_AMENITIES.map((key) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenityLabel(locale, key),
      value: true,
    })),
  };

  if (contact.phone) {
    lodging.telephone = contact.phone;
  }
  if (location.coordinates) {
    lodging.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    };
  }

  return lodging;
}

/** Takes the same crumb shape the `Breadcrumbs` component renders. */
export function breadcrumbJsonLd(
  items: readonly { name: string; href: string }[],
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(SITE_URL, item.href),
    })),
  };
}

/**
 * Accommodation categories are modelled without `offers`: rates live in the
 * external booking engine and are not published here, so any price would be
 * fabricated.
 */
export function accommodationJsonLd(
  locale: Locale,
  dict: Dictionary,
  category: AccommodationCategory,
  name: string,
  description: string,
  url: string,
): JsonLdObject {
  const amenities = [...category.amenities, ...GENERAL_AMENITIES];

  return {
    '@context': 'https://schema.org',
    '@type': category.type === 'SHARED' ? 'Room' : 'HotelRoom',
    name,
    description,
    url: absoluteUrl(SITE_URL, url),
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: category.capacity,
      unitText: locale === 'es' ? 'persona' : 'guest',
    },
    amenityFeature: amenities.map((key) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenityLabel(locale, key),
      value: true,
    })),
    containedInPlace: {
      '@id': `${SITE_URL}/#lodging`,
      '@type': 'LodgingBusiness',
      name: dict.meta.siteName,
    },
  };
}

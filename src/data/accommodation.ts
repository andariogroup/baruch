import type { Locale } from '@/config/site';
import { type ImageAsset, images } from './images';

/**
 * Accommodation is published by type and capacity, never by physical room.
 * The public catalogue communicates categories; the external booking engine
 * handles real availability and room assignment.
 */
export type AccommodationId =
  | 'private-2'
  | 'private-3'
  | 'private-4'
  | 'private-5'
  | 'shared-6'
  | 'shared-7';

export type AccommodationType = 'PRIVATE' | 'SHARED';
export type BookingMode = 'ROOM' | 'BED';
export type BathroomType = 'PRIVATE' | 'SHARED';

/** Confirmed amenities only. Anything else stays unpublished. */
export type AmenityKey =
  | 'privateBathroom'
  | 'sharedBathroom'
  | 'locker'
  | 'wifi'
  | 'powerOutlets';

export type AccommodationCategory = {
  id: AccommodationId;
  type: AccommodationType;
  capacity: number;
  bookingMode: BookingMode;
  bathroom: BathroomType;
  /** Category-specific confirmed amenities, excluding the site-wide ones. */
  amenities: readonly AmenityKey[];
  image: ImageAsset;
  published: boolean;
};

/** Confirmed for every category, so it is listed once rather than repeated. */
export const GENERAL_AMENITIES: readonly AmenityKey[] = [
  'wifi',
  'powerOutlets',
];

export const accommodationCategories: readonly AccommodationCategory[] = [
  {
    id: 'private-2',
    type: 'PRIVATE',
    capacity: 2,
    bookingMode: 'ROOM',
    bathroom: 'PRIVATE',
    amenities: ['privateBathroom'],
    image: images.rooms['private-2'],
    published: true,
  },
  {
    id: 'private-3',
    type: 'PRIVATE',
    capacity: 3,
    bookingMode: 'ROOM',
    bathroom: 'PRIVATE',
    amenities: ['privateBathroom'],
    image: images.rooms['private-3'],
    published: true,
  },
  {
    id: 'private-4',
    type: 'PRIVATE',
    capacity: 4,
    bookingMode: 'ROOM',
    bathroom: 'PRIVATE',
    amenities: ['privateBathroom'],
    image: images.rooms['private-4'],
    published: true,
  },
  {
    id: 'private-5',
    type: 'PRIVATE',
    capacity: 5,
    bookingMode: 'ROOM',
    bathroom: 'PRIVATE',
    amenities: ['privateBathroom'],
    image: images.rooms['private-5'],
    published: true,
  },
  {
    id: 'shared-6',
    type: 'SHARED',
    capacity: 6,
    bookingMode: 'BED',
    bathroom: 'SHARED',
    amenities: ['sharedBathroom', 'locker'],
    image: images.rooms['shared-6'],
    published: true,
  },
  {
    id: 'shared-7',
    type: 'SHARED',
    capacity: 7,
    bookingMode: 'BED',
    bathroom: 'SHARED',
    amenities: ['sharedBathroom', 'locker'],
    image: images.rooms['shared-7'],
    published: true,
  },
];

const SLUGS: Record<Locale, Record<AccommodationId, string>> = {
  es: {
    'private-2': 'privada-2-personas',
    'private-3': 'privada-3-personas',
    'private-4': 'privada-4-personas',
    'private-5': 'privada-5-personas',
    'shared-6': 'compartida-6-personas',
    'shared-7': 'compartida-7-personas',
  },
  en: {
    'private-2': 'private-2-persons',
    'private-3': 'private-3-persons',
    'private-4': 'private-4-persons',
    'private-5': 'private-5-persons',
    'shared-6': 'shared-6-persons',
    'shared-7': 'shared-7-persons',
  },
};

/** Localized display copy. Base descriptions come from the master spec. */
type CategoryCopy = { name: string; description: string; imageAlt: string };

const COPY: Record<Locale, Record<AccommodationId, CategoryCopy>> = {
  es: {
    'private-2': {
      name: 'Privada para 2 personas',
      description:
        'Cómoda habitación privada para parejas o 2 personas, con baño privado.',
      imageAlt:
        'Habitación de hostal con cama doble, ropa de cama clara y luz natural',
    },
    'private-3': {
      name: 'Privada para 3 personas',
      description:
        'Opción para grupos pequeños que prefieren mantener la habitación completa.',
      imageAlt:
        'Habitación privada de hostal con tres camas individuales y mobiliario de madera',
    },
    'private-4': {
      name: 'Privada para 4 personas',
      description:
        'Ideal para familias o grupos que viajan juntos y quieren privacidad.',
      imageAlt:
        'Habitación amplia de hostal con cuatro camas y ventana con vegetación al fondo',
    },
    'private-5': {
      name: 'Privada para 5 personas',
      description:
        'Espacio para grupos de hasta 5 personas, en una sola habitación privada.',
      imageAlt:
        'Habitación familiar de hostal con varias camas y luz cálida de tarde',
    },
    'shared-6': {
      name: 'Compartida para 6 personas',
      description:
        'Cama individual en habitación compartida, con baño compartido y locker individual.',
      imageAlt:
        'Habitación compartida de hostal con camas individuales y lockers de madera',
    },
    'shared-7': {
      name: 'Compartida para 7 personas',
      description:
        'Cama individual en habitación compartida, con baño compartido y locker individual.',
      imageAlt:
        'Dormitorio compartido luminoso con camas individuales ordenadas y lockers',
    },
  },
  en: {
    'private-2': {
      name: 'Private for 2 guests',
      description:
        'A comfortable private room for couples or two guests, with a private bathroom.',
      imageAlt:
        'Hostel room with a double bed, light bedding and natural daylight',
    },
    'private-3': {
      name: 'Private for 3 guests',
      description:
        'An option for small groups who would rather keep the whole room.',
      imageAlt:
        'Private hostel room with three single beds and wooden furniture',
    },
    'private-4': {
      name: 'Private for 4 guests',
      description:
        'Well suited to families or groups travelling together who want privacy.',
      imageAlt:
        'Spacious hostel room with four beds and a window framing greenery',
    },
    'private-5': {
      name: 'Private for 5 guests',
      description:
        'Room for groups of up to five guests, all in a single private room.',
      imageAlt:
        'Family hostel room with several beds and warm afternoon light',
    },
    'shared-6': {
      name: 'Shared for 6 guests',
      description:
        'A single bed in a shared room, with a shared bathroom and an individual locker.',
      imageAlt:
        'Shared hostel room with single beds and wooden lockers',
    },
    'shared-7': {
      name: 'Shared for 7 guests',
      description:
        'A single bed in a shared room, with a shared bathroom and an individual locker.',
      imageAlt:
        'Bright shared dormitory with tidy single beds and lockers',
    },
  },
};

const AMENITY_LABELS: Record<Locale, Record<AmenityKey, string>> = {
  es: {
    privateBathroom: 'Baño privado',
    sharedBathroom: 'Baño compartido',
    locker: 'Locker individual',
    wifi: 'Wi-Fi',
    powerOutlets: 'Tomacorrientes',
  },
  en: {
    privateBathroom: 'Private bathroom',
    sharedBathroom: 'Shared bathroom',
    locker: 'Individual locker',
    wifi: 'Wi-Fi',
    powerOutlets: 'Power outlets',
  },
};

export function publishedCategories(): readonly AccommodationCategory[] {
  return accommodationCategories.filter((category) => category.published);
}

export function categorySlug(locale: Locale, id: AccommodationId): string {
  return SLUGS[locale][id];
}

export function categoryCopy(
  locale: Locale,
  id: AccommodationId,
): CategoryCopy {
  return COPY[locale][id];
}

export function amenityLabel(locale: Locale, key: AmenityKey): string {
  return AMENITY_LABELS[locale][key];
}

/** Resolves a localized slug back to a published category. */
export function categoryBySlug(
  locale: Locale,
  slug: string,
): AccommodationCategory | undefined {
  const id = (Object.keys(SLUGS[locale]) as AccommodationId[]).find(
    (key) => SLUGS[locale][key] === slug,
  );
  return id
    ? publishedCategories().find((category) => category.id === id)
    : undefined;
}

export function categoriesByType(
  type: AccommodationType,
): readonly AccommodationCategory[] {
  return publishedCategories().filter((category) => category.type === type);
}

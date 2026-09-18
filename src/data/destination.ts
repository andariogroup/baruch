import type { Locale } from '@/config/site';

/**
 * Destinations and services named in the project documentation as being around
 * BARUCH.
 *
 * Distances and travel times are intentionally absent. The project material
 * mentions Tayrona being roughly 20 minutes away, but that figure is not
 * verified and must not be published.
 */
export type NearbyKind = 'destination' | 'nature' | 'service';

export type NearbyPlace = {
  id: string;
  kind: NearbyKind;
};

export const nearbyPlaces: readonly NearbyPlace[] = [
  { id: 'tayrona', kind: 'destination' },
  { id: 'palomino', kind: 'destination' },
  { id: 'quebradaValencia', kind: 'nature' },
  { id: 'beaches', kind: 'nature' },
  { id: 'river', kind: 'nature' },
  { id: 'entertainment', kind: 'service' },
  { id: 'supermarket', kind: 'service' },
  { id: 'publicTransport', kind: 'service' },
];

type PlaceCopy = { name: string; note: string };

const COPY: Record<Locale, Record<string, PlaceCopy>> = {
  es: {
    tayrona: {
      name: 'Parque Nacional Natural Tayrona',
      note: 'Uno de los destinos más conocidos de la costa caribeña colombiana.',
    },
    palomino: {
      name: 'Palomino',
      note: 'Pueblo costero sobre el mismo corredor de la costa.',
    },
    quebradaValencia: {
      name: 'Quebrada Valencia',
      note: 'Recorrido natural con pozos y cascadas en la zona.',
    },
    beaches: {
      name: 'Playas de la zona',
      note: 'Playas abiertas del Caribe, a las que se accede desde Buritaca.',
    },
    river: {
      name: 'Río Buritaca',
      note: 'El río que da nombre al lugar y define el paisaje alrededor.',
    },
    entertainment: {
      name: 'Entretenimiento cercano',
      note: 'Establecimientos de la zona donde se concentra la vida social.',
    },
    supermarket: {
      name: 'Supermercado',
      note: 'Comercio cercano para lo que necesites durante la estadía.',
    },
    publicTransport: {
      name: 'Transporte público',
      note: 'Acceso a transporte para moverte por el corredor de la costa.',
    },
  },
  en: {
    tayrona: {
      name: 'Tayrona National Natural Park',
      note: 'One of the best-known destinations on the Colombian Caribbean coast.',
    },
    palomino: {
      name: 'Palomino',
      note: 'A coastal town along the same stretch of coast.',
    },
    quebradaValencia: {
      name: 'Quebrada Valencia',
      note: 'A nature walk with pools and waterfalls in the area.',
    },
    beaches: {
      name: 'Beaches nearby',
      note: 'Open Caribbean beaches reached from Buritaca.',
    },
    river: {
      name: 'Buritaca river',
      note: 'The river the area is named after, and what shapes the landscape.',
    },
    entertainment: {
      name: 'Nearby entertainment',
      note: 'Venues around the area where the social life gathers.',
    },
    supermarket: {
      name: 'Supermarket',
      note: 'Shops nearby for whatever you need during your stay.',
    },
    publicTransport: {
      name: 'Public transport',
      note: 'Transport links for getting around the coastal corridor.',
    },
  },
};

export function placeCopy(locale: Locale, id: string): PlaceCopy {
  return COPY[locale][id];
}

/** Locality-only map search. Prefer `getMapUrl()` from site config. */
export const MAP_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=Buritaca%2C%20Magdalena%2C%20Colombia';

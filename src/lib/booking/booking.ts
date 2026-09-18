import { bookingEngine } from '@/config/site';

/**
 * Booking integration boundary.
 *
 * BARUCH does not manage inventory, availability or reservations. The site's
 * only responsibility is handing the visitor off to the external booking
 * engine in a new tab. No API, SDK, iframe, authentication or webhook is
 * assumed, because the provider's capabilities are not documented yet.
 */
export type BookingLinkState =
  | { available: true; url: string }
  | { available: false; url: null };

export function getBookingLink(): BookingLinkState {
  const raw = bookingEngine.url;

  if (!raw) {
    return { available: false, url: null };
  }

  // A misconfigured value must not render as a broken link.
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return { available: false, url: null };
    }
    return { available: true, url: parsed.toString() };
  } catch {
    return { available: false, url: null };
  }
}

export function isBookingConfigured(): boolean {
  return getBookingLink().available;
}

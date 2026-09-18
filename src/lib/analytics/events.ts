/**
 * Analytics contract.
 *
 * Only events the website can actually observe are defined. A reservation is
 * completed on the booking provider's own domain, so `booking_complete` and
 * `search_availability` are deliberately absent: the site cannot witness them
 * and must not fabricate them.
 *
 * Payloads carry categorical values only — never names, emails, message bodies
 * or any other personal data.
 */
export type AnalyticsEvent =
  | { name: 'page_view'; path: string }
  | { name: 'view_accommodation' }
  | { name: 'view_accommodation_detail'; category: string }
  | { name: 'booking_click'; placement: string }
  | { name: 'outbound_booking_click'; placement: string }
  | { name: 'whatsapp_click'; context: string }
  | { name: 'contact_submit'; outcome: 'success' | 'error' }
  | { name: 'restaurant_view' }
  | { name: 'experience_view' }
  | { name: 'language_change'; to: string };

type GtagWindow = Window & {
  gtag?: (
    command: 'event',
    eventName: string,
    params?: Record<string, string>,
  ) => void;
};

/**
 * Fire-and-forget. If no analytics provider is configured the call is a no-op,
 * so a missing measurement ID never breaks an interaction.
 */
export function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  const { name, ...params } = event;
  const gtag = (window as GtagWindow).gtag;

  if (typeof gtag !== 'function') return;

  try {
    gtag('event', name, params as Record<string, string>);
  } catch {
    // Measurement must never surface an error to the visitor.
  }
}

'use client';

import { ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/types';
import { track } from '@/lib/analytics/events';
import { getBookingLink } from '@/lib/booking/booking';
import {
  type ButtonSize,
  type ButtonVariant,
  buttonClasses,
} from '@/components/ui/Button';

type BookingCTAProps = {
  dict: Dictionary;
  /** Where on the page this CTA sits; recorded with the click event. */
  placement: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  label?: string;
};

/**
 * The single way to reach the booking engine.
 *
 * Nothing about the provider leaks into the rest of the UI: components ask for
 * a booking CTA and this decides whether a usable link exists. When the URL is
 * not configured, the CTA renders as a disabled control rather than a broken
 * link, so production never ships a dead primary action.
 */
export function BookingCTA({
  dict,
  placement,
  variant = 'primary',
  size = 'md',
  className,
  label,
}: BookingCTAProps) {
  const link = getBookingLink();
  const text = label ?? dict.common.book;

  if (!link.available) {
    return (
      <span
        className={buttonClasses(variant, size, className)}
        // Communicates the state without pretending to be actionable.
        aria-disabled="true"
        role="link"
        title={dict.common.bookUnavailable}
      >
        {dict.common.bookUnavailable}
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
      aria-label={`${text} — ${dict.common.bookAria} (${dict.common.opensInNewTab})`}
      onClick={() => {
        track({ name: 'booking_click', placement });
        track({ name: 'outbound_booking_click', placement });
      }}
    >
      {text}
      <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}

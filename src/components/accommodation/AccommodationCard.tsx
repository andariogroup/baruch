import { BedDouble, Droplets, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import {
  type AccommodationCategory,
  categoryCopy,
  categorySlug,
} from '@/data/accommodation';
import { isBookingConfigured } from '@/lib/booking/booking';
import { plural } from '@/lib/i18n/format';
import { path } from '@/lib/i18n/routes';

/**
 * Catalogue card for one accommodation category.
 *
 * Shared rooms must never read like a whole-room booking, so the sales model
 * is stated on the card itself rather than only in the detail page. No price
 * is shown because rates live in the external booking engine.
 */
export function AccommodationCard({
  locale,
  dict,
  category,
  priority = false,
}: {
  locale: Locale;
  dict: Dictionary;
  category: AccommodationCategory;
  priority?: boolean;
}) {
  const copy = categoryCopy(locale, category.id);
  const href = path(
    locale,
    'accommodation',
    categorySlug(locale, category.id),
  );
  const isShared = category.type === 'SHARED';

  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-card border border-sand-deep bg-ivory shadow-soft transition-shadow duration-300 hover:shadow-lifted">
      <div className="relative aspect-4/5 overflow-hidden bg-sand">
        <Image
          src={category.image.src}
          alt={copy.imageAlt}
          width={category.image.width}
          height={category.image.height}
          sizes="(min-width: 1280px) 22rem, (min-width: 768px) 45vw, 92vw"
          priority={priority}
          className="size-full object-cover transition-transform duration-700 ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
        <p className="absolute top-3 left-3 rounded-full bg-ivory px-3 py-1 text-xs font-semibold tracking-wide text-ink">
          {isShared
            ? dict.accommodation.bookingMode.bed
            : dict.accommodation.bookingMode.room}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl leading-snug">
            <Link href={href} className="hover:text-lagoon-strong">
              {copy.name}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted">
            {copy.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-muted">
          <li className="inline-flex items-center gap-1.5">
            <Users className="size-4 shrink-0 opacity-70" aria-hidden="true" />
            {plural(dict.common.guests, category.capacity)}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Droplets
              className="size-4 shrink-0 opacity-70"
              aria-hidden="true"
            />
            {isShared
              ? dict.accommodation.bathroom.shared
              : dict.accommodation.bathroom.private}
          </li>
          {isShared ? (
            <li className="inline-flex items-center gap-1.5">
              <BedDouble
                className="size-4 shrink-0 opacity-70"
                aria-hidden="true"
              />
              {`1 ${dict.common.bed}`}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-1">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center text-sm font-medium text-lagoon-strong underline decoration-lagoon/40 underline-offset-4 transition-colors hover:decoration-lagoon-strong"
          >
            {dict.common.seeDetails}
            <span className="sr-only">: {copy.name}</span>
          </Link>
          {isBookingConfigured() ? (
            <BookingCTA
              dict={dict}
              placement={`accommodation-card-${category.id}`}
              size="sm"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

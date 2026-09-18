import { BedDouble, Droplets, Users } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { AccommodationCard } from '@/components/accommodation/AccommodationCard';
import { AmenityList } from '@/components/accommodation/AmenityList';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { AccommodationDetailTracker } from '@/components/accommodation/AccommodationDetailTracker';
import {
  type AccommodationCategory,
  GENERAL_AMENITIES,
  categoryCopy,
  categorySlug,
  publishedCategories,
} from '@/data/accommodation';
import { plural } from '@/lib/i18n/format';
import { path } from '@/lib/i18n/routes';
import {
  accommodationJsonLd,
  breadcrumbJsonLd,
} from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Detail page for a single category.
 *
 * The booking model is stated before the CTA so a visitor booking a shared
 * room understands they are reserving one bed, not the room.
 */
export function AccommodationDetailView({
  locale,
  dict,
  category,
}: {
  locale: Locale;
  dict: Dictionary;
  category: AccommodationCategory;
}) {
  const copy = categoryCopy(locale, category.id);
  const isShared = category.type === 'SHARED';
  const detailPath = path(
    locale,
    'accommodation',
    categorySlug(locale, category.id),
  );

  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.accommodation, href: path(locale, 'accommodation') },
    { name: copy.name, href: detailPath },
  ];

  const others = publishedCategories().filter(
    (item) => item.id !== category.id,
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={accommodationJsonLd(
          locale,
          dict,
          category,
          copy.name,
          copy.description,
          detailPath,
        )}
      />
      <AccommodationDetailTracker categoryId={category.id} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={copy.name}
        intro={copy.description}
      >
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li className="inline-flex items-center gap-2">
            <Users className="size-4 opacity-70" aria-hidden="true" />
            {plural(dict.common.guests, category.capacity)}
          </li>
          <li className="inline-flex items-center gap-2">
            <Droplets className="size-4 opacity-70" aria-hidden="true" />
            {isShared
              ? dict.accommodation.bathroom.shared
              : dict.accommodation.bathroom.private}
          </li>
          <li className="inline-flex items-center gap-2">
            <BedDouble className="size-4 opacity-70" aria-hidden="true" />
            {isShared
              ? dict.accommodation.bookingMode.bed
              : dict.accommodation.bookingMode.room}
          </li>
        </ul>
      </PageHeader>

      <Section tone="ivory" space="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-10">
              <div className="overflow-hidden rounded-gallery bg-sand">
                <Image
                  src={category.image.src}
                  alt={copy.imageAlt}
                  width={category.image.width}
                  height={category.image.height}
                  sizes="(min-width: 1024px) 44rem, 100vw"
                  priority
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl">
                  {dict.accommodation.detailDescriptionHeading}
                </h2>
                <p className="leading-relaxed text-ink-muted text-pretty">
                  {copy.description}
                </p>
                <p className="leading-relaxed text-ink-muted text-pretty">
                  {isShared
                    ? dict.accommodation.bookingModeHint.bed
                    : dict.accommodation.bookingModeHint.room}
                </p>
              </div>
            </div>

            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-card border border-sand-deep bg-sand/50 p-6">
                <h2 className="text-xl">
                  {dict.accommodation.amenitiesHeading}
                </h2>
                <div className="mt-5">
                  <AmenityList
                    locale={locale}
                    amenities={[...category.amenities, ...GENERAL_AMENITIES]}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <BookingCTA
                    dict={dict}
                    placement={`accommodation-detail-${category.id}`}
                    size="lg"
                  />
                  <WhatsAppCTA
                    dict={dict}
                    context="accommodation"
                    size="lg"
                  />
                </div>
              </div>

              <PendingNote dict={dict} label={dict.accommodation.ratesHeading}>
                {dict.accommodation.ratesPending}
              </PendingNote>
              <PendingNote dict={dict}>
                {dict.accommodation.amenityPendingNote}
              </PendingNote>
              <PendingNote
                dict={dict}
                label={dict.accommodation.policiesHeading}
              >
                {dict.accommodation.policiesPending}
              </PendingNote>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="sand" space="compact">
        <Container>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            {dict.accommodation.otherHeading}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((item) => (
              <li key={item.id} className="flex">
                <AccommodationCard
                  locale={locale}
                  dict={dict}
                  category={item}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}

import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { AccommodationCard } from '@/components/accommodation/AccommodationCard';
import { AmenityList } from '@/components/accommodation/AmenityList';
import { PageViewTracker } from '@/components/analytics/PageViewTracker';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { GENERAL_AMENITIES, categoriesByType } from '@/data/accommodation';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Catalogue page. Private and shared inventory are separated because they are
 * sold differently: a whole room versus a single bed. Conflating them is the
 * most likely source of a booking mismatch.
 */
export function AccommodationIndexView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const privateRooms = categoriesByType('PRIVATE');
  const sharedRooms = categoriesByType('SHARED');

  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.accommodation, href: path(locale, 'accommodation') },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageViewTracker event={{ name: 'view_accommodation' }} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.accommodation.heading}
        intro={dict.accommodation.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <CategoryGroup
            locale={locale}
            dict={dict}
            heading={dict.accommodation.privateHeading}
            intro={dict.accommodation.privateIntro}
            categories={privateRooms}
            prioritizeFirst
          />
        </Container>
      </Section>

      <Section tone="sand" space="compact">
        <Container>
          <CategoryGroup
            locale={locale}
            dict={dict}
            heading={dict.accommodation.sharedHeading}
            intro={dict.accommodation.sharedIntro}
            categories={sharedRooms}
          />
        </Container>
      </Section>

      <Section tone="ivory" space="compact">
        <Container width="narrow">
          <div className="grid gap-8 rounded-card border border-sand-deep p-6 sm:grid-cols-2 lg:p-8">
            <div>
              <h2 className="text-2xl">
                {dict.accommodation.generalAmenitiesHeading}
              </h2>
              <div className="mt-5">
                <AmenityList locale={locale} amenities={GENERAL_AMENITIES} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <PendingNote dict={dict} label={dict.accommodation.ratesHeading}>
                {dict.accommodation.ratesPending}
              </PendingNote>
              <PendingNote dict={dict} label={dict.accommodation.policiesHeading}>
                {dict.accommodation.policiesPending}
              </PendingNote>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        dict={dict}
        placement="accommodation-final"
        whatsappContext="accommodation"
      />
    </>
  );
}

function CategoryGroup({
  locale,
  dict,
  heading,
  intro,
  categories,
  prioritizeFirst = false,
}: {
  locale: Locale;
  dict: Dictionary;
  heading: string;
  intro: string;
  categories: readonly ReturnType<typeof categoriesByType>[number][];
  prioritizeFirst?: boolean;
}) {
  return (
    <div>
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl leading-tight sm:text-4xl">{heading}</h2>
        <p className="leading-relaxed text-ink-muted text-pretty">{intro}</p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <li key={category.id} className="flex">
            <AccommodationCard
              locale={locale}
              dict={dict}
              category={category}
              priority={prioritizeFirst && index === 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

import Image from 'next/image';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { PageViewTracker } from '@/components/analytics/PageViewTracker';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section, SectionHeader } from '@/components/ui/Section';
import { FeatureLink } from '@/components/ui/FeatureLink';
import { PendingNote } from '@/components/ui/PendingNote';
import { images } from '@/data/images';
import { nearbyPlaces, placeCopy } from '@/data/destination';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Experiences page.
 *
 * Activities are presented as destinations the hostal can help you reach, not
 * as a bookable catalogue: operators, durations and prices are unconfirmed, so
 * publishing them as products would misrepresent what can actually be sold.
 */
export function ExperiencesView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.experiences, href: path(locale, 'experiences') },
  ];

  const destinations = nearbyPlaces.filter(
    (place) => place.kind !== 'service',
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageViewTracker event={{ name: 'experience_view' }} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.experiences.heading}
        intro={dict.experiences.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <SectionHeader
            heading={dict.experiences.aroundHeading}
            intro={dict.experiences.aroundIntro}
            className="reveal"
          />

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((place) => {
              const copy = placeCopy(locale, place.id);
              return (
                <li
                  key={place.id}
                  className="reveal flex flex-col gap-2 rounded-card border border-sand-deep p-5"
                >
                  <h3 className="font-sans text-base font-semibold">
                    {copy.name}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                    {copy.note}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 max-w-2xl">
            <PendingNote dict={dict}>
              {dict.location.nearbyDisclaimer}
            </PendingNote>
          </div>
        </Container>
      </Section>

      <Section tone="sand" space="compact">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="reveal relative aspect-4/3 overflow-hidden rounded-gallery bg-sand-deep">
              <Image
                src={images.nature.src}
                alt={dict.home.nature.imageAlt}
                width={images.nature.width}
                height={images.nature.height}
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="size-full object-cover"
              />
            </div>

            <div className="reveal flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl leading-tight sm:text-4xl">
                  {dict.experiences.partnerHeading}
                </h2>
                <p className="leading-relaxed text-ink-muted text-pretty">
                  {dict.experiences.partnerBody}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-3xl leading-tight sm:text-4xl">
                  {dict.experiences.wellnessHeading}
                </h2>
                <p className="leading-relaxed text-ink-muted text-pretty">
                  {dict.experiences.wellnessBody}
                </p>
                <PendingNote dict={dict} className="mt-2">
                  {dict.experiences.wellnessPending}
                </PendingNote>
              </div>

              <PendingNote dict={dict}>
                {dict.experiences.detailsPending}
              </PendingNote>

              <FeatureLink href={path(locale, 'discover')}>
                {dict.home.discover.cta}
              </FeatureLink>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        dict={dict}
        placement="experiences-final"
        whatsappContext="experiences"
      />
    </>
  );
}

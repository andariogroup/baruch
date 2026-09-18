import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/config/site';
import { getMapUrl, location } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { buttonClasses } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { images } from '@/data/images';
import { nearbyPlaces, placeCopy } from '@/data/destination';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Location page.
 *
 * Street, coordinates and an official Maps URL are published only when set in
 * the environment. Travel times stay unpublished until they are verified.
 */
export function LocationView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.location, href: path(locale, 'location') },
  ];

  const grouped = [
    {
      key: 'destinations',
      places: nearbyPlaces.filter((place) => place.kind !== 'service'),
    },
    {
      key: 'services',
      places: nearbyPlaces.filter((place) => place.kind === 'service'),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.location.heading}
        intro={dict.location.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl">{dict.location.addressHeading}</h2>
                {location.streetAddress ? (
                  <p className="text-lg text-ink-muted">{location.streetAddress}</p>
                ) : null}
                <p className="text-lg text-ink-muted">
                  {location.locality}, {location.region}, {location.country}
                </p>
              </div>

              {location.streetAddress ? null : (
                <PendingNote dict={dict}>
                  {dict.location.addressPending}
                </PendingNote>
              )}

              <div className="flex flex-col gap-3">
                <h2 className="text-2xl">
                  {dict.location.gettingHereHeading}
                </h2>
                <p className="leading-relaxed text-ink-muted text-pretty">
                  {dict.location.gettingHereBody}
                </p>
              </div>

              <a
                href={getMapUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('secondary', 'md', 'self-start')}
              >
                {dict.location.mapCta}
                <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">
                  ({dict.common.opensInNewTab})
                </span>
              </a>
            </div>

            <div className="overflow-hidden rounded-gallery bg-sand">
              <Image
                src={images.destination.src}
                alt={dict.home.hero.imageAlt}
                width={images.destination.width}
                height={images.destination.height}
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" space="compact">
        <Container>
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              {dict.location.nearbyHeading}
            </h2>
            <p className="leading-relaxed text-ink-muted text-pretty">
              {dict.location.nearbyIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {grouped.map((group) => (
              <ul key={group.key} className="flex flex-col gap-5">
                {group.places.map((place) => {
                  const copy = placeCopy(locale, place.id);
                  return (
                    <li key={place.id} className="flex flex-col gap-1">
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
            ))}
          </div>

          <div className="mt-10 max-w-2xl">
            <PendingNote dict={dict}>
              {dict.location.nearbyDisclaimer}
            </PendingNote>
          </div>
        </Container>
      </Section>

      <FinalCTA dict={dict} placement="location-final" />
    </>
  );
}

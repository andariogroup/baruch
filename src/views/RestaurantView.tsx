import Image from 'next/image';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { PageViewTracker } from '@/components/analytics/PageViewTracker';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { FeatureLink } from '@/components/ui/FeatureLink';
import { PendingNote } from '@/components/ui/PendingNote';
import { images } from '@/data/images';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Restaurant page.
 *
 * The project material mentions specific dishes, but they are not confirmed,
 * so the page communicates the concept and keeps the menu and opening hours
 * as explicit pending states instead of publishing a speculative menu.
 */
export function RestaurantView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.restaurant, href: path(locale, 'restaurant') },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageViewTracker event={{ name: 'restaurant_view' }} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.restaurant.heading}
        intro={dict.restaurant.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <div className="overflow-hidden rounded-gallery bg-sand">
            <Image
              src={images.restaurant.src}
              alt={dict.restaurant.imageAlt}
              width={images.restaurant.width}
              height={images.restaurant.height}
              sizes="(min-width: 1280px) 76rem, 100vw"
              priority
              className="size-full object-cover"
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                {dict.restaurant.conceptHeading}
              </h2>
              {dict.restaurant.conceptBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-ink-muted text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-2">
                <FeatureLink href={path(locale, 'accommodation')}>
                  {dict.common.viewAccommodation}
                </FeatureLink>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <PendingNote dict={dict} label={dict.restaurant.menuHeading}>
                {dict.restaurant.menuPending}
              </PendingNote>
              <PendingNote dict={dict} label={dict.restaurant.hoursHeading}>
                {dict.restaurant.hoursPending}
              </PendingNote>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        dict={dict}
        placement="restaurant-final"
        whatsappContext="restaurant"
      />
    </>
  );
}

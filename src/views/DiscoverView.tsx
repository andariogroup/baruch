import Image from 'next/image';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { FeatureLink } from '@/components/ui/FeatureLink';
import { images } from '@/data/images';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Editorial hub for destination SEO.
 *
 * The hub ships before its articles do. Publishing generic, unverified travel
 * copy would undermine the authority the hub exists to build, so it states
 * what is coming and routes visitors to a real conversation instead.
 */
export function DiscoverView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.discover, href: path(locale, 'discover') },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.discover.heading}
        intro={dict.discover.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <div className="overflow-hidden rounded-gallery bg-sand">
            <Image
              src={images.destination.src}
              alt={dict.home.hero.imageAlt}
              width={images.destination.width}
              height={images.destination.height}
              sizes="(min-width: 1280px) 76rem, 100vw"
              priority
              className="size-full object-cover"
            />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                {dict.discover.plannedHeading}
              </h2>
              <p className="leading-relaxed text-ink-muted text-pretty">
                {dict.discover.plannedIntro}
              </p>
              <ul className="mt-2 flex flex-col divide-y divide-sand-deep border-y border-sand-deep">
                {dict.discover.plannedTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-sans text-[0.9375rem]">{topic}</span>
                    <span className="shrink-0 rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-ink-muted">
                      {dict.common.pendingLabel}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-card border border-sand-deep bg-sand/50 p-6 lg:self-start lg:p-8">
              <h2 className="text-2xl">{dict.discover.emptyHeading}</h2>
              <p className="leading-relaxed text-ink-muted text-pretty">
                {dict.discover.emptyBody}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <WhatsAppCTA dict={dict} context="home" />
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <FeatureLink href={path(locale, 'location')}>
                  {dict.home.location.cta}
                </FeatureLink>
                <FeatureLink href={path(locale, 'experiences')}>
                  {dict.home.experiences.cta}
                </FeatureLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA dict={dict} placement="discover-final" />
    </>
  );
}

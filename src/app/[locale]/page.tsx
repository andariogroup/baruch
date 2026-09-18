import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale } from '@/config/site';
import { getDictionary } from '@/content';
import { AccommodationCard } from '@/components/accommodation/AccommodationCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Hero } from '@/components/sections/Hero';
import { PillarGrid } from '@/components/sections/PillarGrid';
import { SplitFeature } from '@/components/sections/SplitFeature';
import { JsonLd } from '@/components/seo/JsonLd';
import { buttonClasses } from '@/components/ui/Button';
import { FeatureLink } from '@/components/ui/FeatureLink';
import {
  Container,
  Section,
  SectionHeader,
} from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { publishedCategories } from '@/data/accommodation';
import { images } from '@/data/images';
import { nearbyPlaces, placeCopy } from '@/data/destination';
import { path } from '@/lib/i18n/routes';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { lodgingBusinessJsonLd } from '@/lib/seo/structured-data';

export async function generateMetadata({
  params,
}: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    page: 'home',
    title: {
      absolute: `${dict.meta.siteName} — ${dict.home.title}`,
    },
    description: dict.home.description,
    image: {
      src: images.hero.src,
      width: images.hero.width,
      height: images.hero.height,
      alt: dict.home.hero.imageAlt,
    },
  });
}

/**
 * Home narrative: discover, understand, feel, trust, explore, compare, book.
 * Each section ends with a path forward so no page is a dead end.
 */
export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const categories = publishedCategories();
  const featured = categories.slice(0, 3);

  return (
    <>
      <JsonLd data={lodgingBusinessJsonLd(locale, dict)} />

      <Hero locale={locale} dict={dict} />

      <Section tone="ivory">
        <Container>
          <SectionHeader
            eyebrow={dict.home.experience.eyebrow}
            heading={dict.home.experience.heading}
            intro={dict.home.experience.intro}
            className="reveal"
          />
          <div className="mt-14">
            <PillarGrid dict={dict} />
          </div>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <SplitFeature
            image={images.destination}
            imageAlt={dict.home.hero.imageAlt}
            eyebrow={dict.home.discover.eyebrow}
            heading={dict.home.discover.heading}
          >
            <p className="text-lg leading-relaxed text-ink-muted text-pretty">
              {dict.home.discover.intro}
            </p>
            <div className="mt-2">
              <FeatureLink href={path(locale, 'discover')}>
                {dict.home.discover.cta}
              </FeatureLink>
            </div>
          </SplitFeature>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow={dict.home.accommodation.eyebrow}
              heading={dict.home.accommodation.heading}
              intro={dict.home.accommodation.intro}
            />
            <Link
              href={path(locale, 'accommodation')}
              className={buttonClasses('secondary', 'md', 'shrink-0')}
            >
              {dict.home.accommodation.cta}
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((category) => (
              <li key={category.id} className="flex">
                <AccommodationCard
                  locale={locale}
                  dict={dict}
                  category={category}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="sand">
        <Container>
          <SplitFeature
            image={images.restaurant}
            imageAlt={dict.home.restaurant.imageAlt}
            eyebrow={dict.home.restaurant.eyebrow}
            heading={dict.home.restaurant.heading}
            reverse
          >
            <p className="text-lg leading-relaxed text-ink-muted text-pretty">
              {dict.home.restaurant.intro}
            </p>
            <div className="mt-2">
              <FeatureLink href={path(locale, 'restaurant')}>
                {dict.home.restaurant.cta}
              </FeatureLink>
            </div>
          </SplitFeature>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <SplitFeature
            image={images.nature}
            imageAlt={dict.home.nature.imageAlt}
            eyebrow={dict.home.nature.eyebrow}
            heading={dict.home.nature.heading}
          >
            <p className="text-lg leading-relaxed text-ink-muted text-pretty">
              {dict.home.nature.intro}
            </p>
            <div className="mt-2">
              <FeatureLink href={path(locale, 'experiences')}>
                {dict.home.experiences.cta}
              </FeatureLink>
            </div>
          </SplitFeature>
        </Container>
      </Section>

      <Section tone="jungle">
        <Container>
          <SectionHeader
            eyebrow={dict.home.location.eyebrow}
            heading={dict.home.location.heading}
            intro={dict.home.location.intro}
            className="reveal"
          />

          <ul className="reveal mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.slice(0, 4).map((place) => {
              const copy = placeCopy(locale, place.id);
              return (
                <li key={place.id} className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-[0.9375rem] font-semibold">
                    {copy.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {copy.note}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="reveal mt-10">
            <FeatureLink href={path(locale, 'location')}>
              {dict.home.location.cta}
            </FeatureLink>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" space="compact">
        <Container width="narrow">
          <div className="reveal flex flex-col gap-6">
            <SectionHeader
              eyebrow={dict.home.trust.eyebrow}
              heading={dict.home.trust.heading}
              intro={dict.home.trust.intro}
            />
            <PendingNote dict={dict} className="max-w-2xl">
              {dict.home.trust.pendingNote}
            </PendingNote>
          </div>
        </Container>
      </Section>

      <FinalCTA dict={dict} placement="home-final" />
    </>
  );
}

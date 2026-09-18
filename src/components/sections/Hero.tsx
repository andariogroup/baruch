import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { buttonClasses } from '@/components/ui/Button';
import { images } from '@/data/images';
import { path } from '@/lib/i18n/routes';

/**
 * Home hero.
 *
 * The image is the LCP element, so it is marked `priority` and sized to the
 * viewport. A layered gradient keeps the ivory copy above 4.5:1 regardless of
 * which part of the photograph sits behind it.
 */
export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="on-dark relative isolate flex min-h-[92svh] items-end overflow-hidden text-ivory">
      <Image
        src={images.hero.src}
        alt={dict.home.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/50 to-ink/60"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase">
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="font-display text-4xl leading-[1.06] text-balance sm:text-5xl lg:text-6xl">
            {dict.home.hero.headline}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ivory/90 text-pretty">
            {dict.home.hero.support}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookingCTA
              dict={dict}
              placement="hero"
              variant="onImage"
              size="lg"
            />
            <WhatsAppCTA
              dict={dict}
              context="home"
              size="lg"
            />
            <Link
              href={path(locale, 'accommodation')}
              className={buttonClasses('onImageSecondary', 'lg')}
            >
              {dict.common.viewAccommodation}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

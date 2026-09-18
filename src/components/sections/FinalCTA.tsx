import Image from 'next/image';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import type { WhatsAppContext } from '@/components/conversion/WhatsAppCTA';
import { images } from '@/data/images';

/**
 * Closing conversion block. Repeated at the end of content pages so the
 * primary action is always within reach without a sticky bar eating viewport.
 */
export function FinalCTA({
  dict,
  placement,
  whatsappContext = 'home',
}: {
  dict: Dictionary;
  placement: string;
  whatsappContext?: WhatsAppContext;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden text-ivory">
      <Image
        src={images.sunset.src}
        alt={dict.home.finalCta.imageAlt}
        width={images.sunset.width}
        height={images.sunset.height}
        sizes="100vw"
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-ink/80"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <h2 className="text-3xl leading-[1.14] text-balance sm:text-4xl">
          {dict.home.finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ivory/90 text-pretty">
          {dict.home.finalCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookingCTA
            dict={dict}
            placement={placement}
            variant="onImage"
            size="lg"
          />
          <WhatsAppCTA
            dict={dict}
            context={whatsappContext}
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}

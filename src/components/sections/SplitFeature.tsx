import Image from 'next/image';
import type { ImageAsset } from '@/data/images';
import { cn } from '@/lib/utils/cn';

/**
 * Editorial two-column block: image on one side, copy on the other.
 * `reverse` alternates the sides so consecutive sections do not line up.
 */
export function SplitFeature({
  image,
  imageAlt,
  eyebrow,
  heading,
  children,
  reverse = false,
  sizes = '(min-width: 1024px) 48rem, 100vw',
}: {
  image: ImageAsset;
  imageAlt: string;
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  reverse?: boolean;
  sizes?: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div
        className={cn(
          'reveal relative aspect-4/3 overflow-hidden rounded-gallery bg-sand',
          reverse && 'lg:order-2',
        )}
      >
        <Image
          src={image.src}
          alt={imageAlt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="size-full object-cover"
        />
      </div>

      <div className="reveal flex flex-col gap-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-lagoon-strong uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl leading-[1.14] text-balance sm:text-4xl">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
}

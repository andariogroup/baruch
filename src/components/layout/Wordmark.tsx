import Image from 'next/image';
import { brand } from '@/config/site';
import { cn } from '@/lib/utils/cn';

type WordmarkProps = {
  className?: string;
  priority?: boolean;
  size?: 'sm' | 'md';
};

const MARK = {
  sm: 'h-8 w-auto sm:h-9 lg:h-10',
  md: 'h-12 w-auto',
} as const;

const NAME = {
  sm: 'text-base sm:text-[1.0625rem] lg:text-[1.25rem]',
  md: 'text-2xl',
} as const;

/**
 * Pictorial mark plus the hostal name, so the brand stays readable next to
 * the illustration.
 */
export function Wordmark({
  className,
  priority = false,
  size = 'sm',
}: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 sm:gap-2.5', className)}>
      <Image
        src={brand.logo.src}
        alt=""
        width={brand.logo.width}
        height={brand.logo.height}
        className={cn('shrink-0', MARK[size])}
        priority={priority}
      />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={cn(
            'font-display tracking-[0.06em]',
            NAME[size],
          )}
        >
          {brand.shortName}
        </span>
        <span className="mt-0.5 hidden font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase opacity-75 min-[400px]:block">
          Hostal
        </span>
      </span>
    </span>
  );
}

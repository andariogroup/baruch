import { cn } from '@/lib/utils/cn';

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  tone?: 'ivory' | 'sand' | 'lagoon' | 'jungle';
  /** Vertical rhythm. `flush` removes padding for full-bleed content. */
  space?: 'flush' | 'compact' | 'normal' | 'loose';
};

const TONES: Record<NonNullable<SectionProps['tone']>, string> = {
  ivory: 'bg-ivory text-ink',
  sand: 'bg-sand text-ink',
  lagoon: 'bg-lagoon-wash text-ink',
  jungle: 'bg-jungle-wash text-ink',
};

const SPACES: Record<NonNullable<SectionProps['space']>, string> = {
  flush: '',
  compact: 'py-14 lg:py-16',
  normal: 'py-18 lg:py-24',
  loose: 'py-20 lg:py-32',
};

export function Section({
  tone = 'ivory',
  space = 'normal',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(TONES[tone], SPACES[space], className)} {...props}>
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
  width = 'default',
}: {
  className?: string;
  children: React.ReactNode;
  width?: 'default' | 'narrow' | 'prose';
}) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        width === 'default' && 'max-w-7xl',
        width === 'narrow' && 'max-w-5xl',
        width === 'prose' && 'max-w-2xl',
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: 'start' | 'center';
  /** Heading level, so each page keeps a single h1 and a valid outline. */
  as?: 'h1' | 'h2';
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = 'start',
  as: Heading = 'h2',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.16em] text-lagoon-strong uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl leading-[1.12] text-balance sm:text-4xl lg:text-[2.75rem]">
        {heading}
      </Heading>
      {intro ? (
        <p className="text-lg leading-relaxed text-ink-muted text-pretty">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

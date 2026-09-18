import { cn } from '@/lib/utils/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'onImage'
  | 'onImageSecondary'
  | 'whatsapp';

export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Shared visual language for every clickable action. Colours use the `-strong`
 * brand variants so label contrast meets WCAG AA; the lighter brand turquoise
 * is reserved for surfaces and accents.
 */
const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-lagoon-strong text-ivory hover:bg-lagoon-deep active:bg-lagoon-deep shadow-soft',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-sand',
  ghost: 'bg-transparent text-lagoon-strong hover:bg-lagoon-wash',
  onImage: 'bg-ivory text-ink hover:bg-white shadow-lifted',
  onImageSecondary:
    'bg-ink/25 text-ivory border border-ivory/60 backdrop-blur-sm hover:bg-ink/40 hover:border-ivory',
  whatsapp:
    'bg-whatsapp-strong text-ivory hover:bg-whatsapp-deep active:bg-whatsapp-deep shadow-soft',
};

const SIZES: Record<ButtonSize, string> = {
  // Minimum 44px tall targets on every size.
  sm: 'min-h-11 px-4 text-sm',
  md: 'min-h-12 px-6 text-[0.9375rem]',
  lg: 'min-h-13 px-7 text-base',
};

export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-control font-medium tracking-tight',
    'transition-colors duration-200 ease-[var(--ease-calm)]',
    'disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant,
  size,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

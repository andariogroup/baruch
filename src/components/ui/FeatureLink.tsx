import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

/** Inline "continue reading" affordance used to close sections. */
export function FeatureLink({
  href,
  children,
  className,
  tone = 'default',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'onDark';
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-11 items-center gap-2 text-sm font-medium',
        tone === 'onDark' ? 'text-ivory' : 'text-lagoon-strong',
        className,
      )}
    >
      <span className="underline decoration-current/35 underline-offset-4 transition-colors group-hover:decoration-current">
        {children}
      </span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-calm)] group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

import { Info } from 'lucide-react';
import type { Dictionary } from '@/content/types';
import { cn } from '@/lib/utils/cn';

/**
 * Visible placeholder for facts BARUCH has not validated yet.
 *
 * Showing the gap honestly is the alternative to inventing a value or leaving
 * a section looking broken. Nothing here claims a feature exists.
 */
export function PendingNote({
  dict,
  children,
  label,
  className,
}: {
  dict: Dictionary;
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-card border border-sand-deep bg-sand/60 p-4 text-sm',
        className,
      )}
    >
      <Info
        className="mt-0.5 size-4 shrink-0 text-lagoon-strong"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1">
        <p className="font-medium text-ink">{label ?? dict.common.pendingLabel}</p>
        <p className="leading-relaxed text-ink-muted">{children}</p>
      </div>
    </div>
  );
}

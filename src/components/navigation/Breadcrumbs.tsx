import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/content/types';

export type Crumb = { name: string; href: string };

/**
 * Trail of ancestors. The current page is the last item and is not a link, so
 * it is announced as the current location rather than a navigable destination.
 */
export function Breadcrumbs({
  dict,
  items,
}: {
  dict: Dictionary;
  items: readonly Crumb[];
}) {
  return (
    <nav aria-label={dict.common.breadcrumbAria}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  className="size-3.5 shrink-0 opacity-60"
                  aria-hidden="true"
                />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-lagoon-strong"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

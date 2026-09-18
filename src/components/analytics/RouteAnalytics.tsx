'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { track } from '@/lib/analytics/events';

/**
 * Fires `page_view` on each localized route change. The path is a public URL
 * segment, never a query string or any visitor identifier.
 */
export function RouteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    track({ name: 'page_view', path: pathname });
  }, [pathname]);

  return null;
}

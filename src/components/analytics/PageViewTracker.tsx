'use client';

import { useEffect } from 'react';
import { type AnalyticsEvent, track } from '@/lib/analytics/events';

/** Fires a single observable page-level event on mount. */
export function PageViewTracker({ event }: { event: AnalyticsEvent }) {
  useEffect(() => {
    track(event);
    // The event is a literal defined at the call site and never changes for a
    // given page, so mounting is the correct trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

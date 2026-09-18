'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics/events';

/**
 * Reports a category detail view. The payload is the category identifier —
 * a fixed catalogue value, never anything tied to the visitor.
 */
export function AccommodationDetailTracker({
  categoryId,
}: {
  categoryId: string;
}) {
  useEffect(() => {
    track({ name: 'view_accommodation_detail', category: categoryId });
  }, [categoryId]);

  return null;
}

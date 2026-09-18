import { Check } from 'lucide-react';
import type { Locale } from '@/config/site';
import { type AmenityKey, amenityLabel } from '@/data/accommodation';

/** Confirmed amenities only. Unvalidated features are never listed here. */
export function AmenityList({
  locale,
  amenities,
}: {
  locale: Locale;
  amenities: readonly AmenityKey[];
}) {
  return (
    <ul className="flex flex-col gap-2.5">
      {amenities.map((key) => (
        <li key={key} className="flex items-center gap-2.5 text-[0.9375rem]">
          <Check
            className="size-4 shrink-0 text-jungle-strong"
            aria-hidden="true"
          />
          {amenityLabel(locale, key)}
        </li>
      ))}
    </ul>
  );
}

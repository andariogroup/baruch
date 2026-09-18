import {
  Compass,
  Leaf,
  MapPin,
  Moon,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import type { Dictionary } from '@/content/types';

/**
 * The six commercial pillars, in the order defined by the brand positioning.
 * Icons are decorative; the pillar title carries the meaning.
 */
const ICONS = [MapPin, Moon, Leaf, UtensilsCrossed, Sparkles, Compass] as const;

export function PillarGrid({ dict }: { dict: Dictionary }) {
  return (
    <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {dict.home.experience.pillars.map((pillar, index) => {
        const Icon = ICONS[index] ?? MapPin;
        return (
          <li key={pillar.title} className="reveal flex flex-col gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-control bg-lagoon-wash text-lagoon-strong">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="font-sans text-base font-semibold tracking-tight">
              {pillar.title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
              {pillar.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

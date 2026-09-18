import type { Locale } from '@/config/site';
import { cn } from '@/lib/utils/cn';

/**
 * Locale cues, not nationality. Spanish is paired with Colombia because this
 * site is `es-CO`; English uses the Union Jack as the conventional mark for
 * the language. The visible language name always sits next to the flag so the
 * cue is never the flag alone.
 */
export function LanguageFlag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <svg
      viewBox={locale === 'es' ? '0 0 9 6' : '0 0 60 30'}
      className={cn(
        'h-4 w-6 shrink-0 overflow-hidden rounded-[2px] ring-1',
        className,
      )}
      aria-hidden="true"
    >
      {locale === 'es' ? <ColombiaMark /> : <UnitedKingdomMark />}
    </svg>
  );
}

function ColombiaMark() {
  return (
    <>
      <rect width="9" height="3" fill="#FCD116" />
      <rect y="3" width="9" height="1.5" fill="#003893" />
      <rect y="4.5" width="9" height="1.5" fill="#CE1126" />
    </>
  );
}

function UnitedKingdomMark() {
  return (
    <>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
    </>
  );
}

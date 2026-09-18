'use client';

import { usePathname } from 'next/navigation';
import { isLocale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { track } from '@/lib/analytics/events';
import { localeSegments } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';
import { getWhatsAppLink } from '@/lib/whatsapp/whatsapp';
import { type WhatsAppContext } from './WhatsAppCTA';
import { WhatsAppIcon } from './WhatsAppIcon';

function contextFromPath(pathname: string): WhatsAppContext {
  const [maybeLocale, page] = pathname.split('/').filter(Boolean);
  if (!maybeLocale || !isLocale(maybeLocale) || !page) return 'home';

  const segments = localeSegments(maybeLocale);
  if (page === segments.accommodation) return 'accommodation';
  if (page === segments.experiences) return 'experiences';
  if (page === segments.restaurant) return 'restaurant';
  if (page === segments.contact) return 'contact';
  return 'home';
}

/**
 * Persistent chat control. Icon-first on mobile, a short prompt on larger
 * screens, always secondary to Reservar in the header.
 */
export function WhatsAppFloat({ dict }: { dict: Dictionary }) {
  const pathname = usePathname() ?? '';
  const context = contextFromPath(pathname);
  const link = getWhatsAppLink(dict.whatsappMessages[context]);
  const label = `${dict.common.whatsappPrompt} · ${dict.common.whatsapp}`;

  const className = cn(
    'group relative isolate flex items-center overflow-visible',
    'min-h-14 rounded-full bg-whatsapp-strong text-ivory shadow-lifted',
    'transition-[background-color,transform] duration-200 ease-[var(--ease-calm)]',
    'hover:bg-whatsapp-deep',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp',
    !link.available && 'cursor-not-allowed',
    link.available && 'hover:scale-[1.03]',
  );

  const body = (
    <>
      <span className="relative flex size-14 items-center justify-center">
        {link.available ? (
          <span
            className="whatsapp-pulse pointer-events-none absolute inset-0 rounded-full bg-whatsapp/55"
            aria-hidden="true"
          />
        ) : null}
        <WhatsAppIcon className="relative size-7" />
      </span>
      <span className="relative sr-only sm:not-sr-only sm:pr-5 sm:text-sm sm:font-medium">
        {dict.common.whatsappPrompt}
      </span>
    </>
  );

  return (
    <div className="whatsapp-float pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 print:hidden sm:right-6">
      {link.available ? (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(className, 'pointer-events-auto')}
          aria-label={`${label} (${dict.common.opensInNewTab})`}
          onClick={() => track({ name: 'whatsapp_click', context })}
        >
          {body}
        </a>
      ) : (
        <span
          className={cn(className, 'pointer-events-auto')}
          aria-disabled="true"
          role="link"
          tabIndex={-1}
          aria-label={dict.common.whatsappUnavailable}
          title={dict.common.whatsappUnavailable}
        >
          {body}
        </span>
      )}
    </div>
  );
}

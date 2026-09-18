'use client';

import type { Dictionary } from '@/content/types';
import { track } from '@/lib/analytics/events';
import { getWhatsAppLink } from '@/lib/whatsapp/whatsapp';
import {
  type ButtonSize,
  type ButtonVariant,
  buttonClasses,
} from '@/components/ui/Button';
import { WhatsAppIcon } from './WhatsAppIcon';

export type WhatsAppContext = keyof Dictionary['whatsappMessages'];

type WhatsAppCTAProps = {
  dict: Dictionary;
  context: WhatsAppContext;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  label?: string;
};

/**
 * Secondary conversion channel with its own visual identity.
 *
 * Reservar stays primary. This control is green, labeled as a conversation,
 * and remains visible (but inert) when the number is not configured.
 */
export function WhatsAppCTA({
  dict,
  context,
  variant = 'whatsapp',
  size = 'md',
  className,
  label,
}: WhatsAppCTAProps) {
  const link = getWhatsAppLink(dict.whatsappMessages[context]);
  const text = label ?? dict.common.whatsappPrompt;

  const content = (
    <>
      <WhatsAppIcon className="size-4" />
      <span>{text}</span>
    </>
  );

  if (!link.available) {
    return (
      <span
        className={buttonClasses(variant, size, className)}
        aria-disabled="true"
        role="link"
        tabIndex={-1}
        title={dict.common.whatsappUnavailable}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
      aria-label={`${dict.common.whatsappAria} (${dict.common.opensInNewTab})`}
      onClick={() => track({ name: 'whatsapp_click', context })}
    >
      {content}
    </a>
  );
}

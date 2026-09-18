import { whatsapp } from '@/config/site';

/**
 * WhatsApp is the secondary conversion channel. Messages are contextual to the
 * page, and carry no personal data: the visitor writes whatever they want to
 * share themselves.
 */
export type WhatsAppLinkState =
  | { available: true; url: string }
  | { available: false; url: null };

export function getWhatsAppLink(message: string): WhatsAppLinkState {
  const number = whatsapp.number;

  // Shortest plausible international number; guards against a partial value.
  if (!number || number.length < 8) {
    return { available: false, url: null };
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return { available: true, url };
}

export function isWhatsAppConfigured(): boolean {
  const number = whatsapp.number;
  return Boolean(number && number.length >= 8);
}

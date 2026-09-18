import type { Locale } from '@/config/site';
import { en } from './en';
import { es } from './es';
import type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { es, en };

/**
 * Dictionaries are plain modules rather than dynamic imports: the full content
 * is small, only reaches the client through rendered markup, and being
 * synchronous keeps pages statically renderable.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };

import type { PluralTemplate, Template } from '@/content/types';

/** Replaces `{name}` placeholders in a template with the given values. */
export function format(
  template: Template,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Picks the singular or plural variant and fills in `{count}`.
 * Both supported locales use the same one/other split.
 */
export function plural(template: PluralTemplate, count: number): string {
  return format(count === 1 ? template.one : template.other, { count });
}

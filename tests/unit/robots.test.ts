import { describe, expect, it } from 'vitest';
import robots from '@/app/robots';

describe('robots', () => {
  it('blocks indexing outside production so previews cannot compete', () => {
    const previous = process.env.VERCEL_ENV;
    delete process.env.VERCEL_ENV;

    const document = robots();
    const rules = Array.isArray(document.rules)
      ? document.rules
      : [document.rules];

    expect(rules[0]?.disallow).toBe('/');

    if (previous === undefined) {
      delete process.env.VERCEL_ENV;
    } else {
      process.env.VERCEL_ENV = previous;
    }
  });
});

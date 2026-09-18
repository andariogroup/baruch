import { describe, expect, it } from 'vitest';
import { contactSchema, issueToKey } from '@/lib/contact/schema';
import { checkRateLimit } from '@/lib/contact/rate-limit';

describe('contact schema', () => {
  it('accepts a complete enquiry', () => {
    const parsed = contactSchema.safeParse({
      name: 'Ana Pérez',
      email: 'ana@example.com',
      message: 'Quisiera saber si hay disponibilidad para dos personas.',
    });

    expect(parsed.success).toBe(true);
  });

  it('rejects an empty or partial payload', () => {
    expect(contactSchema.safeParse({ name: '', email: '', message: '' }).success).toBe(
      false,
    );
    expect(
      contactSchema.safeParse({
        name: 'Ana',
        email: 'not-an-email',
        message: 'Hola',
      }).success,
    ).toBe(false);
  });

  it('maps validation issues to UI keys without leaking the raw value', () => {
    expect(issueToKey('name', '')).toBe('required');
    expect(issueToKey('email', 'nope')).toBe('invalidEmail');
    expect(issueToKey('message', 'corto')).toBe('tooShort');
  });
});

describe('contact rate limit', () => {
  it('allows a small burst and then blocks the same key', () => {
    const key = `test-${Date.now()}`;

    for (let i = 0; i < 5; i += 1) {
      expect(checkRateLimit(key).allowed).toBe(true);
    }

    expect(checkRateLimit(key).allowed).toBe(false);
  });
});

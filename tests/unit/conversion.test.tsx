import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { es } from '@/content/es';

/**
 * The booking and WhatsApp CTAs read configuration at module scope, so each
 * case sets the environment before importing the module under test.
 */
async function loadBooking(url?: string) {
  vi.resetModules();
  if (url === undefined) {
    delete process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL;
  } else {
    process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL = url;
  }
  return import('@/lib/booking/booking');
}

async function loadWhatsApp(number?: string) {
  vi.resetModules();
  if (number === undefined) {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  } else {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = number;
  }
  return import('@/lib/whatsapp/whatsapp');
}

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
  vi.resetModules();
});

describe('booking link', () => {
  it('is unavailable when no URL is configured', async () => {
    const { getBookingLink } = await loadBooking();
    expect(getBookingLink()).toEqual({ available: false, url: null });
  });

  it('is unavailable when the configured value is not a usable URL', async () => {
    for (const value of ['not-a-url', 'javascript:alert(1)', '   ']) {
      const { getBookingLink } = await loadBooking(value);
      expect(getBookingLink().available, value).toBe(false);
    }
  });

  it('exposes a valid https URL', async () => {
    const { getBookingLink } = await loadBooking(
      'https://booking.example.com/baruch',
    );
    expect(getBookingLink()).toEqual({
      available: true,
      url: 'https://booking.example.com/baruch',
    });
  });
});

describe('whatsapp link', () => {
  it('is unavailable without a number', async () => {
    const { getWhatsAppLink } = await loadWhatsApp();
    expect(getWhatsAppLink('hola').available).toBe(false);
  });

  it('rejects a partial number', async () => {
    const { getWhatsAppLink } = await loadWhatsApp('12345');
    expect(getWhatsAppLink('hola').available).toBe(false);
  });

  it('encodes the contextual message', async () => {
    const { getWhatsAppLink } = await loadWhatsApp('+57 300 123 4567');
    const link = getWhatsAppLink('Hola, ¿hay disponibilidad?');

    expect(link.url).toBe(
      'https://wa.me/573001234567?text=Hola%2C%20%C2%BFhay%20disponibilidad%3F',
    );
  });
});

describe('BookingCTA', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('renders a disabled control instead of a dead link when unconfigured', async () => {
    delete process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL;
    const { BookingCTA } = await import('@/components/conversion/BookingCTA');

    render(<BookingCTA dict={es} placement="test" />);

    expect(screen.queryByRole('link', { name: /reservar/i })).toBeNull();
    const fallback = screen.getByRole('link', { hidden: true });
    expect(fallback).toHaveAttribute('aria-disabled', 'true');
    expect(fallback).toHaveTextContent(es.common.bookUnavailable);
  });

  it('opens the external engine in a new tab with a safe rel', async () => {
    process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL =
      'https://booking.example.com/baruch';
    const { BookingCTA } = await import('@/components/conversion/BookingCTA');

    render(<BookingCTA dict={es} placement="test" />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://booking.example.com/baruch');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('WhatsAppCTA', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('renders a disabled control instead of disappearing when unconfigured', async () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const { WhatsAppCTA } = await import('@/components/conversion/WhatsAppCTA');

    render(<WhatsAppCTA dict={es} context="home" />);

    expect(screen.queryByRole('link', { name: /escribir por whatsapp/i })).toBeNull();
    const fallback = screen.getByRole('link', { hidden: true });
    expect(fallback).toHaveAttribute('aria-disabled', 'true');
    expect(fallback).toHaveTextContent(es.common.whatsappPrompt);
  });

  it('opens a contextual wa.me conversation in a new tab', async () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '+57 300 123 4567';
    const { WhatsAppCTA } = await import('@/components/conversion/WhatsAppCTA');

    render(<WhatsAppCTA dict={es} context="home" />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      `https://wa.me/573001234567?text=${encodeURIComponent(es.whatsappMessages.home)}`,
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveTextContent(es.common.whatsappPrompt);
  });
});

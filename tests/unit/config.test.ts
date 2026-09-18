import { afterEach, describe, expect, it, vi } from 'vitest';

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
  vi.resetModules();
});

async function loadSite(overrides: Record<string, string | undefined> = {}) {
  vi.resetModules();

  const keys = [
    'NEXT_PUBLIC_BOOKING_ENGINE_URL',
    'NEXT_PUBLIC_WHATSAPP_NUMBER',
    'NEXT_PUBLIC_PHONE',
    'NEXT_PUBLIC_EMAIL',
    'NEXT_PUBLIC_STREET_ADDRESS',
    'NEXT_PUBLIC_LATITUDE',
    'NEXT_PUBLIC_LONGITUDE',
    'NEXT_PUBLIC_GOOGLE_MAPS_URL',
    'NEXT_PUBLIC_INSTAGRAM_URL',
    'NEXT_PUBLIC_FACEBOOK_URL',
    'NEXT_PUBLIC_TIKTOK_URL',
    'NEXT_PUBLIC_YOUTUBE_URL',
    'NEXT_PUBLIC_GOOGLE_BUSINESS_URL',
  ];

  for (const key of keys) {
    delete process.env[key];
  }

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  return import('@/config/site');
}

describe('site environment configuration', () => {
  it('keeps unpublished operational facts empty by default', async () => {
    const site = await loadSite();

    expect(site.bookingEngine.url).toBeNull();
    expect(site.whatsapp.number).toBeNull();
    expect(site.contact.phone).toBeNull();
    expect(site.contact.email).toBeNull();
    expect(site.location.streetAddress).toBeNull();
    expect(site.location.coordinates).toBeNull();
    expect(site.socialProfiles).toEqual([]);
    expect(site.getMapUrl()).toContain('Buritaca');
  });

  it('publishes coordinates and social URLs only when they are valid', async () => {
    const site = await loadSite({
      NEXT_PUBLIC_LATITUDE: '11.2583',
      NEXT_PUBLIC_LONGITUDE: '-73.8981',
      NEXT_PUBLIC_INSTAGRAM_URL: 'https://www.instagram.com/baruch.hostal/',
      NEXT_PUBLIC_FACEBOOK_URL: 'javascript:alert(1)',
      NEXT_PUBLIC_PHONE: '+57 300 123 4567',
      NEXT_PUBLIC_EMAIL: 'hola@example.com',
      NEXT_PUBLIC_STREET_ADDRESS: 'Vía principal, Buritaca',
    });

    expect(site.location.coordinates).toEqual({
      latitude: 11.2583,
      longitude: -73.8981,
    });
    expect(site.getMapUrl()).toContain('11.2583');
    expect(site.socialProfiles).toEqual([
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/baruch.hostal/',
      },
    ]);
    expect(site.contact.phone).toBe('573001234567');
    expect(site.contact.email).toBe('hola@example.com');
    expect(site.location.streetAddress).toBe('Vía principal, Buritaca');
  });

  it('ignores a latitude without a matching longitude', async () => {
    const site = await loadSite({ NEXT_PUBLIC_LATITUDE: '11.2583' });
    expect(site.location.coordinates).toBeNull();
  });
});

describe('resolveSiteUrl', () => {
  it('canonicalizes the confirmed www origin, including the apex host', async () => {
    const { resolveSiteUrl, PRODUCTION_SITE_URL } = await import(
      '@/lib/config/env'
    );
    expect(resolveSiteUrl('https://www.baruchhostal.com/')).toBe(
      PRODUCTION_SITE_URL,
    );
    expect(resolveSiteUrl('https://baruchhostal.com/')).toBe(
      PRODUCTION_SITE_URL,
    );
    expect(resolveSiteUrl('baruchhostal.com')).toBe(PRODUCTION_SITE_URL);
  });

  it('keeps localhost and its port when set explicitly', async () => {
    const { resolveSiteUrl } = await import('@/lib/config/env');
    expect(resolveSiteUrl('http://localhost:3000')).toBe(
      'http://localhost:3000',
    );
  });

  it('uses the confirmed www origin in production even without an env var', async () => {
    const { resolveSiteUrl, PRODUCTION_SITE_URL } = await import(
      '@/lib/config/env'
    );
    expect(
      resolveSiteUrl(undefined, {
        env: 'production',
        productionUrl: 'baruch-hostal-web.vercel.app',
      }),
    ).toBe(PRODUCTION_SITE_URL);
  });

  it('uses the deployment host on Vercel previews', async () => {
    const { resolveSiteUrl } = await import('@/lib/config/env');
    expect(
      resolveSiteUrl(undefined, {
        env: 'preview',
        url: 'baruch-git-main.vercel.app',
      }),
    ).toBe('https://baruch-git-main.vercel.app');
  });

  it('falls back to localhost for local development', async () => {
    const { resolveSiteUrl } = await import('@/lib/config/env');
    expect(resolveSiteUrl()).toBe('http://localhost:3000');
  });
});

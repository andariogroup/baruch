import type { NextConfig } from 'next';
import {
  PRODUCTION_SITE_APEX,
  PRODUCTION_SITE_URL,
} from './src/lib/config/env';

/**
 * Security headers.
 *
 * The CSP allows only what the site actually loads: its own assets, Google
 * Fonts (self-hosted by `next/font`, but the stylesheet host is still
 * contacted during build), and Google Analytics when configured. Booking and
 * WhatsApp are plain outbound links rather than embeds, so no frame or
 * connect allowance is needed for them.
 *
 * `'unsafe-inline'` remains for styles because Next.js and Tailwind emit inline
 * style attributes; scripts are restricted to self plus the analytics origin.
 */
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  // `'unsafe-eval'` is required by the React refresh runtime in development.
  process.env.NODE_ENV === 'development'
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com"
    : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
  // Local LAN testing over HTTP breaks if the browser upgrades every request.
  process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests' : '',
]
  .filter(Boolean)
  .join('; ');

const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  turbopack: {
    // Pin the workspace root; otherwise a lockfile in a parent directory can
    // make Turbopack infer the wrong one.
    root: import.meta.dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: PRODUCTION_SITE_APEX }],
        destination: PRODUCTION_SITE_URL,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: PRODUCTION_SITE_APEX }],
        destination: `${PRODUCTION_SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

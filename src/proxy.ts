import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LOCALES } from '@/config/site';

/**
 * Ensures every request resolves inside a locale segment.
 *
 * Locale is negotiated from `Accept-Language` on the first visit only. The
 * redirect is a 307 rather than a permanent one, because the mapping depends on
 * the visitor's headers and must not be cached as if it were canonical.
 * Unmatched paths land inside a locale so the localized 404 handles them.
 */
function negotiateLocale(request: NextRequest): string {
  const header = request.headers.get('accept-language');
  if (!header) return DEFAULT_LOCALE;

  const preferred = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((param) => param.trim().startsWith('q='));
      const quality = q ? Number.parseFloat(q.split('=')[1]) : 1;
      return {
        language: tag.trim().toLowerCase().split('-')[0],
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  const match = preferred.find((entry) =>
    (LOCALES as readonly string[]).includes(entry.language),
  );

  return match?.language ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = negotiateLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    // Skip framework internals and any request for a file with an extension,
    // so static assets and metadata routes are served directly.
    '/((?!_next/static|_next/image|api/|.*\\.[\\w]+$).*)',
  ],
};

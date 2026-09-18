import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

/**
 * Non-production origins are fully disallowed so preview deployments cannot
 * be indexed and compete with the real site.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production';

  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

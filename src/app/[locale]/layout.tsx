import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LOCALES, SITE_URL, isLocale } from '@/config/site';
import { getDictionary } from '@/content';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Analytics } from '@/components/analytics/Analytics';
import { RouteAnalytics } from '@/components/analytics/RouteAnalytics';
import { WhatsAppFloat } from '@/components/conversion/WhatsAppFloat';
import { Reveal } from '@/components/ui/Reveal';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/structured-data';
import { JsonLd } from '@/components/seo/JsonLd';
import { titleTemplate } from '@/lib/seo/metadata';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
  display: 'swap',
});

/**
 * Locale layout. It owns `<html lang>` and `<body>` so each language is a
 * separate indexable tree, rather than switching language through client state.
 * The app-root layout is a passthrough required by Next.js.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#faf8f2',
};

export async function generateMetadata({
  params,
}: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return { metadataBase: new URL(SITE_URL) };

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${dict.meta.siteName} — ${dict.home.title}`,
      template: titleTemplate(locale),
    },
    description: dict.home.description,
    applicationName: dict.meta.siteName,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <html
      lang={dict.meta.htmlLang}
      className={`${inter.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh pb-20 antialiased print:pb-0 sm:pb-8">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-ivory focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:shadow-lifted"
        >
          {dict.common.skipToContent}
        </a>

        <JsonLd data={websiteJsonLd(locale, dict)} />
        <JsonLd data={organizationJsonLd(dict)} />

        <Header locale={locale} dict={dict} />

        <main id="main">{children}</main>

        <Footer locale={locale} dict={dict} />

        <WhatsAppFloat dict={dict} />

        <Reveal />
        <RouteAnalytics />
        <Analytics />
      </body>
    </html>
  );
}

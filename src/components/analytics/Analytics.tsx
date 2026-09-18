import Script from 'next/script';
import { analytics } from '@/config/site';

/**
 * Loads GA4 only when a measurement ID is configured, so development and
 * preview builds ship no third-party script at all.
 *
 * `anonymize_ip` is on and ad personalisation signals are off: the site needs
 * aggregate acquisition and conversion data, not visitor profiles.
 */
export function Analytics() {
  const id = analytics.measurementId;

  if (!id) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });`}
      </Script>
    </>
  );
}

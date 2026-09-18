import { DEFAULT_LOCALE } from '@/config/site';
import { getDictionary } from '@/content';
import NotFoundPage from './[locale]/not-found';

/**
 * Used when a request never enters a locale layout. The locale layout is the
 * real chrome; this only supplies the required `<html>` / `<body>` wrapper.
 */
export default function RootNotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <html lang={dict.meta.htmlLang}>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}

import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/config/site';
import { getDictionary } from '@/content';
import { primaryNavLinks } from '@/components/navigation/nav-links';
import { Container, Section } from '@/components/ui/Section';
import { path } from '@/lib/i18n/routes';

/**
 * Localized 404.
 *
 * `not-found` cannot read route params, so it renders in the default locale.
 * The proxy keeps unmatched paths inside a locale segment, so this always
 * appears with the full site chrome and real onward links instead of a dead
 * end.
 */
export default function NotFound() {
  const locale = DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  const links = primaryNavLinks(locale, dict);

  return (
    <Section tone="ivory" className="pt-36 pb-24">
      <Container width="narrow">
        <p className="text-xs font-semibold tracking-[0.16em] text-lagoon-strong uppercase">
          404
        </p>
        <h1 className="mt-4 text-4xl leading-tight text-balance sm:text-5xl">
          {dict.notFound.heading}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
          {dict.notFound.body}
        </p>

        <h2 className="mt-12 font-sans text-xs font-semibold tracking-[0.14em] uppercase">
          {dict.notFound.links}
        </h2>
        <ul className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <li>
            <Link
              href={path(locale, 'home')}
              className="inline-flex min-h-11 items-center text-[0.9375rem] text-lagoon-strong underline decoration-lagoon/40 underline-offset-4 hover:decoration-lagoon-strong"
            >
              {dict.nav.home}
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center text-[0.9375rem] text-lagoon-strong underline decoration-lagoon/40 underline-offset-4 hover:decoration-lagoon-strong"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

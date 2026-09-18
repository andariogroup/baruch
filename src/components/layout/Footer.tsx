import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Locale } from '@/config/site';
import { contact, location, socialProfiles } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import {
  legalNavLinks,
  primaryNavLinks,
} from '@/components/navigation/nav-links';
import {
  type AccommodationId,
  categorySlug,
  publishedCategories,
  categoryCopy,
} from '@/data/accommodation';
import { format } from '@/lib/i18n/format';
import { path } from '@/lib/i18n/routes';
import { Wordmark } from './Wordmark';

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const explore = primaryNavLinks(locale, dict);
  const legal = legalNavLinks(locale, dict);
  const categories = publishedCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-sand-deep bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Wordmark size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              {location.locality}, {location.region}, {location.country}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookingCTA dict={dict} placement="footer" size="sm" />
              <WhatsAppCTA dict={dict} context="home" size="sm" />
            </div>
          </div>

          <FooterColumn heading={dict.footer.exploreHeading}>
            {explore.map((link) => (
              <FooterLink key={link.key} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn heading={dict.footer.stayHeading}>
            {categories.map((category) => (
              <FooterLink
                key={category.id}
                href={path(
                  locale,
                  'accommodation',
                  categorySlug(locale, category.id as AccommodationId),
                )}
              >
                {categoryCopy(locale, category.id).name}
              </FooterLink>
            ))}
          </FooterColumn>

          <div className="flex flex-col gap-8">
            <FooterColumn heading={dict.footer.contactHeading}>
              {contact.phone || contact.email ? (
                <>
                  {contact.phone ? (
                    <li>
                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-lagoon-strong"
                      >
                        {contact.phone}
                      </a>
                    </li>
                  ) : null}
                  {contact.email ? (
                    <li>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-lagoon-strong"
                      >
                        {contact.email}
                      </a>
                    </li>
                  ) : null}
                </>
              ) : (
                <li className="text-sm text-ink-muted">
                  {dict.footer.contactPending}
                </li>
              )}
              <FooterLink href={path(locale, 'contact')}>
                {dict.nav.contact}
              </FooterLink>
            </FooterColumn>

            <FooterColumn heading={dict.footer.legalHeading}>
              {legal.map((link) => (
                <FooterLink key={link.key} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
              {socialProfiles.length === 0 ? (
                <li className="text-sm text-ink-muted">
                  {dict.footer.socialPending}
                </li>
              ) : (
                socialProfiles.map((profile) => (
                  <li key={profile.url}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-lagoon-strong"
                    >
                      {profile.name}
                    </a>
                  </li>
                ))
              )}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-sand-deep pt-6 text-xs text-ink-muted">
          <p>{format(dict.footer.rights, { year })}</p>
          <p>{dict.footer.assetNote}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold tracking-[0.14em] text-ink uppercase">
        {heading}
      </h2>
      <ul className="mt-4 flex flex-col gap-1">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-lagoon-strong"
      >
        {children}
      </Link>
    </li>
  );
}

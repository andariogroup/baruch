import { Mail, Phone } from 'lucide-react';
import type { Locale } from '@/config/site';
import { contact, location } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { ContactForm } from '@/components/contact/ContactForm';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

/**
 * Contact page. Direct channels appear only once verified; until then the form
 * and WhatsApp carry the conversation.
 */
export function ContactView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: dict.nav.contact, href: path(locale, 'contact') },
  ];

  const hasDirectChannels = Boolean(contact.phone || contact.email);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHeader
        dict={dict}
        crumbs={crumbs}
        heading={dict.contact.heading}
        intro={dict.contact.intro}
      />

      <Section tone="ivory" space="compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl">{dict.contact.channelsHeading}</h2>

              {hasDirectChannels ? (
                <ul className="flex flex-col gap-3">
                  {contact.phone ? (
                    <li>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="inline-flex min-h-11 items-center gap-2.5 text-[0.9375rem] transition-colors hover:text-lagoon-strong"
                      >
                        <Phone className="size-4 opacity-70" aria-hidden="true" />
                        {contact.phone}
                      </a>
                    </li>
                  ) : null}
                  {contact.email ? (
                    <li>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex min-h-11 items-center gap-2.5 text-[0.9375rem] transition-colors hover:text-lagoon-strong"
                      >
                        <Mail className="size-4 opacity-70" aria-hidden="true" />
                        {contact.email}
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <PendingNote dict={dict}>
                  {dict.contact.channelsPending}
                </PendingNote>
              )}

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <WhatsAppCTA dict={dict} context="contact" size="lg" />
                <BookingCTA dict={dict} placement="contact" size="lg" />
              </div>

              <div className="mt-2 border-t border-sand-deep pt-6">
                <h3 className="font-sans text-xs font-semibold tracking-[0.14em] uppercase">
                  {dict.nav.location}
                </h3>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">
                  {location.locality}, {location.region}, {location.country}
                </p>
              </div>
            </div>

            <div className="rounded-card border border-sand-deep bg-sand/40 p-6 lg:p-8">
              <h2 className="text-2xl">{dict.contact.formHeading}</h2>
              <p className="mt-2 mb-7 leading-relaxed text-ink-muted">
                {dict.contact.formIntro}
              </p>
              <ContactForm dict={dict} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

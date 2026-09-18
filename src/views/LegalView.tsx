import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section } from '@/components/ui/Section';
import { PendingNote } from '@/components/ui/PendingNote';
import { type PageKey, path } from '@/lib/i18n/routes';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { PageHeader } from './PageHeader';

export type LegalPage = Extract<PageKey, 'privacy' | 'cookies' | 'terms'>;

/**
 * Shared shell for the three legal documents.
 *
 * The text describes how the site actually behaves today, including that
 * reservations leave for a third-party domain. It carries a review notice
 * because the final wording has not been approved.
 */
export function LegalView({
  locale,
  dict,
  page,
}: {
  locale: Locale;
  dict: Dictionary;
  page: LegalPage;
}) {
  const document = dict.legal[page];

  const crumbs = [
    { name: dict.nav.home, href: path(locale, 'home') },
    { name: document.heading, href: path(locale, page) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHeader dict={dict} crumbs={crumbs} heading={document.heading} />

      <Section tone="ivory" space="compact">
        <Container width="prose">
          <div className="flex flex-col gap-5">
            {document.body.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed text-ink-muted text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <PendingNote dict={dict} className="mt-10">
            {dict.legal.pendingNote}
          </PendingNote>
        </Container>
      </Section>
    </>
  );
}

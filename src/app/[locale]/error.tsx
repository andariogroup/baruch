'use client';

import { DEFAULT_LOCALE } from '@/config/site';
import { getDictionary } from '@/content';
import { Button } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Section';

/**
 * Route-level error boundary. The underlying error is intentionally not shown:
 * it can contain internal detail, and it means nothing to a visitor.
 */
export default function LocaleError({ reset }: { reset: () => void }) {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <Section tone="ivory" className="pt-36 pb-24">
      <Container width="prose">
        <h1 className="text-3xl leading-tight text-balance sm:text-4xl">
          {dict.error.heading}
        </h1>
        <p className="mt-4 leading-relaxed text-ink-muted text-pretty">
          {dict.error.body}
        </p>
        <Button onClick={reset} size="lg" className="mt-8">
          {dict.error.retry}
        </Button>
      </Container>
    </Section>
  );
}

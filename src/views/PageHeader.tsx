import type { Dictionary } from '@/content/types';
import { Breadcrumbs, type Crumb } from '@/components/navigation/Breadcrumbs';
import { Container } from '@/components/ui/Section';

/**
 * Standard opening for interior pages: breadcrumb trail, the single `h1`, and
 * an optional lead paragraph. Extra top padding clears the fixed header.
 */
export function PageHeader({
  dict,
  crumbs,
  heading,
  intro,
  children,
}: {
  dict: Dictionary;
  crumbs: readonly Crumb[];
  heading: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-sand-deep bg-sand pt-28 pb-14 lg:pt-36 lg:pb-16">
      <Container>
        <Breadcrumbs dict={dict} items={crumbs} />
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl leading-[1.08] text-balance sm:text-5xl">
            {heading}
          </h1>
          {intro ? (
            <p className="text-lg leading-relaxed text-ink-muted text-pretty">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </div>
  );
}

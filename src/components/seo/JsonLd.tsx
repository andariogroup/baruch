/**
 * Renders structured data as a plain script tag.
 *
 * `<` is escaped to its unicode form so a string in the payload can never
 * close the script element and inject markup.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

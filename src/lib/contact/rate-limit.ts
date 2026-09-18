/**
 * In-memory rate limiter for the contact form.
 *
 * Deliberately simple: the contact form is the only public write surface on
 * the site and this runs on a single instance. It is a speed bump against
 * casual abuse, not a distributed guarantee — move to a shared store if the
 * deployment ever scales to multiple instances.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 5000;

const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): { allowed: boolean } {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return { allowed: false };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Bound memory: drop the oldest keys rather than growing without limit.
  if (hits.size > MAX_TRACKED_KEYS) {
    const oldest = hits.keys().next();
    if (!oldest.done) {
      hits.delete(oldest.value);
    }
  }

  return { allowed: true };
}

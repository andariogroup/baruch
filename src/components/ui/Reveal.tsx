'use client';

import { useEffect } from 'react';

/**
 * Progressive reveal-on-scroll.
 *
 * Content is fully visible in the server-rendered HTML. This only *adds* the
 * hidden starting state once JavaScript runs, so the page is never blank
 * without JS and never blocks the LCP element. Visitors who prefer reduced
 * motion are skipped entirely.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    );

    if (targets.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    for (const target of targets) {
      // Anything already on screen stays still; only below-the-fold
      // content gets a modest entrance motion. Opacity stays at 1 so the
      // copy remains readable and contrast-compliant before it enters view.
      if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
        continue;
      }
      target.classList.add('reveal-armed');
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}

'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { cn } from '@/lib/utils/cn';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { NavLink } from './nav-links';

type MobileMenuProps = {
  locale: Locale;
  dict: Dictionary;
  links: readonly NavLink[];
  activeKey: string | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Navigation drawer for viewports below `xl`.
 *
 * Portaled to `document.body` so header stacking and filters cannot trap it.
 * The backdrop ignores pointer events for a short beat after open so the
 * same tap that opened the menu cannot immediately close it on touch devices.
 */
export function MobileMenu({
  locale,
  dict,
  links,
  activeKey,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [backdropArmed, setBackdropArmed] = useState(false);

  useEffect(() => {
    closeRef.current?.focus();

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    body.dataset.menuOpen = 'true';

    const armBackdrop = window.setTimeout(() => setBackdropArmed(true), 200);

    const desktop = window.matchMedia('(min-width: 80rem)');
    function onViewportChange() {
      if (desktop.matches) onClose();
    }
    desktop.addEventListener('change', onViewportChange);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(armBackdrop);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onViewportChange);
      body.style.overflow = previousOverflow;
      delete body.dataset.menuOpen;
    };
  }, [onClose]);

  const dialog = (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex"
    >
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-ink/40 backdrop-blur-sm',
          backdropArmed ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        onClick={backdropArmed ? onClose : undefined}
      />

      <div
        ref={panelRef}
        className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-ivory pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] shadow-lifted"
      >
        <div className="flex items-center justify-between border-b border-sand-deep px-5 py-4">
          <span id={titleId} className="font-display text-lg">
            {dict.common.menu}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={dict.common.closeMenu}
            className="inline-flex size-11 items-center justify-center rounded-control touch-manipulation transition-colors hover:bg-sand"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav
          aria-label={dict.common.menu}
          className="flex-1 overflow-y-auto px-5 py-4"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={activeKey === link.key ? 'page' : undefined}
                  className="flex min-h-13 items-center border-b border-sand-deep/60 font-display text-xl transition-colors hover:text-lagoon-strong aria-[current=page]:text-lagoon-strong"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-sand-deep px-5 py-5">
          <BookingCTA dict={dict} placement="mobile-menu" size="lg" />
          <WhatsAppCTA dict={dict} context="home" size="lg" />
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-sm text-ink-muted">
              {dict.common.languageSwitch}
            </span>
            <LanguageSwitcher locale={locale} appearance="full" />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
}

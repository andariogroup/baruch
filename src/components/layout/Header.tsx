'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Locale } from '@/config/site';
import type { Dictionary } from '@/content/types';
import { BookingCTA } from '@/components/conversion/BookingCTA';
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { primaryNavLinks } from '@/components/navigation/nav-links';
import { path } from '@/lib/i18n/routes';
import { cn } from '@/lib/utils/cn';
import { Wordmark } from './Wordmark';

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Site header.
 *
 * On the home page it starts transparent over the hero and becomes an opaque
 * surface once scrolled, so the hero image reads full-bleed without costing
 * legibility. Every other route uses the solid treatment immediately.
 */
export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const links = primaryNavLinks(locale, dict);
  const homeHref = path(locale, 'home');
  const isHome = pathname === homeHref || pathname === `${homeHref}/`;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isHome) return;

    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  const activeKey =
    links.find(
      (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
    )?.key ?? null;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    const toggle = toggleRef.current;
    if (toggle && toggle.offsetParent !== null) {
      toggle.focus();
    }
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-[var(--ease-calm)]',
          transparent
            ? 'on-dark bg-gradient-to-b from-ink/85 via-ink/45 to-transparent text-ivory'
            : 'border-b border-sand-deep/70 bg-ivory/90 text-ink backdrop-blur-md',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:h-20 lg:px-8">
          <Link
            href={homeHref}
            aria-label={dict.meta.siteName}
            className="min-w-0 shrink-0 rounded-sm"
          >
            <Wordmark
              className={
                transparent
                  ? 'drop-shadow-[0_2px_10px_rgb(0_0_0_/_0.45)]'
                  : undefined
              }
              priority
            />
          </Link>

          <nav
            aria-label={dict.common.menu}
            className="hidden xl:flex xl:items-center xl:gap-1"
          >
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                aria-current={activeKey === link.key ? 'page' : undefined}
                className={cn(
                  'rounded-control px-3 py-2 text-sm font-medium transition-colors',
                  transparent
                    ? 'hover:bg-ivory/15 aria-[current=page]:bg-ivory/20'
                    : 'hover:bg-ink/5 aria-[current=page]:text-lagoon-strong',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            <LanguageSwitcher locale={locale} />
            <BookingCTA
              dict={dict}
              placement="header"
              variant={transparent ? 'onImage' : 'primary'}
              size="sm"
              className="hidden xl:inline-flex"
            />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.common.openMenu}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className={cn(
                'relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-control touch-manipulation xl:hidden',
                transparent ? 'hover:bg-ivory/15' : 'hover:bg-ink/5',
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <MobileMenu
          locale={locale}
          dict={dict}
          links={links}
          activeKey={activeKey}
          onClose={closeMenu}
        />
      ) : null}
    </>
  );
}

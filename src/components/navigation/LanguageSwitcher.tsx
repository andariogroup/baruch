'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, type Locale } from '@/config/site';
import { getDictionary } from '@/content';
import { track } from '@/lib/analytics/events';
import { translatePath } from '@/lib/i18n/translate-path';
import { cn } from '@/lib/utils/cn';
import { LanguageFlag } from './LanguageFlag';

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
  /** Toolbar stays compact on phones; `full` is the stacked drawer control. */
  appearance?: 'toolbar' | 'full';
};

/**
 * Language control.
 *
 * On small screens the header shows two 44px flag tiles so it does not crowd
 * the logo. From `sm` the ISO codes join the flags. The drawer lists native
 * names in full-width rows. The flag is never the only indicator: codes,
 * names or an accessible label always travel with it.
 */
export function LanguageSwitcher({
  locale,
  className,
  appearance = 'toolbar',
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const isFull = appearance === 'full';

  return (
    <nav
      aria-label={dict.common.languageSwitch}
      className={cn(
        isFull
          ? 'flex w-full flex-col gap-1'
          : 'inline-flex items-center rounded-control p-0.5 ring-1 ring-ink/15 on-dark:ring-ivory/30',
        className,
      )}
    >
      {LOCALES.map((option) => {
        const optionDict = getDictionary(option);
        const isCurrent = option === locale;
        const href = translatePath(pathname ?? `/${locale}`, option);

        const content = (
          <>
            <LanguageFlag
              locale={option}
              className={cn(
                'ring-ink/15 on-dark:ring-ivory/30',
                isFull ? 'h-5 w-8' : 'h-5 w-7 sm:h-4 sm:w-6',
              )}
            />
            {isFull ? (
              <span className="text-[0.9375rem] font-medium">
                {optionDict.meta.localeName}
              </span>
            ) : (
              <>
                <span className="sr-only sm:hidden">
                  {optionDict.meta.localeName}
                </span>
                <span className="hidden text-xs font-medium tracking-[0.08em] sm:inline">
                  {option.toUpperCase()}
                </span>
              </>
            )}
          </>
        );

        const chipClass = cn(
          'inline-flex items-center touch-manipulation transition-colors duration-200 ease-[var(--ease-calm)]',
          isFull
            ? 'min-h-12 w-full gap-3 rounded-control px-3'
            : 'size-11 justify-center rounded-[0.7rem] sm:size-auto sm:min-h-10 sm:gap-1.5 sm:px-2.5',
          isCurrent
            ? 'bg-ink/10 on-dark:bg-ivory/20'
            : 'hover:bg-ink/5 on-dark:hover:bg-ivory/15',
        );

        if (isCurrent) {
          return (
            <span key={option} className={chipClass} aria-current="true">
              {content}
            </span>
          );
        }

        return (
          <Link
            key={option}
            href={href}
            hrefLang={option}
            lang={option}
            aria-label={dict.common.switchToLanguage}
            title={dict.common.switchToLanguage}
            className={chipClass}
            onClick={() => track({ name: 'language_change', to: option })}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}

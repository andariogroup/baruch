'use client';

import { useActionState, useEffect, useId, useRef } from 'react';
import type { Dictionary } from '@/content/types';
import { submitContact } from '@/app/[locale]/actions';
import { Button } from '@/components/ui/Button';
import { track } from '@/lib/analytics/events';
import {
  type ContactField,
  initialContactState,
} from '@/lib/contact/schema';
import { cn } from '@/lib/utils/cn';

/**
 * Contact form.
 *
 * Built on a Server Action so it submits without JavaScript. Status messages
 * live in a polite live region and errors are linked to their input with
 * `aria-describedby`, so a screen reader user learns what failed and where.
 */
export function ContactForm({ dict }: { dict: Dictionary }) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );
  const copy = dict.contact.form;
  const baseId = useId();
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === 'idle') return;

    if (state.status === 'success') {
      track({ name: 'contact_submit', outcome: 'success' });
    } else if (state.status === 'error') {
      track({ name: 'contact_submit', outcome: 'error' });
    }

    // Move attention to the outcome rather than leaving it unannounced
    // further down the page.
    statusRef.current?.focus();
  }, [state]);

  const statusMessage = {
    idle: null,
    success: copy.success,
    error: copy.error,
    unavailable: copy.unavailable,
    rateLimited: copy.rateLimited,
    invalid: copy.errorSummary,
  }[state.status];

  const isPositive = state.status === 'success';

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={cn(
          'rounded-card border p-4 text-sm leading-relaxed',
          !statusMessage && 'hidden',
          isPositive
            ? 'border-jungle/40 bg-jungle-wash text-jungle-strong'
            : 'border-alert/40 bg-sand text-ink',
        )}
      >
        {statusMessage}
      </div>

      <Field
        id={`${baseId}-name`}
        name="name"
        label={copy.name}
        autoComplete="name"
        error={state.fieldErrors.name}
        dict={dict}
      />

      <Field
        id={`${baseId}-email`}
        name="email"
        type="email"
        label={copy.email}
        autoComplete="email"
        error={state.fieldErrors.email}
        dict={dict}
      />

      <Field
        id={`${baseId}-message`}
        name="message"
        label={copy.message}
        multiline
        error={state.fieldErrors.message}
        dict={dict}
      />

      {/* Honeypot: hidden from everyone, including assistive technology. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${baseId}-company`}>Company</label>
        <input
          id={`${baseId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-sm text-ink-muted">{copy.privacyNote}</p>

      <Button type="submit" size="lg" disabled={pending} className="self-start">
        {pending ? copy.submitting : copy.submit}
      </Button>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: ContactField;
  label: string;
  dict: Dictionary;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: 'required' | 'invalidEmail' | 'tooShort';
};

function Field({
  id,
  name,
  label,
  dict,
  type = 'text',
  autoComplete,
  multiline = false,
  error,
}: FieldProps) {
  const errorId = `${id}-error`;
  const message = error ? dict.contact.form[error] : null;

  const shared = {
    id,
    name,
    autoComplete,
    'aria-invalid': error ? (true as const) : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: cn(
      'w-full rounded-control border bg-ivory px-4 py-3 text-base',
      'transition-colors placeholder:text-ink-muted/70',
      error ? 'border-alert' : 'border-sand-deep hover:border-ink/30',
    ),
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      {multiline ? (
        <textarea {...shared} rows={6} className={cn(shared.className, 'resize-y')} />
      ) : (
        <input {...shared} type={type} />
      )}

      {message ? (
        <p id={errorId} className="text-sm text-alert">
          {message}
        </p>
      ) : null}
    </div>
  );
}

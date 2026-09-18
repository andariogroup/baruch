'use server';

import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/contact/rate-limit';
import {
  type ContactField,
  type ContactState,
  contactSchema,
  issueToKey,
} from '@/lib/contact/schema';

/**
 * Handles a contact enquiry.
 *
 * Validation runs here rather than only in the browser, because client-side
 * checks are a convenience and not a control. Delivery goes to a configurable
 * webhook; with none configured the action reports `unavailable` instead of
 * telling the visitor a message was received that nobody will ever read.
 *
 * Submitted content is never logged: the message body and email address are
 * forwarded and then dropped.
 */
export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Hidden field that real visitors leave empty. Silently accept to avoid
  // telling a bot which signal caught it.
  if (typeof formData.get('company') === 'string' && formData.get('company')) {
    return { status: 'success', fieldErrors: {} };
  }

  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField | undefined;
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = issueToKey(field, raw[field]);
      }
    }
    return { status: 'invalid', fieldErrors };
  }

  const headerList = await headers();
  const forwardedFor = headerList.get('x-forwarded-for');
  const clientKey = forwardedFor?.split(',')[0]?.trim() || 'unknown';

  if (!checkRateLimit(clientKey).allowed) {
    return { status: 'rateLimited', fieldErrors: {} };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL?.trim();

  if (!endpoint) {
    return { status: 'unavailable', fieldErrors: {} };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(parsed.data),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return { status: 'error', fieldErrors: {} };
    }

    return { status: 'success', fieldErrors: {} };
  } catch {
    // The failure reason is not surfaced or logged with the payload attached.
    return { status: 'error', fieldErrors: {} };
  }
}

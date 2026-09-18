import { z } from 'zod';

/**
 * Field limits are generous for a genuine enquiry and tight enough that a
 * payload cannot be used to push large content through the server action.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(20).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactInput;

export type ContactState = {
  status: 'idle' | 'success' | 'error' | 'invalid' | 'unavailable' | 'rateLimited';
  /** Error keys per field, resolved to localized copy in the component. */
  fieldErrors: Partial<Record<ContactField, 'required' | 'invalidEmail' | 'tooShort'>>;
};

export const initialContactState: ContactState = {
  status: 'idle',
  fieldErrors: {},
};

/** Maps a Zod issue to the dictionary key the UI should display. */
export function issueToKey(
  field: ContactField,
  value: unknown,
): 'required' | 'invalidEmail' | 'tooShort' {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return 'required';
  }
  return field === 'email' ? 'invalidEmail' : 'tooShort';
}

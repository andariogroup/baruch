import type { ReactNode } from 'react';

/**
 * Root layout is a passthrough so each locale can own `<html lang>` and
 * `<body>`. Next.js still requires this file at the app root.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

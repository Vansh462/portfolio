import { Analytics } from '@vercel/analytics/react';

/**
 * Vercel Analytics component
 * Provides anonymous page view tracking through Vercel's analytics service
 */
export function VercelAnalytics() {
  return <Analytics />;
}
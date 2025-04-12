/**
 * Microsoft Clarity integration for heatmaps and session recordings
 *
 * This file provides functions to initialize and work with Microsoft Clarity,
 * which offers heatmaps, session recordings, and other user behavior analytics.
 */

import { analyticsConfig } from '@/config/analytics';
import { hasAnalyticsConsent, onConsentChange } from './cookieConsent';

/**
 * Initialize Microsoft Clarity
 */
export const initClarity = (): void => {
  if (typeof window !== 'undefined' && analyticsConfig.clarity.enabled) {
    // In development mode, log but still initialize (for testing)
    if (import.meta.env.DEV) {
      console.log('Clarity initialized in development mode (for testing)');
    }

    // Only initialize Clarity if user has given consent
    if (hasAnalyticsConsent()) {
      // Add Clarity script
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", analyticsConfig.clarity.projectId);
    }

    // Handle consent changes
    onConsentChange(() => {
      if (hasAnalyticsConsent()) {
        // User gave consent, initialize Clarity if not already initialized
        if (!(window as any).clarity) {
          initClarity();
        }
      } else {
        // User declined consent, remove Clarity if possible
        // Note: Clarity doesn't have a built-in method to disable after loading
        // This is a best-effort approach
        if ((window as any).clarity) {
          // Disable tracking
          (window as any).clarity("consent", false);
        }
      }
    });
  }
};

/**
 * Track custom events in Clarity
 * @param eventName - Name of the event to track
 * @param metadata - Optional metadata to include with the event
 */
export const trackClarityEvent = (
  eventName: string,
  metadata?: Record<string, string | number | boolean>
): void => {
  // Only track if user has given consent
  if (typeof window !== 'undefined' && (window as any).clarity && hasAnalyticsConsent()) {
    (window as any).clarity("event", eventName, metadata);
  }
};

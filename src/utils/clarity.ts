/**
 * Microsoft Clarity integration for heatmaps and session recordings
 *
 * This file provides functions to initialize and work with Microsoft Clarity,
 * which offers heatmaps, session recordings, and other user behavior analytics.
 */

import { analyticsConfig } from '@/config/analytics';

/**
 * Initialize Microsoft Clarity
 */
export const initClarity = (): void => {
  if (typeof window !== 'undefined' && analyticsConfig.clarity.enabled) {
    // Skip in development mode unless explicitly enabled
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_ANALYTICS) {
      console.log('Clarity not initialized in development mode');
      return;
    }

    // Add Clarity script
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", analyticsConfig.clarity.projectId);
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
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity("event", eventName, metadata);
  }
};

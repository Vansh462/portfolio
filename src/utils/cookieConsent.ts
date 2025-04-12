/**
 * Cookie Consent Management with Cookiebot
 *
 * This file provides utilities for working with Cookiebot consent management
 * and integrating it with analytics tools.
 */

// Cookiebot consent categories
export enum ConsentCategory {
  NECESSARY = 'necessary',
  PREFERENCES = 'preferences',
  STATISTICS = 'statistics',
  MARKETING = 'marketing'
}

/**
 * Check if consent has been given for a specific category
 * @param category - The consent category to check
 * @returns boolean indicating if consent was given
 */
export const hasConsent = (category: ConsentCategory): boolean => {
  // If Cookiebot is not loaded yet, assume no consent
  if (typeof window === 'undefined' || !(window as any).Cookiebot) {
    return false;
  }

  const cookiebot = (window as any).Cookiebot;

  switch (category) {
    case ConsentCategory.NECESSARY:
      return cookiebot.consented && cookiebot.consent.necessary;
    case ConsentCategory.PREFERENCES:
      return cookiebot.consented && cookiebot.consent.preferences;
    case ConsentCategory.STATISTICS:
      return cookiebot.consented && cookiebot.consent.statistics;
    case ConsentCategory.MARKETING:
      return cookiebot.consented && cookiebot.consent.marketing;
    default:
      return false;
  }
};

/**
 * Initialize Cookiebot
 */
export const initCookieConsent = (): void => {
  // Cookiebot is now loaded directly in index.html
  // This function is kept for compatibility with existing code
  if (typeof window !== 'undefined') {
    console.log('Cookiebot initialization delegated to index.html');

    // Add a manual trigger for the Cookiebot dialog to the window object
    // This allows us to open the dialog programmatically
    (window as any).openCookieDialog = () => {
      if ((window as any).Cookiebot) {
        (window as any).Cookiebot.show();
        return true;
      }
      return false;
    };
  }
};

/**
 * Add a callback for when consent changes
 * @param callback - Function to call when consent status changes
 */
export const onConsentChange = (callback: () => void): void => {
  if (typeof window !== 'undefined') {
    // Add event listener for Cookiebot consent changes
    window.addEventListener('CookiebotOnAccept', callback);
    window.addEventListener('CookiebotOnDecline', callback);
  }
};

/**
 * Check if analytics consent has been given
 * @returns boolean indicating if analytics consent was given
 */
export const hasAnalyticsConsent = (): boolean => {
  return hasConsent(ConsentCategory.STATISTICS);
};

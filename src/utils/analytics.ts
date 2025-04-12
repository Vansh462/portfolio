import ReactGA from 'react-ga4';
import { analyticsConfig, analyticsFeatures } from '@/config/analytics';

/**
 * Initialize Google Analytics
 */
export const initGA = (): void => {
  if (typeof window !== 'undefined' && analyticsConfig.googleAnalytics.enabled) {
    // Skip in development mode unless explicitly enabled
    if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_ANALYTICS) {
      console.log('Google Analytics not initialized in development mode');
      return;
    }

    ReactGA.initialize(analyticsConfig.googleAnalytics.measurementId);
  }
};

/**
 * Track page views
 * @param path - The current page path
 */
export const trackPageView = (path: string): void => {
  if (!analyticsFeatures.pageViews) return;

  ReactGA.send({ hitType: 'pageview', page: path });
};

/**
 * Track events (button clicks, form submissions, etc.)
 * @param category - Event category (e.g., 'User', 'Navigation')
 * @param action - Event action (e.g., 'Clicked Button', 'Submitted Form')
 * @param label - Optional label for additional context
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string
): void => {
  if (!analyticsFeatures.events) return;

  ReactGA.event({
    category,
    action,
    label
  });
};

/**
 * Track outbound links
 * @param url - The URL being navigated to
 * @param label - Optional label for the link
 */
export const trackOutboundLink = (url: string, label?: string): void => {
  if (!analyticsFeatures.outboundLinks) return;

  trackEvent('Outbound Link', url, label);
};

/**
 * Track social media interactions
 * @param network - Social network name (e.g., 'Twitter', 'LinkedIn')
 * @param action - Action taken (e.g., 'Share', 'Follow')
 */
export const trackSocialInteraction = (network: string, action: string): void => {
  if (!analyticsFeatures.socialInteractions) return;

  trackEvent('Social', action, network);
};

/**
 * Track file downloads
 * @param fileName - Name of the file being downloaded
 */
export const trackDownload = (fileName: string): void => {
  if (!analyticsFeatures.fileDownloads) return;

  trackEvent('Download', 'File Download', fileName);
};

/**
 * Track form submissions
 * @param formName - Name of the form being submitted
 * @param success - Whether the submission was successful
 */
export const trackFormSubmission = (formName: string, success: boolean): void => {
  if (!analyticsFeatures.formSubmissions) return;

  trackEvent('Form', success ? 'Submission Success' : 'Submission Failed', formName);
};

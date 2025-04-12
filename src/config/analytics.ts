/**
 * Analytics Configuration
 *
 * This file contains configuration settings for various analytics tools.
 * Update these values with your actual tracking IDs.
 */

export const analyticsConfig = {
  // Google Analytics 4 Measurement ID
  // Create one at: https://analytics.google.com/
  googleAnalytics: {
    measurementId: 'G-9FRW8WM9KF', // Your GA4 measurement ID
    enabled: true
  },

  // Microsoft Clarity Project ID
  // Create one at: https://clarity.microsoft.com/
  clarity: {
    projectId: 'r2uztsfz9n', // Your Clarity project ID
    enabled: true
  },

  // Vercel Analytics
  // Enabled through Vercel dashboard
  vercel: {
    enabled: true
  }
};

// Feature flags for analytics features
export const analyticsFeatures = {
  pageViews: true,
  events: true,
  timing: false,
  exceptions: true,
  socialInteractions: true,
  outboundLinks: true,
  fileDownloads: true,
  formSubmissions: true
};

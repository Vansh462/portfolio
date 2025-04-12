# Analytics Setup Guide

This document provides instructions for setting up and configuring analytics for your portfolio website.

## Available Analytics Tools

The portfolio is configured to work with the following analytics tools:

1. **Google Analytics 4 (GA4)** - For comprehensive user behavior tracking
2. **Microsoft Clarity** - For heatmaps and session recordings
3. **Vercel Analytics** - For Core Web Vitals and basic visitor data

## Configuration

All analytics configuration is centralized in the `src/config/analytics.ts` file.

### Setting Up Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/) and create a new property
2. Make sure to select "Web" as the platform and "GA4" as the property type
3. Complete the setup process to get your Measurement ID (starts with "G-")
4. Open `src/config/analytics.ts` and update the `measurementId` value:

```typescript
googleAnalytics: {
  measurementId: 'G-XXXXXXXXXX', // Replace with your actual GA4 measurement ID
  enabled: true
}
```

### Setting Up Microsoft Clarity

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/) and create a new project
2. Complete the setup process to get your Project ID
3. Open `src/config/analytics.ts` and update the `projectId` value:

```typescript
clarity: {
  projectId: 'your-clarity-project-id', // Replace with your actual Clarity project ID
  enabled: true
}
```

### Setting Up Vercel Analytics

1. Deploy your site to Vercel
2. Go to your project in the Vercel dashboard
3. Navigate to the Analytics tab
4. Click "Enable Analytics"

No code changes are required for Vercel Analytics.

## Feature Flags

You can enable or disable specific analytics features by updating the `analyticsFeatures` object in `src/config/analytics.ts`:

```typescript
export const analyticsFeatures = {
  pageViews: true,        // Track page views
  events: true,           // Track user interactions
  timing: false,          // Track performance timing
  exceptions: true,       // Track JavaScript errors
  socialInteractions: true, // Track social media interactions
  outboundLinks: true,    // Track clicks on external links
  fileDownloads: true,    // Track file downloads
  formSubmissions: true   // Track form submissions
};
```

## Development Mode

By default, analytics are disabled in development mode to avoid skewing your data. If you need to test analytics in development, you can create a `.env.local` file with:

```
VITE_ENABLE_ANALYTICS=true
```

## What's Being Tracked

The portfolio tracks the following user interactions:

1. **Page Views** - Every time a user navigates to a new page
2. **Button Clicks** - Interactions with important buttons
3. **Form Submissions** - Contact form submissions (success/failure)
4. **Resume Downloads** - When users download your resume
5. **Project Interactions** - Clicks on GitHub links and live demos
6. **Social Media Clicks** - Interactions with social media links
7. **External Link Clicks** - Clicks on links that lead outside your site

## Custom Event Tracking

If you want to track additional custom events, you can use the `trackEvent` function:

```typescript
import { trackEvent } from '@/utils/analytics';

// Example usage
trackEvent('Category', 'Action', 'Label');
```

For Microsoft Clarity custom events:

```typescript
import { trackClarityEvent } from '@/utils/clarity';

// Example usage
trackClarityEvent('eventName', { key: 'value' });
```

## Privacy Considerations

Make sure to update your privacy policy to disclose your use of these analytics tools and what data you're collecting from users.

## Troubleshooting

If analytics aren't working:

1. Check that you've entered the correct IDs in the configuration file
2. Verify that the analytics services are properly set up
3. Make sure you're not blocking analytics with browser extensions
4. Check the browser console for any errors related to analytics

/**
 * Route Prefetching Utility
 * 
 * This file provides utilities for prefetching routes to improve navigation performance.
 */

// Set to track routes that have already been prefetched
const prefetchedRoutes = new Set<string>();

/**
 * Prefetch a JavaScript chunk for a route
 * @param route - Route path to prefetch
 */
export function prefetchRoute(route: string): void {
  // Skip if already prefetched or in development mode
  if (prefetchedRoutes.has(route) || import.meta.env.DEV) {
    return;
  }
  
  // Use requestIdleCallback if available, otherwise use setTimeout
  const scheduleTask = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  scheduleTask(() => {
    try {
      // Map routes to their corresponding chunk names
      // This is a simplified example - in a real app, you'd need to map routes to actual chunk names
      const routeToChunk: Record<string, string> = {
        '/': 'HomePage',
        '/about': 'AboutPage',
        '/experience': 'ExperiencePage',
        '/projects': 'ProjectsPage',
        '/contact': 'ContactPage',
      };
      
      const chunkName = routeToChunk[route];
      
      if (chunkName) {
        // Create a link element for preloading
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = `/assets/${chunkName}.js`; // Adjust path based on your build output
        link.as = 'script';
        document.head.appendChild(link);
        
        // Mark as prefetched
        prefetchedRoutes.add(route);
      }
    } catch (error) {
      console.error(`Error prefetching route ${route}:`, error);
    }
  });
}

// Add missing import for prefetchRoute
import { prefetch } from './httpOptimizer';

/**
 * Setup prefetching for all links on the page
 */
export function setupLinkPrefetching(): void {
  // Skip in development mode
  if (import.meta.env.DEV) {
    return;
  }

  // Use event delegation for better performance
  document.addEventListener('mouseover', (e) => {
    let target = e.target as HTMLElement | null;
    // Traverse up to find the nearest anchor element
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target && target.tagName === 'A') {
      const link = target as HTMLAnchorElement;
      const href = link.getAttribute('href');
      // Only prefetch internal links
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        prefetch(href);
      }
    }
  });
}

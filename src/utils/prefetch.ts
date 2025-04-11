/**
 * Modern route prefetching system
 * 
 * This utility helps prefetch routes before they're needed,
 * similar to how major sites like Facebook, Twitter, and Google
 * prefetch content for instant navigation.
 */

// Map of routes to their lazy-loaded components
const routeComponentMap = {
  '/': () => import('@/pages/HomePage'),
  '/about': () => import('@/pages/AboutPage'),
  '/experience': () => import('@/pages/ExperiencePage'),
  '/projects': () => import('@/pages/ProjectsPage'),
  '/contact': () => import('@/pages/ContactPage'),
};

// Keep track of prefetched routes
const prefetchedRoutes = new Set<string>();

/**
 * Prefetch a route's component
 * @param route - The route to prefetch
 */
export const prefetchRoute = (route: string): void => {
  // Skip if already prefetched
  if (prefetchedRoutes.has(route)) {
    return;
  }
  
  // Get the component loader
  const componentLoader = routeComponentMap[route as keyof typeof routeComponentMap];
  
  if (!componentLoader) {
    console.warn(`No component found for route: ${route}`);
    return;
  }
  
  // Use requestIdleCallback for low-priority prefetching
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      componentLoader().then(() => {
        prefetchedRoutes.add(route);
        console.log(`Prefetched route: ${route}`);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      componentLoader().then(() => {
        prefetchedRoutes.add(route);
        console.log(`Prefetched route: ${route}`);
      });
    }, 1000);
  }
};

/**
 * Prefetch all adjacent routes from the current route
 * @param currentRoute - The current route
 */
export const prefetchAdjacentRoutes = (currentRoute: string): void => {
  // Get all routes except the current one
  const routesToPrefetch = Object.keys(routeComponentMap).filter(
    route => route !== currentRoute
  );
  
  // Prefetch each route
  routesToPrefetch.forEach(route => {
    prefetchRoute(route);
  });
};

/**
 * Hook into link hover events to prefetch routes
 */
export const setupLinkPrefetching = (): void => {
  // Use event delegation for better performance
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    
    // Check if the target is a link
    if (target.tagName === 'A') {
      const link = target as HTMLAnchorElement;
      const href = link.getAttribute('href');
      
      // Only prefetch internal links
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        prefetchRoute(href);
      }
    }
  });
};

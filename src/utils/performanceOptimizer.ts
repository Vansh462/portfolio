/**
 * Performance Optimization Utilities
 * 
 * This file provides utilities for optimizing website performance,
 * including resource loading, image optimization, and performance monitoring.
 */

/**
 * Preload critical resources
 * @param resources Array of URLs to preload
 * @param type Resource type (e.g., 'image', 'style', 'script')
 */
export function preloadResources(resources: string[], type: 'image' | 'style' | 'script' | 'font'): void {
  if (typeof window === 'undefined') return;
  
  resources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    
    if (type === 'font') {
      link.setAttribute('crossorigin', 'anonymous');
    }
    
    document.head.appendChild(link);
  });
}

/**
 * Preconnect to external domains
 * @param domains Array of domains to preconnect to
 */
export function preconnectToDomains(domains: string[]): void {
  if (typeof window === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
    
    // Also add DNS prefetch as a fallback for browsers that don't support preconnect
    const dnsLink = document.createElement('link');
    dnsLink.rel = 'dns-prefetch';
    dnsLink.href = domain;
    document.head.appendChild(dnsLink);
  });
}

/**
 * Lazy load non-critical resources
 * @param callback Function to execute when the browser is idle
 */
export function lazyLoadNonCritical(callback: () => void): void {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(callback, 1000);
  }
}

/**
 * Monitor Core Web Vitals
 * Reports Core Web Vitals metrics to the console in development mode
 */
export function monitorWebVitals(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // LCP
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    
    // FID
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        const delay = (entry as PerformanceEventTiming).processingStart - entry.startTime;
        console.log('FID:', delay, 'ms');
      });
    }).observe({ type: 'first-input', buffered: true });
    
    // CLS
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          console.log('Current CLS:', clsValue);
        }
      });
    }).observe({ type: 'layout-shift', buffered: true });
    
  } catch (e) {
    console.error('Error monitoring web vitals:', e);
  }
}

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations(): void {
  // Preconnect to external domains
  preconnectToDomains([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.simpleicons.org'
  ]);
  
  // Preload critical resources
  preloadResources([
    '/profile.webp'
  ], 'image');
  
  // Monitor web vitals in development
  if (import.meta.env.DEV) {
    monitorWebVitals();
  }
  
  // Lazy load non-critical resources
  lazyLoadNonCritical(() => {
    // Load non-critical CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/assets/non-critical.css';
    document.head.appendChild(linkElement);
    
    // Prefetch other routes
    const routes = ['/about', '/experience', '/projects', '/contact'];
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  });
}

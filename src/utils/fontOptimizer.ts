/**
 * Font Optimization Utilities
 * 
 * This file provides utilities for optimizing font loading and rendering.
 */

/**
 * Load fonts with optimal settings
 */
export function optimizeFontLoading(): void {
  if (typeof window === 'undefined') return;
  
  // Create a web font loader script
  const webFontScript = document.createElement('script');
  webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  webFontScript.async = true;
  
  // Configure Web Font Loader
  webFontScript.onload = () => {
    (window as any).WebFont.load({
      google: {
        families: ['Inter:300,400,500,600,700&display=swap']
      },
      timeout: 2000, // Set a timeout for loading fonts
      active: () => {
        // Font has loaded successfully
        document.documentElement.classList.add('fonts-loaded');
      },
      inactive: () => {
        // Font failed to load, but page should still be usable with fallbacks
        document.documentElement.classList.add('fonts-failed');
      }
    });
  };
  
  // Add the script to the document
  document.head.appendChild(webFontScript);
}

/**
 * Add font-display: swap to all font faces
 */
export function addFontDisplaySwap(): void {
  if (typeof window === 'undefined') return;
  
  // Find all stylesheet links
  const styleSheets = Array.from(document.styleSheets);
  
  try {
    // Loop through all stylesheets
    styleSheets.forEach(styleSheet => {
      try {
        // Skip cross-origin stylesheets
        if (!styleSheet.href || !styleSheet.href.includes(window.location.origin)) return;
        
        // Get all CSS rules
        const rules = Array.from(styleSheet.cssRules || styleSheet.rules || []);
        
        // Find @font-face rules
        rules.forEach(rule => {
          if (rule instanceof CSSFontFaceRule) {
            // Add font-display: swap
            (rule as any).style.fontDisplay = 'swap';
          }
        });
      } catch (e) {
        // Silently fail for cross-origin stylesheets
      }
    });
  } catch (e) {
    console.error('Error optimizing fonts:', e);
  }
}

/**
 * Initialize font optimizations
 */
export function initFontOptimizations(): void {
  // Add a class to indicate JS is enabled
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }
  
  // Use requestIdleCallback to optimize fonts when the browser is idle
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        optimizeFontLoading();
        addFontDisplaySwap();
      });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        optimizeFontLoading();
        addFontDisplaySwap();
      }, 1000);
    }
  }
}

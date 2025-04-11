/**
 * Modern asset preloading system
 *
 * This utility helps preload critical assets like images, fonts, and scripts
 * to improve perceived performance, similar to techniques used by major tech companies.
 */

// List of critical images to preload
const criticalImages = [
  // Add paths to critical images here
  '/assets/hero-bg.webp',
  '/profile.jpg',
];

// List of critical fonts to preload
const criticalFonts = [
  // Add paths to critical fonts here
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
];

/**
 * Preload an image
 * @param src - Image source URL
 */
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload a font
 * @param href - Font URL
 */
const preloadFont = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  document.head.appendChild(link);

  // Also load the font
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = href;
  document.head.appendChild(fontLink);
};

/**
 * Preload critical assets
 */
export const preloadCriticalAssets = (): void => {
  // Use requestIdleCallback for non-blocking preloading
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      // Preload critical images
      criticalImages.forEach(src => {
        preloadImage(src).catch(() => {
          console.warn(`Failed to preload image: ${src}`);
        });
      });

      // Preload critical fonts
      criticalFonts.forEach(href => {
        preloadFont(href);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      criticalImages.forEach(src => {
        preloadImage(src).catch(() => {
          console.warn(`Failed to preload image: ${src}`);
        });
      });

      criticalFonts.forEach(href => {
        preloadFont(href);
      });
    }, 1000);
  }
};

/**
 * Initialize performance optimizations
 */
export const initPerformanceOptimizations = (): void => {
  // Preload critical assets
  preloadCriticalAssets();

  // Add more performance optimizations here
};

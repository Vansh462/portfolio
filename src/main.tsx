import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { initGA } from './utils/analytics';
import { initClarity } from './utils/clarity';
import { initCookieConsent } from './utils/cookieConsent';
import { setupLinkPrefetching } from './utils/routePrefetcher';
import { initPerformanceOptimizations } from './utils/performanceOptimizer';
import { initFontOptimizations } from './utils/fontOptimizer';

// Initialize performance optimizations first
initPerformanceOptimizations();

// Initialize font optimizations
initFontOptimizations();

// Initialize cookie consent
initCookieConsent();

// Initialize analytics tools (they will check for consent)
initGA();
initClarity();

// Setup link prefetching for better navigation performance
setupLinkPrefetching();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

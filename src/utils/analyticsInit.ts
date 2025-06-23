// Analytics service initializers
import { initGA } from './analytics';
import { initClarity } from './clarity';

// Configuration
import { analyticsConfig } from '@/config/analytics';

/**
 * Initialize all analytics services based on configuration
 */
export const initAnalytics = (): void => {
  // Initialize Google Analytics if enabled in config
  if (analyticsConfig.googleAnalytics.enabled) {
    initGA();
  }
  
  // Initialize Microsoft Clarity if enabled in config
  if (analyticsConfig.clarity.enabled) {
    initClarity();
  }
};
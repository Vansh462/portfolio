// User preferences for animations and confetti
// Industry standard approach: Store user preferences in localStorage

interface UserPreferences {
  confettiEnabled: boolean;
  animationsEnabled: boolean;
}

const PREFERENCES_KEY = 'portfolio_user_preferences';

// Default preferences (industry standard: animations ON by default)
const defaultPreferences: UserPreferences = {
  confettiEnabled: true,
  animationsEnabled: true,
};

// Get user preferences from localStorage
export const getUserPreferences = (): UserPreferences => {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (stored) {
      return { ...defaultPreferences, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.warn('Failed to load user preferences:', error);
  }
  return defaultPreferences;
};

// Save user preferences to localStorage
export const saveUserPreferences = (preferences: Partial<UserPreferences>): void => {
  try {
    const current = getUserPreferences();
    const updated = { ...current, ...preferences };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.warn('Failed to save user preferences:', error);
  }
};

// Check if confetti should be shown (industry approach)
export const shouldShowConfettiAdvanced = (): boolean => {
  // 1. Check user's explicit preference first
  const userPrefs = getUserPreferences();
  if (!userPrefs.confettiEnabled) {
    return false;
  }

  // 2. Respect system accessibility preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return false;
  }

  // 3. Default to showing confetti (industry standard)
  return true;
};

// Toggle confetti preference
export const toggleConfetti = (): boolean => {
  const current = getUserPreferences();
  const newValue = !current.confettiEnabled;
  saveUserPreferences({ confettiEnabled: newValue });
  return newValue;
};

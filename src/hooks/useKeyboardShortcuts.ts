import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';

interface KeyboardShortcutOptions {
  openSearch: () => void;
}

/**
 * Hook to handle global keyboard shortcuts
 */
export function useKeyboardShortcuts({ openSearch }: KeyboardShortcutOptions) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger shortcuts if no input element is focused
      const activeElement = document.activeElement;
      const isInputFocused = 
        activeElement instanceof HTMLInputElement || 
        activeElement instanceof HTMLTextAreaElement || 
        activeElement instanceof HTMLSelectElement ||
        activeElement?.getAttribute('contenteditable') === 'true';
      
      if (isInputFocused) return;

      // Check for modifier key (Ctrl or Command)
      const isModifierKey = e.ctrlKey || e.metaKey;
      
      // Handle keyboard shortcuts
      switch (e.key) {
        // Search (press / to open search)
        case '/':
          e.preventDefault();
          openSearch();
          trackEvent('Keyboard Shortcut', 'Search', '/');
          break;
          
        // Navigation shortcuts with modifier key
        case 'h':
          if (isModifierKey) {
            e.preventDefault();
            navigate('/');
            trackEvent('Keyboard Shortcut', 'Navigation', 'Home');
          }
          break;
        case 'a':
          if (isModifierKey) {
            e.preventDefault();
            navigate('/about');
            trackEvent('Keyboard Shortcut', 'Navigation', 'About');
          }
          break;
        case 'e':
          if (isModifierKey) {
            e.preventDefault();
            navigate('/experience');
            trackEvent('Keyboard Shortcut', 'Navigation', 'Experience');
          }
          break;
        case 'p':
          if (isModifierKey) {
            e.preventDefault();
            navigate('/projects');
            trackEvent('Keyboard Shortcut', 'Navigation', 'Projects');
          }
          break;
        case 'c':
          if (isModifierKey) {
            e.preventDefault();
            navigate('/contact');
            trackEvent('Keyboard Shortcut', 'Navigation', 'Contact');
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, openSearch]);
}

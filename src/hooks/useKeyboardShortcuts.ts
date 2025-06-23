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

      // Handle keyboard shortcuts
      switch (e.key) {
        // Search (press / to open search) - only non-modifier shortcut
        case '/':
          e.preventDefault();
          openSearch();
          trackEvent('Keyboard Shortcut', 'Search', '/');
          break;

        // Disabled navigation shortcuts to prevent interference with normal text editing
        // Users can use regular navigation methods (clicking, mouse, etc.)
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, openSearch]);
}

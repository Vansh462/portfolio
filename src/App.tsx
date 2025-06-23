import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from './utils/analytics';
import { ThemeProvider } from '@/components/ThemeProvider';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import SearchDialog from '@/components/ui/SearchDialog';
import KeyboardShortcutsDialog from '@/components/ui/KeyboardShortcutsDialog';

// Direct imports for instant navigation - no lazy loading delays
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import NotFoundPage from '@/pages/NotFoundPage';

// No loading component needed - instant navigation

// AnimatePresence wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Track page views when location changes
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  // Setup keyboard shortcuts
  useKeyboardShortcuts({
    openSearch: () => {
      setIsSearchOpen(true);
      trackEvent('Keyboard Shortcut', 'Open Search', 'Global');
    }
  });

  // Handle ? key for keyboard shortcuts help
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsShortcutsOpen(true);
        trackEvent('Keyboard Shortcut', 'Open Shortcuts Help', 'Global');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PageTransition>

      {/* Global Search Dialog */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

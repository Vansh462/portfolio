import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from './utils/analytics';
import { ThemeProvider } from '@/components/ThemeProvider';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import SearchDialog from '@/components/ui/SearchDialog';
import KeyboardShortcutsDialog from '@/components/ui/KeyboardShortcutsDialog';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary-500 border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
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

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import KeyboardShortcutsDialog from '@/components/ui/KeyboardShortcutsDialog';
import { trackEvent } from '@/utils/analytics';

// Lazy load new feature components
const SkillsNetwork = lazy(() => import('@/components/skills/SkillsNetwork'));
const CertificationsGallery = lazy(() => import('@/components/certifications/CertificationsGallery'));

// Component loader with skeleton
const ComponentLoader = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-10 animate-pulse"></div>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
    </div>
  </div>
);

export default function Layout() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Simulate page load to demonstrate performance optimization
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      {/* Global Animated Background */}
      <GlobalAnimatedBackground />

      <Header />
      <main className="flex-grow pt-20 relative z-10">
        {!isLoaded ? (
          <ComponentLoader />
        ) : (
          <Outlet />
        )}

      </main>
      <Footer onOpenShortcuts={() => setIsShortcutsOpen(true)} />

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

// React and third-party imports
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import KeyboardShortcutsDialog from '@/components/ui/KeyboardShortcutsDialog';

export default function Layout() {
  const location = useLocation();
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  
  // Handle route changes
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      {/* Global Animated Background */}
      <GlobalAnimatedBackground />

      <Header />
      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
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

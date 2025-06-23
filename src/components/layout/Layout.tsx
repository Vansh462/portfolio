// React and third-party imports
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Header from './Header';
import Footer from './Footer';
import GlobalAnimatedBackground from './GlobalAnimatedBackground';
import KeyboardShortcutsDialog from '@/components/ui/KeyboardShortcutsDialog';


export default function Layout() {
  const location = useLocation();
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  
  // Handle route changes
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Set route changing state for animation
    setIsRouteChanging(true);
    const timer = setTimeout(() => setIsRouteChanging(false), 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      {/* Global Animated Background */}
      <GlobalAnimatedBackground />

      <Header />
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
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

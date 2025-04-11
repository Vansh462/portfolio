import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Modern page loader component that uses subtle animations
 * similar to those used by major tech companies
 */
const ModernPageLoader = () => {
  // Only show loader after a delay to avoid flashing for fast loads
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    // Only show the loader if loading takes more than 300ms
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm"
          style={{ 
            willChange: 'opacity',
            transform: 'translateZ(0)'
          }}
        >
          <div className="flex flex-col items-center">
            {/* Progress bar at the top of the screen */}
            <motion.div 
              className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
              initial={{ width: 0 }}
              animate={{ 
                width: '100%',
                transition: { duration: 2, ease: 'easeInOut' }
              }}
            />
            
            {/* Subtle loading indicator */}
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-primary-500 border-t-transparent"
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 1, 
                  ease: 'linear', 
                  repeat: Infinity 
                }
              }}
            />
            
            {/* Loading text */}
            <motion.p 
              className="mt-4 text-sm text-dark-300 dark:text-light-300"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.5 }
              }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernPageLoader;

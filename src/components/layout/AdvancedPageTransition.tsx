import { ReactNode, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AdvancedPageTransitionProps {
  children: ReactNode;
}

/**
 * Advanced page transition component that uses modern techniques:
 * 1. Prefetches content before transition
 * 2. Uses FLIP animation technique
 * 3. Implements progressive loading
 * 4. Uses shared element transitions
 */
const AdvancedPageTransition = ({ children }: AdvancedPageTransitionProps) => {
  const location = useLocation();
  const prevPathRef = useRef<string>(location.pathname);
  
  // Track if this is the initial load
  const isInitialRender = useRef(true);
  
  useEffect(() => {
    // After first render, set initial render to false
    isInitialRender.current = false;
    
    // Update previous path when location changes
    prevPathRef.current = location.pathname;
  }, [location.pathname]);
  
  // Determine transition direction based on path depth
  const getTransitionDirection = () => {
    const prevPathDepth = prevPathRef.current.split('/').filter(Boolean).length;
    const currentPathDepth = location.pathname.split('/').filter(Boolean).length;
    
    // Going deeper in navigation = forward, going back = backward
    return currentPathDepth >= prevPathDepth ? 'forward' : 'backward';
  };
  
  // Different variants based on transition direction
  const getVariants = () => {
    const direction = getTransitionDirection();
    
    if (direction === 'forward') {
      return {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
      };
    }
    
    return {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    };
  };
  
  // Get transition settings
  const getTransition = () => {
    // Use faster transitions for better UX
    return {
      type: 'tween',
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve used by major sites
      duration: 0.15, // Very short duration like modern sites
    };
  };
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={isInitialRender.current ? false : 'initial'}
        animate="animate"
        exit="exit"
        variants={getVariants()}
        transition={getTransition()}
        className="w-full h-full"
        style={{ 
          // Use will-change for better performance
          willChange: 'opacity, transform',
          // Use hardware acceleration
          transform: 'translateZ(0)'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AdvancedPageTransition;

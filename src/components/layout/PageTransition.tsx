import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Props interface
interface PageTransitionProps {
  children: ReactNode;
}

// Animation constants - defined outside component to prevent recreation on each render
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'easeInOut',
  duration: 0.1, // Ultra-fast transition for better performance
};

/**
 * Page transition component that provides smooth transitions between routes
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        // Hardware acceleration for smooth animations
        willChange: 'opacity, transform',
        transform: 'translateZ(0)',
        // Prevent layout shifts
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

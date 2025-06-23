import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 10, // Subtle horizontal movement instead of vertical
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: -10,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1], // Optimized cubic-bezier used by Google/Facebook
    duration: 0.15, // Much faster - industry standard for instant feel
  };

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

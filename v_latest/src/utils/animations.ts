// Animation variants for Framer Motion
// These are reusable animation configurations that can be applied to components

// Fade in animation
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up', delay: number = 0) => {
  let x = 0;
  let y = 0;
  
  if (direction === 'up') y = 40;
  if (direction === 'down') y = -40;
  if (direction === 'left') x = 40;
  if (direction === 'right') x = -40;
  
  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };
};

// Staggered container animation
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Scale animation
export const scaleIn = (delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };
};

// Slide in animation
export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', type: 'tween' | 'spring' = 'tween', delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

// Text animation (character by character)
export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Text container for letter animations
export const textContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: i * 0.1 },
  }),
};

// Letter animation for text
export const textLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

// Zoom in animation
export const zoomIn = (delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };
};

// Float animation (continuous)
export const float = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Pulse animation (continuous)
export const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

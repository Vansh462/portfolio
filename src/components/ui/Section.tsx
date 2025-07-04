import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
  background?: 'light' | 'dark' | 'primary' | 'gradient' | 'none';
  backgroundVariant?: 'default' | 'primary' | 'secondary' | 'gradient';
  backgroundIntensity?: 'low' | 'medium' | 'high';
  animatedBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  fullWidth = false,
  animate = true,
  background = 'none',
  backgroundVariant = 'default',
  backgroundIntensity = 'medium',
  animatedBackground = true,
}) => {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'light':
        return 'bg-light-100 dark:bg-dark-300';
      case 'dark':
        return 'bg-light-300 dark:bg-dark-200';
      case 'primary':
        return 'bg-primary-50 dark:bg-primary-900/20';
      case 'gradient':
        return 'bg-gradient-to-r from-primary-600/10 to-secondary-600/10 dark:from-primary-900/20 dark:to-secondary-900/20';
      default:
        return '';
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      }
    }
  };

  const containerClasses = fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8';

  if (animate) {
    return (
      <motion.section
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-200px' }}
        variants={sectionVariants}
        className={`section py-16 md:py-24 ${getBackgroundClasses()} ${className} relative overflow-hidden`}
      >
        {/* Animated background */}
        <SectionBackground 
          variant={backgroundVariant} 
          intensity={backgroundIntensity} 
          animated={animatedBackground} 
        />
        
        <div className={`${containerClasses} relative z-10`}>
          {children}
        </div>
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={`section py-16 md:py-24 ${getBackgroundClasses()} ${className} relative overflow-hidden`}
    >
      {/* Static background */}
      <SectionBackground 
        variant={backgroundVariant} 
        intensity={backgroundIntensity} 
        animated={animatedBackground} 
      />
      
      <div className={`${containerClasses} relative z-10`}>
        {children}
      </div>
    </section>
  );
};

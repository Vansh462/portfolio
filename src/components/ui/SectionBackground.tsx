import { motion } from 'framer-motion';
import { SECTION_PATTERNS } from '@/utils/assets';

interface SectionBackgroundProps {
  variant?: 'default' | 'primary' | 'secondary' | 'gradient';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

/**
 * Reusable animated background component for sections
 */
export default function SectionBackground({
  variant = 'default',
  intensity = 'medium',
  animated = true
}: SectionBackgroundProps) {
  // Opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-[0.02] dark:opacity-[0.01]';
      case 'medium': return 'opacity-[0.03] dark:opacity-[0.02]';
      case 'high': return 'opacity-[0.05] dark:opacity-[0.03]';
      default: return 'opacity-[0.03] dark:opacity-[0.02]';
    }
  };

  // Colors based on variant
  const getGradientColors = () => {
    switch (variant) {
      case 'primary': return {
        orb1: 'bg-primary-500/10 dark:bg-primary-500/5',
        orb2: 'bg-blue-500/10 dark:bg-blue-500/5',
        orb3: 'bg-indigo-500/8 dark:bg-indigo-500/4'
      };
      case 'secondary': return {
        orb1: 'bg-secondary-500/10 dark:bg-secondary-500/5',
        orb2: 'bg-purple-500/10 dark:bg-purple-500/5',
        orb3: 'bg-pink-500/8 dark:bg-pink-500/4'
      };
      case 'gradient': return {
        orb1: 'bg-primary-500/10 dark:bg-primary-500/5',
        orb2: 'bg-secondary-500/10 dark:bg-secondary-500/5',
        orb3: 'bg-blue-500/8 dark:bg-blue-500/4'
      };
      default: return {
        orb1: 'bg-blue-500/10 dark:bg-blue-500/5',
        orb2: 'bg-purple-500/10 dark:bg-purple-500/5',
        orb3: 'bg-green-500/8 dark:bg-green-500/4'
      };
    }
  };

  const colors = getGradientColors();

  return (
    <>
      {/* Background pattern */}
      <div className={`absolute inset-0 ${getOpacity()} pointer-events-none z-0`}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${SECTION_PATTERNS.plus})`,
            backgroundSize: '30px',
          }}
        ></div>
      </div>

      {/* Animated Gradient Orbs */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className={`absolute top-20 right-10 w-[25rem] h-[25rem] ${colors.orb1} rounded-full blur-[80px] pointer-events-none`}
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className={`absolute bottom-20 left-10 w-[30rem] h-[30rem] ${colors.orb2} rounded-full blur-[100px] pointer-events-none`}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] ${colors.orb3} rounded-full blur-[60px] pointer-events-none`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      )}
    </>
  );
}
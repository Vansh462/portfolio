import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  variant?: 'default' | 'glass' | 'outline' | 'flat';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  animate = true,
  variant = 'default',
  onClick,
}) => {
  const getCardClasses = () => {
    const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
    
    const variantClasses = {
      default: 'card bg-white dark:bg-dark-200 shadow-md hover:shadow-lg border border-light-500 dark:border-dark-100',
      glass: 'glass bg-white/80 dark:bg-dark-300/80 backdrop-blur-md border border-light-500/50 dark:border-dark-100/50 shadow-md hover:shadow-lg',
      outline: 'border-2 border-light-500 dark:border-dark-100 bg-transparent hover:border-primary-500 dark:hover:border-primary-500',
      flat: 'bg-light-300 dark:bg-dark-300 shadow-none',
    };
    
    const hoverClass = hover ? 'hover:-translate-y-1' : '';
    
    return `${baseClasses} ${variantClasses[variant]} ${hoverClass} ${className}`;
  };

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={hover ? { y: -5 } : {}}
        className={getCardClasses()}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={getCardClasses()} onClick={onClick}>
      {children}
    </div>
  );
};

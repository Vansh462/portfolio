import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trackDownload, trackEvent } from '@/utils/analytics';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  animate?: boolean;
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  external?: boolean;
}

const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth: boolean = false,
  className: string = ''
): string => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'bg-transparent hover:bg-light-300/50 dark:hover:bg-dark-200/50 text-dark-300 dark:text-light-300',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  animate = false,
  className = '',
  ...props
}) => {
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (animate) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={getButtonClasses(variant, size, fullWidth, className)}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      className={getButtonClasses(variant, size, fullWidth, className)}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  animate = false,
  className = '',
  ...props
}) => {
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // Track downloads and external links
  const handleExternalClick = () => {
    // Track resume downloads
    if (href.includes('resume.pdf')) {
      trackDownload('resume.pdf');
    } else {
      // Track other external links
      trackEvent('Navigation', 'External Link', href);
    }
  };

  if (external) {
    if (animate) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={getButtonClasses(variant, size, fullWidth, className)}
          onClick={handleExternalClick}
          {...props}
        >
          {buttonContent}
        </motion.a>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonClasses(variant, size, fullWidth, className)}
        onClick={handleExternalClick}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={href}
          className={getButtonClasses(variant, size, fullWidth, className)}
          {...props}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link
      to={href}
      className={getButtonClasses(variant, size, fullWidth, className)}
      {...props}
    >
      {buttonContent}
    </Link>
  );
};

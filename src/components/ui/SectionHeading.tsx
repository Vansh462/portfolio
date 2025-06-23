import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  highlight?: string;
  badge?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  highlight,
  badge,
  className = '',
}: SectionHeadingProps) {
  // Split the title to highlight a specific word if provided
  const renderTitle = () => {
    if (!highlight) return title;

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <div className="space-y-6">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-dark-400 dark:text-light-100 mb-6 relative inline-block"
        >
          {renderTitle()}
          <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`text-lg text-dark-300/80 dark:text-light-300/80 ${centered ? 'mx-auto' : ''} max-w-3xl`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

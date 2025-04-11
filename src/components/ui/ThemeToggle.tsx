import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-md flex items-center justify-center bg-light-300/80 dark:bg-dark-200/80 hover:bg-light-400 dark:hover:bg-dark-100 transition-colors"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 45 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="absolute"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-primary-600" />
        )}
      </motion.div>
    </motion.button>
  );
}

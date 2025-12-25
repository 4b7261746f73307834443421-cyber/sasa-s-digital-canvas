import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Skull } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themeIcons = {
  light: Sun,
  dark: Moon,
  dracula: Skull,
};

const themeLabels = {
  light: 'Light',
  dark: 'Dark',
  dracula: 'Dracula',
};

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const Icon = themeIcons[theme];

  return (
    <motion.button
      onClick={cycleTheme}
      className="relative p-2.5 rounded-xl glass hover:bg-secondary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Current theme: ${themeLabels[theme]}. Click to change.`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-5 h-5 text-foreground" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

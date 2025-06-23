import { motion } from 'framer-motion';
import { TECH_LOGOS } from '@/utils/assets';

interface ScatteredTechnologiesProps {
  technologies: string[];
}

export default function ScatteredTechnologies({ technologies }: ScatteredTechnologiesProps) {
  // Generate random positions for each technology
  const getRandomPosition = (index: number) => {
    // Create a deterministic but scattered pattern
    const row = Math.floor(index / 5);
    const col = index % 5;
    
    // Base position
    const baseX = col * 20; // 20% of container width per column
    const baseY = row * 120; // 120px per row
    
    // Add randomness
    const randomX = ((index * 13) % 10) - 5; // -5 to +5
    const randomY = ((index * 17) % 30) - 15; // -15 to +15
    
    return {
      left: `${baseX + randomX}%`,
      top: `${baseY + randomY}px`,
      // Stagger the animation delay
      delay: index * 0.1
    };
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden my-12">
      {technologies.map((tech, index) => {
        const position = getRandomPosition(index);
        
        return (
          <motion.div
            key={tech}
            className="absolute"
            style={{ 
              left: position.left,
              top: position.top
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: position.delay,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={TECH_LOGOS[tech]}
                  alt={tech}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-center mt-2 font-medium text-gray-700 dark:text-gray-300">
                {tech}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
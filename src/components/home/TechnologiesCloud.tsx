import { motion } from 'framer-motion';
import { TECH_LOGOS } from '@/utils/assets';

interface TechnologiesCloudProps {
  technologies: string[];
}

export default function TechnologiesCloud({ technologies }: TechnologiesCloudProps) {
  // Generate positions for each technology in a scattered pattern
  const getPosition = (index: number) => {
    // Create a deterministic but scattered pattern
    const positions = [
      { left: '10%', top: '10%' },
      { left: '30%', top: '20%' },
      { left: '50%', top: '5%' },
      { left: '70%', top: '15%' },
      { left: '90%', top: '25%' },
      { left: '15%', top: '40%' },
      { left: '35%', top: '50%' },
      { left: '55%', top: '35%' },
      { left: '75%', top: '45%' },
      { left: '5%', top: '65%' },
      { left: '25%', top: '75%' },
      { left: '45%', top: '60%' },
      { left: '65%', top: '70%' },
      { left: '85%', top: '80%' },
      { left: '20%', top: '90%' },
      { left: '40%', top: '85%' },
      { left: '60%', top: '95%' },
      { left: '80%', top: '75%' },
    ];
    
    // Use modulo to cycle through positions for technologies beyond the predefined positions
    const position = positions[index % positions.length];
    
    // Add slight randomness to prevent exact overlaps when cycling
    const randomX = ((index * 7) % 10) - 5; // -5 to +5
    const randomY = ((index * 11) % 10) - 5; // -5 to +5
    
    const left = `calc(${position.left} + ${randomX}%)`;
    const top = `calc(${position.top} + ${randomY}%)`;
    
    return { left, top };
  };

  return (
    <div className="relative w-full h-[400px] mt-8">
      {technologies.slice(0, 18).map((tech, index) => {
        const position = getPosition(index);
        
        return (
          <motion.div
            key={tech}
            className="absolute"
            style={{ 
              left: position.left,
              top: position.top,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700">
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
import { motion } from 'framer-motion';
import { BracketsCurly, Lightning, Database as PhDatabase, Code as PhCode } from '@phosphor-icons/react';
import { HERO_PATTERNS, TECH_LOGOS } from '@/utils/assets';

export default function GlobalAnimatedBackground() {
  // Tech skill icons to float around
  const techIcons = [
    'python', 'tensorflow', 'docker', 'aws', 'vscode', 'git',
    'django', 'opencv', 'scikit', 'linux', 'html5', 'css3'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 min-h-[200vh] overflow-visible">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_PATTERNS.topography})`,
            backgroundSize: '500px',
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-primary-500/8 dark:bg-primary-500/4 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[35rem] h-[35rem] bg-secondary-500/8 dark:bg-secondary-500/4 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-blue-500/6 dark:bg-blue-500/3 rounded-full blur-[80px] animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-10 right-1/3 w-[20rem] h-[20rem] bg-purple-500/6 dark:bg-purple-500/3 rounded-full blur-[70px] animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-green-500/6 dark:bg-green-500/3 rounded-full blur-[90px] animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[15%] opacity-15 dark:opacity-8"
        >
          <PhCode weight="duotone" size={80} className="text-primary-500" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[25%] opacity-15 dark:opacity-8"
        >
          <PhDatabase weight="duotone" size={60} className="text-secondary-500" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut",
          }}
          className="absolute top-[25%] right-[15%] opacity-15 dark:opacity-8"
        >
          <BracketsCurly weight="duotone" size={70} className="text-primary-600" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
          className="absolute bottom-[30%] right-[20%] opacity-15 dark:opacity-8"
        >
          <Lightning weight="duotone" size={65} className="text-secondary-600" />
        </motion.div>

        {/* Additional floating icons for more coverage */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 11,
            ease: "easeInOut",
          }}
          className="absolute top-[60%] left-[10%] opacity-12 dark:opacity-6"
        >
          <PhCode weight="duotone" size={50} className="text-blue-500" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 13,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] right-[40%] opacity-12 dark:opacity-6"
        >
          <Lightning weight="duotone" size={45} className="text-purple-500" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -16, 0],
            x: [0, 14, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute bottom-[50%] right-[35%] opacity-12 dark:opacity-6"
        >
          <PhDatabase weight="duotone" size={55} className="text-green-500" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 14, 0],
            x: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[40%] opacity-12 dark:opacity-6"
        >
          <BracketsCurly weight="duotone" size={40} className="text-orange-500" />
        </motion.div>
      </div>

      {/* Floating Tech Skill Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0.5,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
              ],
              opacity: [0, 0.4, 0.6, 0.4, 0],
              scale: [0.5, 1, 0.8, 1, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: index * 3
            }}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-2 md:p-3 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <img
                src={TECH_LOGOS[tech]}
                alt={tech}
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

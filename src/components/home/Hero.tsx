import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight, Code, Brain, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, LinkButton } from '@/components/ui/Button';
import portfolioData from '@/data/portfolio';
import { HERO_PATTERNS, TECH_LOGOS, PROFILE_IMAGE } from '@/utils/assets';
import { staggerContainer, fadeIn, float, pulse, textContainer, textLetter } from '@/utils/animations';
import { BracketsCurly, Lightning, Database as PhDatabase, Code as PhCode } from '@phosphor-icons/react';

export default function Hero() {
  const { personal } = portfolioData;

  // Animated text for the title
  const AnimatedText = ({ text }: { text: string }) => (
    <motion.span variants={textContainer} initial="hidden" animate="visible" className="inline-block">
      {Array.from(text).map((letter, index) => (
        <motion.span key={index} variants={textLetter} className="inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] z-0">
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
        <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[35rem] h-[35rem] bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-[15%] left-[15%] opacity-20 dark:opacity-10"
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
          className="absolute bottom-[20%] left-[25%] opacity-20 dark:opacity-10"
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
          className="absolute top-[25%] right-[15%] opacity-20 dark:opacity-10"
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
          className="absolute bottom-[30%] right-[20%] opacity-20 dark:opacity-10"
        >
          <Lightning weight="duotone" size={65} className="text-secondary-600" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn('up', 0)} className="mb-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                AI Engineer & ML Specialist
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-400 dark:text-light-100 mb-6"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                  <AnimatedText text="Vansh Oberoi" />
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-70"></span>
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeIn('up', 0.2)}
              className="text-xl md:text-2xl font-medium text-dark-300/80 dark:text-light-300/80 mb-6"
            >
              Building intelligent solutions with AI & Machine Learning
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-lg text-dark-300/70 dark:text-light-300/70 mb-8 max-w-lg"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.4)}
              className="flex flex-wrap gap-4"
            >
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                animate
                className="shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                Get in Touch
              </LinkButton>

              <LinkButton
                href="/resume.pdf"
                variant="outline"
                size="lg"
                icon={<Download size={18} />}
                iconPosition="right"
                animate
                className="backdrop-blur-sm bg-white/30 dark:bg-dark-300/30 hover:bg-white/50 dark:hover:bg-dark-300/50 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </LinkButton>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="mt-12 flex flex-wrap gap-3"
            >
              <span className="text-sm text-dark-300/60 dark:text-light-300/60 mr-2">Tech Stack:</span>
              {['python', 'tensorflow', 'scikit', 'aws', 'docker', 'vscode'].map((tech) => (
                <motion.img
                  key={tech}
                  src={TECH_LOGOS[tech as keyof typeof TECH_LOGOS]}
                  alt={tech}
                  className={`w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 ${tech === 'aws' ? 'p-0.5' : ''}`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn('left', 0.2)}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary-500/30 dark:border-primary-500/20 rounded-full animate-spin-slow"></div>

              {/* Profile image */}
              <img
                src={personal.image}
                alt={personal.name}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-dark-300 shadow-xl z-10"
              />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-200 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-20"
                variants={fadeIn('down', 0.6)}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <Code size={16} className="text-primary-500" />
                <span className="text-primary-600 dark:text-primary-400 font-medium">Python</span>
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <span className="text-primary-600 dark:text-primary-400 font-medium">ML</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-200 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-20"
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                animate="visible"
                whileHover={{ y: 5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <Brain size={16} className="text-secondary-500" />
                <span className="text-secondary-600 dark:text-secondary-400 font-medium">AI</span>
                <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                <span className="text-secondary-600 dark:text-secondary-400 font-medium">Web</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white dark:bg-dark-200 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-20"
                variants={fadeIn('left', 1)}
                initial="hidden"
                animate="visible"
                whileHover={{ x: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <Database size={16} className="text-primary-500" />
                <span className="text-primary-600 dark:text-primary-400 font-medium">Data</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn('up', 1.2)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-dark-300/60 dark:text-light-300/60 mb-2 text-sm">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-primary-500 dark:text-primary-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

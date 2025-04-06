import { motion } from 'framer-motion';
import { Code, Brain, Database, Globe, Cpu, LineChart, Layers, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import portfolioData from '@/data/portfolio';
import { SECTION_PATTERNS, TECH_LOGOS } from '@/utils/assets';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { CodeSimple, ChartLine, DeviceMobile, Lightbulb } from '@phosphor-icons/react';

export default function SkillsSection() {
  const { skills } = portfolioData;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Get category icon and color
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'Programming':
        return {
          icon: <CodeSimple weight="duotone" className="h-8 w-8 text-blue-500" />,
          color: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-100 dark:bg-blue-900/20',
          textColor: 'text-blue-700 dark:text-blue-300',
        };
      case 'AI':
        return {
          icon: <Lightbulb weight="duotone" className="h-8 w-8 text-purple-500" />,
          color: 'from-purple-500 to-purple-600',
          bgColor: 'bg-purple-100 dark:bg-purple-900/20',
          textColor: 'text-purple-700 dark:text-purple-300',
        };
      case 'Data':
        return {
          icon: <ChartLine weight="duotone" className="h-8 w-8 text-green-500" />,
          color: 'from-green-500 to-green-600',
          bgColor: 'bg-green-100 dark:bg-green-900/20',
          textColor: 'text-green-700 dark:text-green-300',
        };
      case 'Web':
        return {
          icon: <DeviceMobile weight="duotone" className="h-8 w-8 text-orange-500" />,
          color: 'from-orange-500 to-orange-600',
          bgColor: 'bg-orange-100 dark:bg-orange-900/20',
          textColor: 'text-orange-700 dark:text-orange-300',
        };
      default:
        return {
          icon: <CodeSimple weight="duotone" className="h-8 w-8 text-primary-500" />,
          color: 'from-primary-500 to-primary-600',
          bgColor: 'bg-primary-100 dark:bg-primary-900/20',
          textColor: 'text-primary-700 dark:text-primary-300',
        };
    }
  };

  return (
    <Section id="skills" background="light">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${SECTION_PATTERNS.plus})`,
            backgroundSize: '30px',
          }}
        ></div>
      </div>

      <SectionHeading
        title="My Skills"
        subtitle="I've worked with a variety of technologies and frameworks to build intelligent solutions."
        centered
        badge="Expertise"
        highlight="Skills"
      />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
          const { icon, color, bgColor, textColor } = getCategoryInfo(category);

          return (
            <motion.div
              key={category}
              variants={fadeIn('up', categoryIndex * 0.1)}
              className="relative group"
            >
              <Card
                variant="glass"
                className="p-6 border-t-4 border-t-transparent group-hover:border-t-primary-500 transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 rounded-lg ${bgColor} flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-400 dark:text-light-100">
                      {category}
                    </h3>
                    <p className="text-sm text-dark-300/70 dark:text-light-300/70">
                      {categorySkills.length} skills
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-dark-300 dark:text-light-300 font-medium">
                            {skill.name}
                          </span>
                          <Badge
                            variant="primary"
                            size="sm"
                            pill
                            className="ml-2"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>
                      <div className="h-2.5 bg-light-300 dark:bg-dark-200 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
                        >
                          {/* Animated glow effect */}
                          <span className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 dark:to-white/10 animate-shimmer"></span>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Years Experience', value: '2+', icon: <Layers className="h-6 w-6" /> },
          { label: 'Projects Completed', value: '10+', icon: <Rocket className="h-6 w-6" /> },
          { label: 'Technologies', value: '20+', icon: <Cpu className="h-6 w-6" /> },
          { label: 'Leadership Roles', value: '2+', icon: <LineChart className="h-6 w-6" /> },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeIn('up', 0.3 + (index * 0.1))}
            className="relative group"
          >
            <Card
              className="p-6 text-center border border-light-500/50 dark:border-dark-100/50 group-hover:border-primary-500/50 transition-colors duration-300"
              hover={false}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mt-4 mb-2">
                {stat.value}
              </h4>
              <p className="text-dark-300/70 dark:text-light-300/70 text-sm">
                {stat.label}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech stack */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h3 className="text-xl font-bold text-dark-400 dark:text-light-100 mb-8">Technical Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {['python', 'tensorflow', 'scikit', 'aws', 'vscode', 'django', 'docker', 'git', 'linux', 'opencv'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-dark-200 rounded-xl shadow-md p-2 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                <img
                  src={TECH_LOGOS[tech]}
                  alt={tech}
                  className={`w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${tech === 'aws' ? 'p-1' : ''}`}
                />
              </div>
              <p className="mt-2 text-xs text-dark-300/70 dark:text-light-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-dark-400 dark:text-light-100 mt-12 mb-8">Additional Technologies</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {['c', 'cpp', 'html5', 'css3', 'selenium', 'bootstrap'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-dark-200 rounded-xl shadow-md p-2 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                <img
                  src={TECH_LOGOS[tech]}
                  alt={tech}
                  className={`w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${tech === 'aws' ? 'p-1' : ''}`}
                />
              </div>
              <p className="mt-2 text-xs text-dark-300/70 dark:text-light-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

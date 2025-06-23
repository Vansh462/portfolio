import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code, Database, Cloud, Wrench, Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import portfolioData from '@/data/portfolio';
import { SECTION_PATTERNS, TECH_LOGOS } from '@/utils/assets';
import { fadeIn, staggerContainer } from '@/utils/animations';

// Map portfolio skills to categories
const getCategoryInfo = (category: string) => {
  switch (category) {
    case 'AI-ML':
      return {
        displayName: 'AI/ML',
        icon: <Brain className="w-5 h-5" />,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        borderColor: 'border-purple-200 dark:border-purple-800',
      };
    case 'Programming':
      return {
        displayName: 'Programming',
        icon: <Code className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        borderColor: 'border-blue-200 dark:border-blue-800',
      };
    case 'Data':
      return {
        displayName: 'Data',
        icon: <Database className="w-5 h-5" />,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        borderColor: 'border-green-200 dark:border-green-800',
      };
    case 'Cloud':
      return {
        displayName: 'Cloud',
        icon: <Cloud className="w-5 h-5" />,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        borderColor: 'border-orange-200 dark:border-orange-800',
      };
    case 'Frameworks':
    case 'DevOps':
    case 'Tools':
    case 'Web':
      return {
        displayName: 'Tools & Frameworks',
        icon: <Wrench className="w-5 h-5" />,
        color: 'from-indigo-500 to-purple-500',
        bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
        borderColor: 'border-indigo-200 dark:border-indigo-800',
      };
    default:
      return {
        displayName: 'Other',
        icon: <Wrench className="w-5 h-5" />,
        color: 'from-gray-500 to-gray-600',
        bgColor: 'bg-gray-50 dark:bg-gray-900/20',
        borderColor: 'border-gray-200 dark:border-gray-800',
      };
  }
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { skills, technologies } = portfolioData;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const categoryInfo = getCategoryInfo(skill.category || 'Other');
    const categoryName = categoryInfo.displayName;

    if (!acc[categoryName]) {
      acc[categoryName] = {
        skills: [],
        info: categoryInfo
      };
    }
    acc[categoryName].skills.push(skill);
    return acc;
  }, {} as Record<string, { skills: typeof skills; info: ReturnType<typeof getCategoryInfo> }>);



  // Get displayed skills
  const getDisplayedSkills = () => {
    if (selectedCategory && skillsByCategory[selectedCategory]) {
      return skillsByCategory[selectedCategory].skills;
    }
    return skills;
  };

  // Get all categories
  const getCategories = () => {
    return Object.keys(skillsByCategory);
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

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-[25rem] h-[25rem] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-green-500/8 dark:bg-green-500/4 rounded-full blur-[60px] animate-pulse-slow animation-delay-2000"></div>
      </div>



      <SectionHeading
        title="Technical Expertise"
        subtitle="Modern technologies and frameworks I use to build intelligent solutions."
        centered
        badge="Skills"
        highlight="Expertise"
      />

      {/* Compact Skills Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => {
              console.log('All Skills clicked');
              setSelectedCategory(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              !selectedCategory
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Zap className="w-4 h-4 inline mr-2" />
            All Skills
          </button>
          {getCategories().map((category) => {
            const info = skillsByCategory[category].info;
            return (
              <button
                key={category}
                onClick={() => {
                  console.log('Tab clicked:', category);
                  setSelectedCategory(category);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center hover:scale-105 cursor-pointer ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${info.color} text-white shadow-lg`
                    : `${info.bgColor} ${info.borderColor} border text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600`
                }`}
              >
                {info.icon}
                <span className="ml-2">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {selectedCategory && skillsByCategory[selectedCategory] && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${skillsByCategory[selectedCategory].info.bgColor} mr-4`}>
                    {skillsByCategory[selectedCategory].info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCategory}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skillsByCategory[selectedCategory].skills.length} skills
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Skills Grid with Progress Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getDisplayedSkills().map((skill, index) => {
                const categoryInfo = getCategoryInfo(skill.category || 'Other');
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                          className={`h-full rounded-full bg-gradient-to-r ${categoryInfo.color} relative`}
                        >
                          {/* Animated glow effect */}
                          <span className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white/30 dark:to-white/10 animate-pulse"></span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Stats */}
            {!selectedCategory && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'AI/ML Projects', value: '6+', color: 'text-purple-600', clickable: true },
                    { label: 'Years Experience', value: '2+', color: 'text-blue-600', clickable: false },
                    { label: 'Technologies', value: '35+', color: 'text-green-600', clickable: false },
                    { label: 'Frameworks', value: '15+', color: 'text-orange-600', clickable: false },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      {stat.clickable ? (
                        <Link
                          to="/projects"
                          className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer underline-offset-2 hover:underline"
                        >
                          {stat.label}
                        </Link>
                      ) : (
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Constantly learning and adapting to new technologies
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

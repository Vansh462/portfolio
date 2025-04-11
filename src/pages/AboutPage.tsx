import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Suspense, lazy } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import portfolioData from '@/data/portfolio';

// Lazy load the SkillsNetwork component
const SkillsNetwork = lazy(() => import('@/components/skills/SkillsNetwork'));

// Component loader with skeleton
const ComponentLoader = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-10 animate-pulse"></div>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
    </div>
  </div>
);

export default function AboutPage() {
  const { personal, education, leadership, technologies } = portfolioData;

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="About Me" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate AI Engineer with expertise in Python, Machine Learning, and Web Technologies.
                I enjoy solving complex problems and building innovative solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                My journey in technology began during my undergraduate studies, where I developed a strong
                foundation in computer science and engineering principles. Since then, I've been continuously
                learning and expanding my skills in artificial intelligence, machine learning, and web development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge with others through mentoring and technical workshops.
              </p>

              <LinkButton
                href="/resume.pdf"
                variant="primary"
                size="md"
                icon={<FileText size={18} />}
                iconPosition="left"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                View My Resume
              </LinkButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur-xl opacity-20 animate-pulse"></div>
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-full max-w-md rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Education" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.location}
                </p>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Leadership & Extracurricular" />
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Network Visualization */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Suspense fallback={<ComponentLoader />}>
            <SkillsNetwork />
          </Suspense>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Technologies I Use"
            subtitle="I'm proficient with a wide range of technologies and tools."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

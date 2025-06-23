import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import portfolioData from '@/data/portfolio';
import CertificationsGallery from '@/components/certifications/CertificationsGallery';

export default function AboutPage() {
  const { personal, education, leadership, technologies } = portfolioData;

  return (
    <div>
      {/* Hero Section */}
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
                {edu.gpa && (
                  <div className="flex items-center mt-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}
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
          <SectionHeading title="Professional & Volunteer Experience" />
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Technologies I Use"
            subtitle="I'm proficient with a wide range of technologies and tools."
            centered
          />

          {/* Technology Clusters with Rainbow Flows */}
          <div className="relative max-w-6xl mx-auto mt-16">
            {/* Background Rainbow Flows */}
            <div className="absolute inset-0 pointer-events-none">
              {/* AI/ML Cluster Flow */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <linearGradient id="rainbow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.3" />
                    <stop offset="25%" stopColor="#4ecdc4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#45b7d1" stopOpacity="0.3" />
                    <stop offset="75%" stopColor="#96ceb4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#feca57" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="rainbow2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a8e6cf" stopOpacity="0.3" />
                    <stop offset="33%" stopColor="#dda0dd" stopOpacity="0.3" />
                    <stop offset="66%" stopColor="#98d8c8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f7dc6f" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="rainbow3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff9ff3" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#54a0ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#5f27cd" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* AI/ML Cloud */}
                <path d="M50 100 Q200 50 350 100 Q400 120 350 150 Q200 180 50 150 Q20 120 50 100"
                      fill="url(#rainbow1)" stroke="url(#rainbow1)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Backend Cloud */}
                <path d="M450 200 Q600 150 750 200 Q780 220 750 250 Q600 280 450 250 Q420 220 450 200"
                      fill="url(#rainbow2)" stroke="url(#rainbow2)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Frontend Cloud */}
                <path d="M100 350 Q250 300 400 350 Q430 370 400 400 Q250 430 100 400 Q70 370 100 350"
                      fill="url(#rainbow3)" stroke="url(#rainbow3)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Cloud/DevOps Cloud */}
                <path d="M500 450 Q650 400 800 450 Q830 470 800 500 Q650 530 500 500 Q470 470 500 450"
                      fill="url(#rainbow1)" stroke="url(#rainbow1)" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Technology Clusters */}
            <div className="relative z-10 space-y-16">

              {/* AI/ML Cluster */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  🧠 AI & Machine Learning
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {['Python', 'TensorFlow', 'OpenAI', 'Gemini', 'RAG Pipeline', 'LangChain'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Cluster */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  ⚙️ Backend & APIs
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {['Django', 'REST APIs', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Frontend Cluster */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  🎨 Frontend & UI
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cloud & DevOps Cluster */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  ☁️ Cloud & DevOps
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {['AWS', 'Docker', 'Git', 'GitHub', 'Vercel', 'Linux'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-700 dark:text-cyan-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Others */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  🛠️ Tools & Platforms
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {['VS Code', 'Jupyter', 'Postman', 'Figma', 'Streamlit', 'Kaggle'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Certifications Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <CertificationsGallery />
        </div>
      </section>
    </div>
  );
}



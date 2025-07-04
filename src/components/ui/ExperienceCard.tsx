import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.15) }}
      className="relative pl-8 pb-12 last:pb-0 last:mb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
        <Briefcase size={14} className="text-white" />
      </div>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.company}
            </h3>
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {experience.title}
            </h4>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:ml-4">
            {experience.startDate} - {experience.endDate}
          </span>
        </div>

        {experience.location && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {experience.location}
          </p>
        )}

        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

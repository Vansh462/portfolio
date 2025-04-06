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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
        <Briefcase size={14} className="text-white" />
      </div>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.title} at {experience.company}
          </h3>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
            {experience.startDate} - {experience.endDate}
          </span>
        </div>

        {experience.location && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {experience.location}
          </p>
        )}

        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
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

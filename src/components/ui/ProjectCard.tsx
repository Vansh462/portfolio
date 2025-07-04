import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import { Project } from '@/types';
import { trackEvent } from '@/utils/analytics';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.15) }}
      className="card overflow-hidden group"
    >
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View GitHub repository"
              onClick={() => trackEvent('Project', 'GitHub Click', project.title)}
            >
              <Github size={16} className="mr-2" />
              Code
            </a>
          )}
          {project.kaggle && (
            <a
              href={project.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="View Kaggle notebook"
              onClick={() => trackEvent('Project', 'Kaggle Click', project.title)}
            >
              <BookOpen size={16} className="mr-2" />
              Kaggle
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="View live project"
              onClick={() => trackEvent('Project', 'Live Demo Click', project.title)}
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

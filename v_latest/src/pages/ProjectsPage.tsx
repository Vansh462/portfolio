import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import portfolioData from '@/data/portfolio';

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  // Get unique technology categories
  const allTechnologies = projects.flatMap((project) =>
    project.technologies.map((tech) => tech.name)
  );
  const uniqueTechnologies = ['all', ...new Set(allTechnologies)];

  // Filter projects based on selected technology
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech.name === filter)
        );

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Projects"
            subtitle="Explore the projects I've worked on."
          />

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {uniqueTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tech
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tech === 'all' ? 'All' : tech}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found with the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

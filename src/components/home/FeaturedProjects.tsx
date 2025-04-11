import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Code, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button, LinkButton } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import portfolioData from '@/data/portfolio';
import { PROJECT_IMAGES, SECTION_PATTERNS } from '@/utils/assets';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { ArrowSquareOut, GithubLogo, Code as PhCode } from '@phosphor-icons/react';

export default function FeaturedProjects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((project) => project.featured);

  // Function to get project image
  const getProjectImage = (project: typeof projects[0]) => {
    if (project.image) return project.image;

    // Use a default image based on project title
    if (project.title.toLowerCase().includes('house') || project.title.toLowerCase().includes('price')) {
      return PROJECT_IMAGES.housePrice;
    } else if (project.title.toLowerCase().includes('scraping') || project.title.toLowerCase().includes('web')) {
      return PROJECT_IMAGES.webScraping;
    } else if (project.title.toLowerCase().includes('ai')) {
      return PROJECT_IMAGES.aiProject;
    } else {
      return PROJECT_IMAGES.dataAnalysis;
    }
  };

  // Function to get project icon based on technologies
  const getProjectIcon = (project: typeof projects[0]) => {
    const techs = project.technologies.map(t => t.name.toLowerCase());

    if (techs.some(t => t.includes('python') || t.includes('ml') || t.includes('ai'))) {
      return <PhCode weight="duotone" className="text-blue-500" size={24} />;
    } else if (techs.some(t => t.includes('data') || t.includes('sql'))) {
      return <Database className="text-green-500" size={24} />;
    } else {
      return <Cpu className="text-purple-500" size={24} />;
    }
  };

  return (
    <Section id="projects">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${SECTION_PATTERNS.diagonal})`,
            backgroundSize: '30px',
          }}
        ></div>
      </div>

      <SectionHeading
        title="Featured Projects"
        subtitle="Check out some of my recent work and personal projects."
        centered
        badge="Portfolio"
        highlight="Projects"
      />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn('up', index * 0.1)}
            className="group h-full"
          >
            <Card
              className="overflow-hidden flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-all duration-300"
              variant="default"
              hover={false}
            >
              <div className="relative h-56 overflow-hidden">
                {/* Project image with overlay */}
                <img
                  src={getProjectImage(project)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Project icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-200/90 shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  {getProjectIcon(project)}
                </div>

                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="primary" size="sm" pill>
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" size="sm" pill>
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-dark-300/80 dark:text-light-300/80 mb-6 flex-grow">
                  {project.description.length > 150
                    ? `${project.description.substring(0, 150)}...`
                    : project.description}
                </p>

                <div className="flex space-x-3 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<GithubLogo weight="duotone" size={18} />}
                      iconPosition="left"
                      className="hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      View Code
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ArrowSquareOut weight="bold" size={18} />}
                      iconPosition="left"
                      className="shadow-md hover:shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20 transition-all duration-300"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <LinkButton
          href="/projects"
          variant="secondary"
          size="lg"
          icon={<ArrowRight size={18} />}
          iconPosition="right"
          animate
          className="shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/30 transition-all duration-300"
        >
          View All Projects
        </LinkButton>
      </motion.div>
    </Section>
  );
}

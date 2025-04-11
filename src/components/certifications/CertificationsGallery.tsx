import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Define certification type
interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  skills: string[];
  description: string;
}

// Sample certifications data - replace with your actual certifications when you have them
// These are just examples to demonstrate the gallery functionality
const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Python Programming Fundamentals',
    issuer: 'Coursera',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: 'https://www.coursera.org',
    skills: ['Python', 'Programming', 'Problem Solving'],
    description: 'Example certificate: Fundamentals of Python programming including data structures, algorithms, and object-oriented programming concepts.'
  },
  {
    id: 'cert-2',
    title: 'Web Development with HTML/CSS',
    issuer: 'freeCodeCamp',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    link: 'https://www.freecodecamp.org/',
    skills: ['HTML', 'CSS', 'Web Design'],
    description: 'Example certificate: Responsive web design principles and implementation using HTML5 and CSS3.'
  },
  {
    id: 'cert-3',
    title: 'Introduction to Machine Learning',
    issuer: 'Kaggle',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    link: 'https://www.kaggle.com/learn',
    skills: ['Machine Learning', 'Python', 'Data Analysis'],
    description: 'Example certificate: Fundamentals of machine learning algorithms and their implementation using Python libraries.'
  },
  {
    id: 'cert-4',
    title: 'Git and GitHub Basics',
    issuer: 'LinkedIn Learning',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: 'https://www.linkedin.com/learning',
    skills: ['Git', 'GitHub', 'Version Control'],
    description: 'Example certificate: Version control fundamentals using Git and collaboration through GitHub.'
  },
];

const CertificationsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCertificate = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevCertificate = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentCert = certifications[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <SectionHeading
        title="Certifications Gallery"
        subtitle="Example of how your future certifications could be displayed"
        description="This gallery demonstrates how your certifications and achievements can be showcased in an interactive format. You can replace these examples with your actual certifications as you earn them."
        centered
      />

      <div className="mt-8 relative">
        <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
          <button
            onClick={prevCertificate}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
          <button
            onClick={nextCertificate}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentCert.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto relative">
                    <img
                      src={currentCert.image}
                      alt={currentCert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">{currentCert.title}</h3>
                        <p className="text-white/80 flex items-center mt-2">
                          <Award className="h-4 w-4 mr-2" />
                          {currentCert.issuer}
                        </p>
                        <p className="text-white/80 flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {currentCert.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:w-1/2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentCert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {currentCert.description}
                    </p>

                    <a
                      href={currentCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6">
          {certifications.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex
                  ? 'bg-primary-500'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsGallery;

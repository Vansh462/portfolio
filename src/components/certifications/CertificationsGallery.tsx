import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Eye, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

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
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://www.coursera.org',
    skills: ['Python', 'Programming', 'Problem Solving'],
    description: 'Example certificate: Fundamentals of Python programming including data structures, algorithms, and object-oriented programming concepts.'
  },
  {
    id: 'cert-2',
    title: 'Web Development with HTML/CSS',
    issuer: 'freeCodeCamp',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://www.freecodecamp.org/',
    skills: ['HTML', 'CSS', 'Web Design'],
    description: 'Example certificate: Responsive web design principles and implementation using HTML5 and CSS3.'
  },
  {
    id: 'cert-3',
    title: 'Introduction to Machine Learning',
    issuer: 'Kaggle',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://www.kaggle.com/learn',
    skills: ['Machine Learning', 'Python', 'Data Analysis'],
    description: 'Example certificate: Fundamentals of machine learning algorithms and their implementation using Python libraries.'
  },
  {
    id: 'cert-4',
    title: 'Git and GitHub Basics',
    issuer: 'LinkedIn Learning',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://www.linkedin.com/learning',
    skills: ['Git', 'GitHub', 'Version Control'],
    description: 'Example certificate: Version control fundamentals using Git and collaboration through GitHub.'
  },
  {
    id: 'cert-5',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://aws.amazon.com/certification/',
    skills: ['AWS', 'Cloud Computing', 'Infrastructure'],
    description: 'Example certificate: Cloud computing fundamentals and AWS services overview for cloud practitioners.'
  },
  {
    id: 'cert-6',
    title: 'React Development',
    issuer: 'Meta',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    skills: ['React', 'JavaScript', 'Frontend'],
    description: 'Example certificate: Modern React development including hooks, state management, and component architecture.'
  },
];

const CertificationsGallery = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full">
      <SectionHeading
        title="Certifications & Achievements"
        subtitle="Professional certifications and learning milestones"
        centered
      />

      <motion.div
        className="mt-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -5 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Details</p>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{cert.date}</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium">
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-primary-500 mr-3" />
                <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                  {selectedCert.issuer}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedCert.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedCert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Completion Date</span>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">{selectedCert.date}</p>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">Issuing Organization</span>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedCert.issuer}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedCert.link}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Certificate
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CertificationsGallery;

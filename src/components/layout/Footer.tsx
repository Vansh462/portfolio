import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Facebook, Instagram, Mail, Heart, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    facebook: <Facebook size={20} />,
    instagram: <Instagram size={20} />,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8 relative">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-98%]">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-light-200 dark:fill-dark-300"></path>
        </svg>
      </div>

      {/* Scroll to top button */}
      <div className="absolute top-0 right-8 transform -translate-y-1/2">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl mr-3">V</div>
              <h3 className="text-xl font-bold text-dark-400 dark:text-light-100">
                Vansh Oberoi
              </h3>
            </div>
            <p className="text-dark-500 dark:text-light-200 mb-6">
              {personal.summary}
            </p>
            <div className="flex space-x-3">
              {personal.contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-light-300 dark:bg-dark-200 flex items-center justify-center text-dark-300 dark:text-light-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.platform}
                >
                  {socialIcons[social.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-400 dark:text-light-100 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-dark-300/80 dark:text-light-300/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-dark-300/80 dark:text-light-300/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-dark-300/80 dark:text-light-300/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-dark-300/80 dark:text-light-300/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-dark-300/80 dark:text-light-300/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-400 dark:text-light-100 mb-6 relative inline-block">
              Technologies
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.technologies.slice(0, 8).map((tech, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium bg-light-300 dark:bg-dark-200 text-dark-600 dark:text-light-200 rounded-full">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark-400 dark:text-light-100 mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm text-dark-300/60 dark:text-light-300/60 mb-1">Email</p>
                  <a
                    href={`mailto:${personal.contact.email}`}
                    className="text-dark-300 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personal.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm text-dark-300/60 dark:text-light-300/60 mb-1">Phone</p>
                  <a
                    href={`tel:${personal.contact.phone}`}
                    className="text-dark-300 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personal.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm text-dark-300/60 dark:text-light-300/60 mb-1">Location</p>
                  <p className="text-dark-300 dark:text-light-300">
                    {personal.contact.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-500/30 dark:border-dark-100/30 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-dark-600 dark:text-light-200 text-sm mb-4 md:mb-0">
              © {currentYear} Vansh Oberoi. All rights reserved.
            </p>
            <div className="flex items-center">
              <p className="text-dark-600 dark:text-light-200 text-sm flex items-center">
                Made with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> using
                <span className="ml-1 text-primary-600 dark:text-primary-400 font-medium">React</span> &
                <span className="ml-1 text-primary-600 dark:text-primary-400 font-medium">Vite</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

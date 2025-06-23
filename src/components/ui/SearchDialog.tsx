import { useState, useEffect, useRef, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Search, X, FileText, User, Briefcase, Code, Mail, Brain, Database, Wrench, GraduationCap, Award } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import portfolioData from '@/data/portfolio';

// Define search result types
type SearchResultType = 'page' | 'section' | 'project';

interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  keywords?: string[];
}

// Generate comprehensive search data from portfolio
const generateSearchData = (): SearchResult[] => {
  const searchData: SearchResult[] = [
    // Pages
    {
      id: 'home',
      type: 'page',
      title: 'Home',
      description: 'Main page with introduction and overview',
      url: '/',
      icon: <FileText size={18} />,
      keywords: ['home', 'main', 'landing', 'intro', 'overview', 'ai developer', 'software engineer']
    },
    {
      id: 'about',
      type: 'page',
      title: 'About',
      description: 'Learn about my background, skills, and interests',
      url: '/about',
      icon: <User size={18} />,
      keywords: ['about', 'bio', 'background', 'education', 'skills', 'guru nanak dev university', 'computer science']
    },
    {
      id: 'experience',
      type: 'page',
      title: 'Experience',
      description: 'My professional experience and work history',
      url: '/experience',
      icon: <Briefcase size={18} />,
      keywords: ['experience', 'work', 'job', 'career', 'professional', 'easemymed', 'ai developer', 'intern']
    },
    {
      id: 'projects',
      type: 'page',
      title: 'Projects',
      description: 'Portfolio of my projects and work',
      url: '/projects',
      icon: <Code size={18} />,
      keywords: ['projects', 'portfolio', 'work', 'showcase', 'github', 'machine learning', 'ai']
    },
    {
      id: 'contact',
      type: 'page',
      title: 'Contact',
      description: 'Get in touch with me',
      url: '/contact',
      icon: <Mail size={18} />,
      keywords: ['contact', 'email', 'message', 'get in touch', 'hire', 'collaborate']
    },
  ];

  // Add projects
  portfolioData.projects.forEach(project => {
    searchData.push({
      id: `project-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'project',
      title: project.title,
      description: project.description.substring(0, 100) + '...',
      url: '/projects',
      icon: <Code size={18} />,
      keywords: [
        project.title.toLowerCase(),
        ...project.technologies.map(tech => tech.name.toLowerCase()),
        'project', 'github', 'code', 'demo'
      ]
    });
  });

  // Add skills
  portfolioData.skills.forEach(skill => {
    searchData.push({
      id: `skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'section',
      title: skill.name,
      description: `${skill.category} skill - ${skill.level}% proficiency`,
      url: '/about',
      icon: <Brain size={18} />,
      keywords: [skill.name.toLowerCase(), skill.category?.toLowerCase() || '', 'skill', 'expertise', 'proficiency']
    });
  });

  // Add technologies
  portfolioData.technologies.forEach(tech => {
    searchData.push({
      id: `tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'section',
      title: tech.name,
      description: `Technology I use in my projects`,
      url: '/about',
      icon: <Wrench size={18} />,
      keywords: [tech.name.toLowerCase(), 'technology', 'tool', 'framework', 'library']
    });
  });

  // Add experience
  portfolioData.experience.forEach(exp => {
    searchData.push({
      id: `exp-${exp.company.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'section',
      title: `${exp.title} at ${exp.company}`,
      description: `${exp.startDate} - ${exp.endDate}`,
      url: '/experience',
      icon: <Briefcase size={18} />,
      keywords: [
        exp.title.toLowerCase(),
        exp.company.toLowerCase(),
        'experience', 'work', 'job', 'internship',
        ...exp.technologies?.map(tech => tech.name.toLowerCase()) || []
      ]
    });
  });

  // Add education
  portfolioData.education.forEach(edu => {
    searchData.push({
      id: `edu-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'section',
      title: edu.degree,
      description: `${edu.institution} - ${edu.startDate} to ${edu.endDate}`,
      url: '/about',
      icon: <GraduationCap size={18} />,
      keywords: [
        edu.degree.toLowerCase(),
        edu.institution.toLowerCase(),
        'education', 'degree', 'university', 'college', 'btech', 'computer science'
      ]
    });
  });

  // Add important keywords that interviewers might search for
  const importantKeywords = [
    {
      id: 'ai-ml',
      type: 'section',
      title: 'Artificial Intelligence & Machine Learning',
      description: 'AI/ML expertise including LLMs, RAG, OpenAI, Gemini',
      url: '/about',
      icon: <Brain size={18} />,
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'large language models', 'rag', 'openai', 'gemini', 'tensorflow']
    },
    {
      id: 'python-dev',
      type: 'section',
      title: 'Python Development',
      description: 'Expert Python developer with Django, REST APIs, ML libraries',
      url: '/about',
      icon: <Code size={18} />,
      keywords: ['python', 'django', 'rest api', 'flask', 'pandas', 'numpy', 'scikit-learn', 'backend']
    },
    {
      id: 'cloud-aws',
      type: 'section',
      title: 'Cloud & AWS',
      description: 'AWS SageMaker, EC2, S3, Google Cloud Platform experience',
      url: '/experience',
      icon: <Database size={18} />,
      keywords: ['aws', 'amazon web services', 'sagemaker', 'ec2', 's3', 'cloud', 'gcp', 'google cloud', 'docker']
    },
    {
      id: 'full-stack',
      type: 'section',
      title: 'Full Stack Development',
      description: 'Frontend and backend development with modern technologies',
      url: '/projects',
      icon: <Code size={18} />,
      keywords: ['full stack', 'frontend', 'backend', 'react', 'javascript', 'typescript', 'html', 'css', 'web development']
    }
  ];

  return [...searchData, ...importantKeywords];
};

const searchData = generateSearchData();

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when dialog opens and reset when closed
  useEffect(() => {
    if (isOpen) {
      // Simple, reliable auto-focus
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Reset search when dialog closes
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter results based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(query.toLowerCase());
      const matchDescription = item.description.toLowerCase().includes(query.toLowerCase());
      const matchKeywords = item.keywords?.some(keyword =>
        keyword.toLowerCase().includes(query.toLowerCase())
      );

      return matchTitle || matchDescription || matchKeywords;
    });

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Handle result selection
  const handleSelect = (result: SearchResult) => {
    trackEvent('Search', 'Result Selected', result.title);
    navigate(result.url);
    onClose();
    setQuery('');
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Search pages, projects..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                    autoComplete="off"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {results.length > 0 && (
                  <div className="mt-4 max-h-80 overflow-y-auto">
                    <div className="space-y-1">
                      {results.slice(0, 10).map((result, index) => (
                        <div
                          key={result.id}
                          className={`px-3 py-3 rounded-md cursor-pointer flex items-start ${
                            selectedIndex === index
                              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => handleSelect(result)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="mr-3 mt-0.5 text-gray-500 dark:text-gray-400 flex-shrink-0">
                            {result.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 dark:text-white truncate">
                              {result.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                              {result.description}
                            </div>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                result.type === 'page' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                result.type === 'project' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                              }`}>
                                {result.type === 'page' ? 'Page' :
                                 result.type === 'project' ? 'Project' :
                                 'Content'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {results.length > 10 && (
                      <div className="text-center py-2 text-sm text-gray-500 dark:text-gray-400">
                        Showing top 10 results of {results.length}
                      </div>
                    )}
                  </div>
                )}

                {query && results.length === 0 && (
                  <div className="mt-4 text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No results found</p>
                  </div>
                )}

                <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">↑</span>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded ml-1">↓</span>
                      <span className="ml-1">to navigate</span>
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Enter</span>
                      <span className="ml-1">to select</span>
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Esc</span>
                      <span className="ml-1">to close</span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

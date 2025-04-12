import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Search, X, FileText, User, Briefcase, Code, Mail } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

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

// Define search data
const searchData: SearchResult[] = [
  {
    id: 'home',
    type: 'page',
    title: 'Home',
    description: 'Main page with introduction and overview',
    url: '/',
    icon: <FileText size={18} />,
    keywords: ['home', 'main', 'landing', 'intro', 'overview']
  },
  {
    id: 'about',
    type: 'page',
    title: 'About',
    description: 'Learn about my background, skills, and interests',
    url: '/about',
    icon: <User size={18} />,
    keywords: ['about', 'bio', 'background', 'education', 'skills']
  },
  {
    id: 'experience',
    type: 'page',
    title: 'Experience',
    description: 'My professional experience and work history',
    url: '/experience',
    icon: <Briefcase size={18} />,
    keywords: ['experience', 'work', 'job', 'career', 'professional']
  },
  {
    id: 'projects',
    type: 'page',
    title: 'Projects',
    description: 'Portfolio of my projects and work',
    url: '/projects',
    icon: <Code size={18} />,
    keywords: ['projects', 'portfolio', 'work', 'showcase']
  },
  {
    id: 'contact',
    type: 'page',
    title: 'Contact',
    description: 'Get in touch with me',
    url: '/contact',
    icon: <Mail size={18} />,
    keywords: ['contact', 'email', 'message', 'get in touch']
  },
  // Add more search results as needed
];

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-300 p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-400 dark:text-white"
                    placeholder="Search pages, projects..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
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
                  <div className="mt-4 max-h-60 overflow-y-auto">
                    <div className="space-y-1">
                      {results.map((result, index) => (
                        <div
                          key={result.id}
                          className={`px-3 py-2 rounded-md cursor-pointer flex items-center ${
                            selectedIndex === index
                              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                              : 'hover:bg-gray-100 dark:hover:bg-dark-200'
                          }`}
                          onClick={() => handleSelect(result)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="mr-3 text-gray-500 dark:text-gray-400">
                            {result.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {result.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {result.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

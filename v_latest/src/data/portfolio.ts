import { PortfolioData } from '@/types';

const portfolioData: PortfolioData = {
  personal: {
    name: 'Vansh Oberoi',
    title: 'AI Engineer',
    summary: 'Passionate AI Engineer with expertise in Python, Machine Learning, and Web Technologies.',
    image: '/src/assets/images/profile.jpg',
    contact: {
      address: '462 Model Town, Kapurthala, Punjab 144601',
      phone: '+91 9646570760',
      email: 'learnsolo462@gmail.com',
      socials: [
        {
          platform: 'Facebook',
          url: 'https://www.facebook.com/solo.learn.33',
          icon: 'facebook',
        },
        {
          platform: 'Twitter',
          url: 'https://twitter.com/vansh462?t=WqYNN77kovYrTQsPidKDyw&s=09',
          icon: 'twitter',
        },
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vansh-oberoi-62baa6178',
          icon: 'linkedin',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Vansh462',
          icon: 'github',
        },
      ],
    },
  },
  skills: [
    {
      name: 'Python',
      level: 90,
      icon: 'python',
      category: 'Programming',
    },
    {
      name: 'Machine Learning',
      level: 90,
      icon: 'brain',
      category: 'AI',
    },
    {
      name: 'HTML/CSS',
      level: 80,
      icon: 'html5',
      category: 'Web',
    },
    {
      name: 'SQL',
      level: 90,
      icon: 'database',
      category: 'Data',
    },
    {
      name: 'OOPS (C/C++/Java)',
      level: 85,
      icon: 'code',
      category: 'Programming',
    },
  ],
  technologies: [
    { name: 'Scikit-learn' },
    { name: 'TensorFlow' },
    { name: 'Beautiful Soup' },
    { name: 'OpenCV' },
    { name: 'Django' },
    { name: 'AWS Sagemaker' },
    { name: 'Git' },
    { name: 'Linux' },
    { name: 'Google Colab' },
    { name: 'Docker' },
  ],
  experience: [
    {
      title: 'AI Engineer',
      company: 'EaseMyMed',
      startDate: 'Dec 2024',
      endDate: 'April 2025',
      description: [
        'Developed multiple APIs including Image-to-Text and Image-to-Image solutions',
        'Fine-tuned AI models like DeepSeek for specialized applications',
        'Worked with various document formats (PDFs, DOCX, XLSX) through code',
        'Utilized AWS Sagemaker to develop and deploy machine learning models',
        'Created comprehensive technical documentation',
        'Leveraged technologies including AWS Sagemaker, GCS, and Docker',
      ],
      technologies: [
        { name: 'AWS Sagemaker' },
        { name: 'Docker' },
        { name: 'Python' },
        { name: 'DeepSeek' },
        { name: 'GCS' },
      ],
    },
  ],
  projects: [
    {
      title: 'Bombay House Price Prediction',
      description: 'Built a house price prediction model for Bombay using Python and machine learning techniques. Created a web application with Streamlit for user interaction with the model. Deployed the application on AWS Cloud with Nginx as a reverse proxy. Implemented prediction based on BHK, square footage, and location parameters. Considered approximately 25 locations and variable ranges of square footage.',
      technologies: [
        { name: 'Python' },
        { name: 'ML' },
        { name: 'Streamlit' },
        { name: 'AWS Cloud' },
        { name: 'NginX' },
      ],
      featured: true,
    },
    {
      title: 'Official Site Link Scraping',
      description: 'Developed a web scraping solution to extract official website links from Google search results. Implemented using Python with Beautiful Soup for parsing HTML content. Created a user-friendly interface for inputting search queries and viewing results. Optimized the scraping process to handle various website structures and formats. Included error handling and retry mechanisms for robust performance.',
      technologies: [
        { name: 'Python' },
        { name: 'Beautiful Soup' },
        { name: 'Web Scraping' },
        { name: 'HTML Parsing' },
      ],
      featured: true,
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Guru Nanak Dev University - State Government University',
      location: 'Amritsar, Punjab',
      startDate: 'August 2022',
      endDate: 'June 2026',
    },
  ],
  leadership: [
    {
      title: 'Technical Lead',
      organization: 'College Technical Club',
      date: '2023 - Present',
      description: 'Leading technical workshops and mentoring junior students in programming and AI concepts.',
    },
  ],
};

export default portfolioData;

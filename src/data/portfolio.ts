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
          url: 'https://www.linkedin.com/in/vansh-oberoi-62baa6178/?trk=opento_sprofile_details',
          icon: 'linkedin',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/Vansh462',
          icon: 'github',
        },
        {
          platform: 'Instagram',
          url: 'https://www.instagram.com/vanshoberoi3103?igsh=YWxhbW9zMWJqeXBy',
          icon: 'instagram',
        },
      ],
    },
  },
  skills: [
    {
      name: 'Python',
      level: 95,
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
      name: 'Large Language Models',
      level: 95,
      icon: 'brain',
      category: 'AI',
    },
    {
      name: 'AI Agents',
      level: 88,
      icon: 'brain',
      category: 'AI',
    },
    {
      name: 'C/C++',
      level: 85,
      icon: 'code',
      category: 'Programming',
    },
    {
      name: 'HTML/CSS',
      level: 80,
      icon: 'html5',
      category: 'Web',
    },
    {
      name: 'SQL',
      level: 85,
      icon: 'database',
      category: 'Data',
    },
    {
      name: 'Tableau',
      level: 85,
      icon: 'chart',
      category: 'Data',
    },
  ],
  technologies: [
    { name: 'Scikit-learn' },
    { name: 'TensorFlow' },
    { name: 'OpenAI API' },
    { name: 'Claude API' },
    { name: 'Beautiful Soup' },
    { name: 'OpenCV' },
    { name: 'Django' },
    { name: 'AWS Sagemaker' },
    { name: 'Git' },
    { name: 'VS Code' },
    { name: 'Vim' },
    { name: 'Linux' },
    { name: 'Google Colab' },
    { name: 'Docker' },
    { name: 'Tableau' },
    { name: 'Selenium' },
    { name: 'Multiprocessing' },
  ],
  experience: [
    {
      title: 'AI Engineer',
      company: 'EaseMyMed',
      startDate: 'Dec 2024',
      endDate: 'April 2025',
      description: [
        'Developed multiple APIs including Image-to-Text and Image-to-Image solutions',
        'Worked with Large Language Models (LLMs) like OpenAI GPT and Gemini 2.0',
        'Built and deployed AI Agents similar to NovaAct and AugmentCode',
        'Fine-tuned AI models like DeepSeek for specialized applications',
        'Worked with various document formats (PDFs, DOCX, XLSX) through code',
        'Utilized AWS Sagemaker to develop and deploy machine learning models',
        'Created comprehensive technical documentation',
        'Leveraged technologies including AWS Sagemaker, GCS, and Docker',
      ],
      technologies: [
        { name: 'GenAI (OpenAI, Gemini 2.0, Google AI Studio)' },
        { name: 'AI Agents' },
        { name: 'Django' },
        { name: 'Bootstrap' },
        { name: 'AWS Sagemaker' },
        { name: 'Docker' },
        { name: 'Python' },
        { name: 'Tableau' },
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
      description: 'Led a backend project to scrape official bank links using only the bank\'s name as input, automating data extraction. Implemented the Google library for efficient scraping after researching alternatives like APIs and Selenium. Explored multithreading and multiprocessing, ultimately applying multiprocessing for better performance. Gained insights into web scraping, backend processes, and optimization techniques through hands-on research and application.',
      technologies: [
        { name: 'Python' },
        { name: 'Selenium' },
        { name: 'Google Library' },
        { name: 'Beautiful Soup' },
        { name: 'Multiprocessing' },
        { name: 'Threads' },
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
      title: 'Design Team Head',
      organization: 'ECell',
      date: 'Spring 2022 - 2023',
      description: 'Served as the Design Team Head for GNDU E-Cell, leading a team of 4 members. Collaborated with team members to create numerous innovative designs for various projects. Managed and guided the design team while working closely with other teams, including the Tech Team and Marketing Team. Gained valuable experience in teamwork, design management, and cross-team collaboration.',
    },
    {
      title: 'Backend Team Learner',
      organization: 'ARAMBH startup',
      date: 'Aug 2024 - Oct 2024',
      description: 'Served as a lead at Arambh startup, collaborating with colleagues from the ECE department of GNDU University. Applied and tested my Python knowledge through various backend projects assigned by the team.',
    },
  ],
};

export default portfolioData;

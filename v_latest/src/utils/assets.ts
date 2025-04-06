// This file manages all external assets and provides a centralized way to access them

// Hero section background patterns from https://www.svgbackgrounds.com/
export const HERO_PATTERNS = {
  circuit: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/circuit-board.svg',
  topography: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/topography.svg',
  bubbles: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/bubbles.svg',
  dots: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/dots.svg',
};

// Section background patterns
export const SECTION_PATTERNS = {
  plus: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/plus.svg',
  diagonal: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/diagonal-lines.svg',
  grid: 'https://ik.imagekit.io/vanshoberoi/portfolio/patterns/grid.svg',
};

// Tech stack logos from Simple Icons (https://simpleicons.org/)
export const TECH_LOGOS = {
  python: 'https://cdn.simpleicons.org/python/3776AB',
  react: 'https://cdn.simpleicons.org/react/61DAFB',
  tensorflow: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  aws: 'https://cdn.simpleicons.org/amazonaws/232F3E',
  docker: 'https://cdn.simpleicons.org/docker/2496ED',
  git: 'https://cdn.simpleicons.org/git/F05032',
  javascript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  typescript: 'https://cdn.simpleicons.org/typescript/3178C6',
  html5: 'https://cdn.simpleicons.org/html5/E34F26',
  css3: 'https://cdn.simpleicons.org/css3/1572B6',
  vscode: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  linux: 'https://cdn.simpleicons.org/linux/FCC624',
  scikit: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
  opencv: 'https://cdn.simpleicons.org/opencv/5C3EE8',
  django: 'https://cdn.simpleicons.org/django/092E20',
};

// Project images from Unsplash (https://unsplash.com/)
export const PROJECT_IMAGES = {
  housePrice: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
  webScraping: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  aiProject: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  dataAnalysis: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};

// Social media icons
export const SOCIAL_ICONS = {
  github: 'https://cdn.simpleicons.org/github/181717',
  linkedin: 'https://cdn.simpleicons.org/linkedin/0A66C2',
  twitter: 'https://cdn.simpleicons.org/twitter/1DA1F2',
  facebook: 'https://cdn.simpleicons.org/facebook/1877F2',
  instagram: 'https://cdn.simpleicons.org/instagram/E4405F',
};

// Profile image (using a placeholder - replace with your actual image)
export const PROFILE_IMAGE = 'https://ik.imagekit.io/vanshoberoi/portfolio/profile.jpg';

// Helper function to get a random pattern
export const getRandomPattern = (patterns: Record<string, string>) => {
  const keys = Object.keys(patterns);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return patterns[randomKey];
};

// Helper function to create a CSS background pattern
export const createPatternBackground = (
  patternUrl: string, 
  bgColor: string = 'rgba(255, 255, 255, 0.95)', 
  patternOpacity: number = 0.1
) => {
  return {
    backgroundImage: `url(${patternUrl})`,
    backgroundColor: bgColor,
    backgroundBlendMode: 'overlay',
    opacity: patternOpacity,
  };
};

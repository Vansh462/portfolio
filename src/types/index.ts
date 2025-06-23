export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category?: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: Technology[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: Technology[];
  link?: string;
  github?: string;
  kaggle?: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Leadership {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  socials: SocialLink[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  image: string;
  contact: ContactInfo;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  technologies: Technology[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  leadership: Leadership[];
}

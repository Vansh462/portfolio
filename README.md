# 🚀 Vansh Oberoi - AI Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://portfolio-vansh-oberois-projects.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Vansh462/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/Vansh462)

## 📸 Portfolio Preview

### 🌞 Light Theme
![Portfolio Light Theme](https://portfolio-vansh-oberois-projects.vercel.app/portfolio-screenshot-light.webp)

### 🌙 Dark Theme
![Portfolio Dark Theme](https://portfolio-vansh-oberois-projects.vercel.app/portfolio-screenshot-dark.webp)


This project implements a modern web application architecture with advanced features like route prefetching, intelligent resource loading, and progressive web app capabilities. It uses a component-based architecture with performance optimization at its core, including code splitting, lazy loading, and optimized asset delivery.

The application includes sophisticated animations, keyboard shortcuts, global search functionality, and a comprehensive theme system. It's built with accessibility in mind and includes analytics integration, cookie consent management, and performance monitoring.

## 🌐 Live Demo
**[🔗 View Live Portfolio](https://portfolio-vansh-oberois-projects.vercel.app/)**

> Deployed on Vercel with automatic CI/CD from GitHub


## Repository Structure
```
.
├── src/                      # Source code directory
│   ├── components/          # React components organized by feature
│   │   ├── home/           # Home page components (Hero, CTA, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── utils/              # Utility functions for performance, HTTP, etc.
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   └── types/              # TypeScript type definitions
├── public/                  # Static assets and public files
├── scripts/                # Build and optimization scripts
└── docs/                   # Documentation files
```

## Usage Instructions
### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser with JavaScript enabled

### 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/Vansh462/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern component-based architecture
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations and transitions
- **React Router** - Client-side routing

### UI Components
- **Lucide React** - For beautiful icons
- **Phosphor Icons** - Social media icons and additional icon set
- **ReactFlow** - For interactive skills network visualization

### Backend Services
- **Formspree** - Form handling for the contact form

### Build Tools
- **Vite** - Next generation frontend tooling
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🚀 Features

- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Advanced Performance Optimization** - Code splitting, lazy loading, and optimized assets
- **Interactive UI Components** - Custom animations and transitions using Framer Motion
- **Interactive Skills Visualization** - Network graph showing relationships between skills
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Certifications Gallery** - Interactive gallery to showcase certifications
- **Global Search** - Quick navigation with keyboard shortcuts
- **Responsive Design** - Fully responsive on all devices
- **SEO Friendly** - Proper metadata and semantic HTML
- **Analytics Integration** - Performance monitoring and user behavior tracking

## Quick Start
1. Configure your portfolio data:
```typescript
// src/data/portfolio.ts
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    // ...other personal info
  },
  // ...other portfolio sections
};
```

2. Add your assets:
- Place images in `public/` directory
- Update image references in `src/utils/assets.ts`

3. Start the development server:
```bash
npm run dev
```

## More Detailed Examples
1. Adding a new page:
```typescript
// src/pages/NewPage.tsx
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

export default function NewPage() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Your content here */}
      </motion.div>
    </Section>
  );
}
```

2. Using the theme system:
```typescript
import { useTheme } from '@/components/ThemeProvider';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## Troubleshooting
1. Build Issues
- Error: "Module not found"
  ```bash
  # Clear node_modules and reinstall
  rm -rf node_modules
  npm install
  ```

2. Performance Issues
- Enable debug mode in development:
  ```typescript
  // src/utils/performanceOptimizer.ts
  const DEBUG = true;
  ```
- Check browser console for Core Web Vitals metrics

3. Animation Issues
- Check Framer Motion debug output:
  ```typescript
  import { motion, useIsomorphicLayoutEffect } from 'framer-motion';
  motion.useDebugValue = true;
  ```

## Data Flow
The application follows a unidirectional data flow pattern, with portfolio data as the single source of truth.

```ascii
[Portfolio Data] → [React Components] → [UI Rendering]
         ↓                  ↓                ↓
    [Data Layer]    [Component Layer]   [View Layer]
         ↓                  ↓                ↓
  [Type System]    [Props/State Flow]   [Animations]
```

Key component interactions:
1. Portfolio data is loaded and typed using TypeScript interfaces
2. Components receive data through props
3. Theme provider manages global theme state
4. Page transitions are handled by AnimatePresence
5. Performance optimizations are applied automatically
6. Analytics events are tracked through utility functions
7. Resource loading is optimized via prefetching and lazy loading

## 📞 Contact

**Vansh Oberoi** - AI Engineer & ML Specialist

[![Email](https://img.shields.io/badge/Email-learnsolo462@gmail.com-red?style=flat-square&logo=gmail)](mailto:learnsolo462@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vansh462-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/Vansh462)
[![GitHub](https://img.shields.io/badge/GitHub-Vansh462-black?style=flat-square&logo=github)](https://github.com/Vansh462)
[![Instagram](https://img.shields.io/badge/Instagram-@vanshoberoi3103-purple?style=flat-square&logo=instagram)](https://www.instagram.com/vanshoberoi3103)
[![Twitter](https://img.shields.io/badge/Twitter-@vansh462-blue?style=flat-square&logo=twitter)](https://twitter.com/vansh462)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Vansh462/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/Vansh462/portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Vansh462/portfolio?style=social)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

**Portfolio Content & Data** © 2025 Vansh Oberoi. All rights reserved.

---

⭐ **Star this repo if you found it helpful!** ⭐
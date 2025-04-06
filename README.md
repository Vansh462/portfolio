# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as an AI Engineer.

![Portfolio Screenshot](src/assets/images/profile.jpg)

## 🚀 Features

- **Modern React Architecture** - Built with React 19 and Vite for lightning-fast performance
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Page Transitions** - Using Framer Motion for fluid animations
- **Dynamic Content** - Content managed through a centralized data structure
- **Interactive UI Components** - Custom UI components with animations and tooltips
- **Contact Form** - Functional contact form for visitor inquiries
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Accessibility** - Designed with accessibility in mind

## 🛠️ Technologies Used

### Core Technologies
- **React 19** - Latest version of React with improved performance
- **TypeScript** - For type safety and better developer experience
- **Vite** - Next-generation frontend tooling for faster development
- **React Router v7** - For client-side routing
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### UI/UX
- **Framer Motion** - For smooth animations and transitions
- **GSAP** - For advanced animations
- **Lucide React** - For beautiful icons including social media icons
- **Phosphor Icons** - Additional icon set with customizable weights

### State Management
- **React Context API** - For theme management

### Performance Optimization
- **Code Splitting** - For faster initial load times
- **Lazy Loading** - Components and images load as needed
- **Optimized Build** - Minification and tree-shaking for production

## 📋 Pages

1. **Home** - Introduction with hero section, skills overview, featured projects, testimonials, and call-to-action
2. **About** - Detailed information about me, education, leadership experience, and technologies
3. **Experience** - Professional work experience and achievements
4. **Projects** - Showcase of projects with filtering capabilities
5. **Contact** - Contact form and information
6. **404** - Custom not found page

## 🏗️ Project Structure

```
portfolio/
├── public/              # Public assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── home/        # Home page specific components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── data/            # Portfolio data
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions and constants
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.cjs  # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

### Serving Production Build

```bash
npm run serve
# or
yarn serve
# or
pnpm serve
```

## 🎨 Customization

The portfolio is designed to be easily customizable:

1. **Content**: Update the `src/data/portfolio.ts` file with your personal information, skills, projects, and experience.

2. **Styling**: Modify the Tailwind configuration in `tailwind.config.cjs` to change colors, fonts, and other design elements.

3. **Components**: Customize or extend the components in the `src/components` directory.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🌙 Dark Mode

The application supports dark mode with:
- System preference detection
- Manual toggle
- Persistent preference (saved to localStorage)

## 🔍 SEO

The portfolio includes:
- Semantic HTML
- Meta tags
- Descriptive page titles
- Alt text for images

## 🚀 Performance

The application is optimized for performance:
- Fast initial load time
- Code splitting
- Optimized assets
- Efficient animations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [Phosphor Icons](https://phosphoricons.com/)

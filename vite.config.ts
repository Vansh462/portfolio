import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Use SWC for faster compilation
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    // Enable HMR optimizations
    hmr: {
      overlay: false, // Disable error overlay for faster dev
    },
    // Faster file watching
    watch: {
      usePolling: false,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for faster builds
    minify: 'esbuild', // Use esbuild for faster minification
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'gsap'],
          ui: ['@headlessui/react', 'lucide-react', '@phosphor-icons/react'],
        },
      },
    },
    // Faster builds
    target: 'esnext',
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      '@phosphor-icons/react',
    ],
    // Force pre-bundling for faster dev startup
    force: false,
  },
})

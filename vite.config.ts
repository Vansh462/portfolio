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
    // SPA fallback for dev server
    historyApiFallback: true,
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
          animations: ['framer-motion'],
          ui: ['@headlessui/react', 'lucide-react', '@phosphor-icons/react'],
        },
        // Optimize asset loading
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    // Faster builds
    target: 'esnext',
    cssCodeSplit: true,
    // Reduce bundle size
    assetsInlineLimit: 4096, // 4kb
    // Improve compression
    reportCompressedSize: false,
  },
  // SPA fallback for client-side routing
  preview: {
    port: 3000,
    // This ensures all routes fallback to index.html for SPA routing
    historyApiFallback: true,
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

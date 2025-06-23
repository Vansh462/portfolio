// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Application imports
import App from './App';
import './index.css';
import './utils/animations.css';

// Analytics initialization
import { initAnalytics } from './utils/analyticsInit';

// Initialize analytics before rendering the app
initAnalytics();

// Render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
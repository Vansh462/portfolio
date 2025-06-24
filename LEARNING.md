# Web Development Troubleshooting Handbook

## 1. HTML Structure Issues

**Problem:** Duplicate HTML tags (`<head>`, `<body>`) causing rendering issues.

**Cause:** Copy-pasting code fragments without checking the overall document structure.

**Solution:** Ensure HTML documents have exactly one set of required structural elements.

```html
<!-- ❌ Incorrect -->
<head>...</head>
<body>...</body>
</html>
<head>...</head>  <!-- Duplicate! -->

<!-- ✅ Correct -->
<head>...</head>
<body>...</body>
</html>
```

## 2. Z-Index Conflicts

**Problem:** Elements appearing behind others when they should be on top.

**Cause:** Missing or incorrect z-index values in CSS.

**Solution:** Use appropriate z-index values and ensure parent elements don't limit stacking context.

```css
/* ❌ Incorrect */
.button {
  position: absolute;
  /* No z-index specified */
}

/* ✅ Correct */
.button {
  position: absolute;
  z-index: 50; /* Higher than surrounding elements */
}
```

## 3. Animation Trigger Timing

**Problem:** Animations starting too late during scroll.

**Cause:** Viewport intersection threshold set too conservatively.

**Solution:** Adjust the viewport margin to trigger animations earlier.

```jsx
// ❌ Incorrect
<motion.div
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>

// ✅ Correct
<motion.div
  whileInView="visible"
  viewport={{ once: true, margin: '-150px' }}
>
```

## 4. Click Events Not Working

**Problem:** Buttons or interactive elements not responding to clicks.

**Cause:** Overlapping elements or pointer-events being blocked.

**Solution:** Add `pointer-events-none` to decorative elements and `pointer-events-auto` to interactive elements.

```jsx
// ❌ Incorrect
<div className="absolute inset-0">
  <!-- This blocks clicks to elements below -->
</div>

// ✅ Correct
<div className="absolute inset-0 pointer-events-none">
  <!-- Now clicks pass through -->
</div>
```

## 5. Unused Dependencies

**Problem:** Unnecessary packages increasing bundle size.

**Cause:** Dependencies added for features that were later removed or changed.

**Solution:** Regularly audit dependencies and remove unused ones.

```json
// ❌ Incorrect - Unused packages
"dependencies": {
  "react": "^18.0.0",
  "unused-library": "^1.0.0"
}

// ✅ Correct
"dependencies": {
  "react": "^18.0.0"
}
```

## 6. Inconsistent Visual Elements

**Problem:** Design elements (backgrounds, animations) appearing inconsistently across pages.

**Cause:** Component-specific styling instead of global design system.

**Solution:** Create reusable components for common visual elements.

```jsx
// ❌ Incorrect - Repeating similar code
<div className="bg-gradient custom-animation">...</div>

// ✅ Correct - Reusable component
<BackgroundElement variant="primary" animated={true}>
  ...
</BackgroundElement>
```

## 7. Syntax Errors in JSX

**Problem:** Missing closing tags causing entire components to fail.

**Cause:** Editing JSX without proper indentation or editor support.

**Solution:** Use proper code formatting and JSX-aware editors.

```jsx
// ❌ Incorrect - Missing closing div
<div>
  <span>Text</span>
  // Missing </div>

// ✅ Correct
<div>
  <span>Text</span>
</div>
```

## 8. Performance Issues

**Problem:** Slow page loads and animations.

**Cause:** Unoptimized images, unnecessary re-renders, or heavy libraries.

**Solution:** Optimize assets, implement code splitting, and remove unused code.

```jsx
// ❌ Incorrect - Loading full library
import { everything } from 'huge-library';

// ✅ Correct - Only import what's needed
import { specificFunction } from 'huge-library';
```

## 9. SEO Optimization Missing

**Problem:** Poor search engine visibility.

**Cause:** Missing meta tags, sitemap, and robots.txt.

**Solution:** Add proper meta descriptions and SEO-related files.

```html
<!-- ✅ Add to head -->
<meta name="description" content="Clear, concise description of the page" />
```

## 10. Inconsistent Component Structure

**Problem:** Similar components built differently, causing maintenance issues.

**Cause:** No clear component architecture or guidelines.

**Solution:** Establish patterns for component creation and composition.

```jsx
// ❌ Inconsistent
function ComponentOne({ title }) {
  return <h1>{title}</h1>;
}

const ComponentTwo = props => (
  <h1>{props.heading}</h1>
);

// ✅ Consistent
function ComponentOne({ title }) {
  return <h1>{title}</h1>;
}

function ComponentTwo({ title }) {
  return <h1>{title}</h1>;
}
```

## 11. Accessibility Issues

**Problem:** Components not usable by all users.

**Cause:** Missing ARIA attributes and keyboard navigation.

**Solution:** Add proper accessibility attributes to interactive elements.

```jsx
// ❌ Incorrect
<div onClick={handleClick}>Click me</div>

// ✅ Correct
<button 
  onClick={handleClick}
  aria-label="Description of action"
>
  Click me
</button>
```

## 12. Mobile Responsiveness Problems

**Problem:** Layout breaking on mobile devices.

**Cause:** Fixed dimensions or desktop-only design considerations.

**Solution:** Use responsive units and test on multiple screen sizes.

```css
/* ❌ Incorrect */
.container {
  width: 1200px;
}

/* ✅ Correct */
.container {
  width: 100%;
  max-width: 1200px;
}
```

## 13. Build Configuration Issues

**Problem:** Production builds not optimized or containing development code.

**Cause:** Incomplete build configuration.

**Solution:** Configure proper asset optimization and code splitting.

```js
// ✅ Example Vite config
export default {
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['component-library']
        }
      }
    }
  }
}
```

## 14. Animation Performance

**Problem:** Animations causing layout shifts or performance issues.

**Cause:** Animating expensive properties like width/height instead of transform.

**Solution:** Use transform and opacity for animations when possible.

```css
/* ❌ Incorrect - Causes layout recalculation */
@keyframes grow {
  from { width: 100px; height: 100px; }
  to { width: 200px; height: 200px; }
}

/* ✅ Correct - Uses GPU acceleration */
@keyframes grow {
  from { transform: scale(1); }
  to { transform: scale(2); }
}
```

## 15. Code Organization

**Problem:** Difficulty finding and maintaining related code.

**Cause:** Inconsistent file structure and component organization.

**Solution:** Organize by feature or component type with clear naming conventions.

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── pages/            # Page components
```

## 16. SPA Routing in Production

**Problem:** Navigation works in development but fails in production - URL changes but wrong pages display.

**Cause:** Missing SPA fallback configuration. Static servers try to find physical files for routes like `/about/index.html` which don't exist.

**Solution:** Configure server to fallback to `index.html` for all routes, allowing React Router to handle client-side routing.

```typescript
// ❌ Incorrect - Missing SPA fallback in vite.config.ts
export default defineConfig({
  server: {
    port: 3000,
  },
  // No historyApiFallback configuration
});

// ✅ Correct - With SPA fallback
export default defineConfig({
  server: {
    port: 3000,
    historyApiFallback: true, // Dev server
  },
  preview: {
    historyApiFallback: true, // Preview server
  },
});
```

**Additional deployment configs needed:**

```bash
# _redirects (Netlify)
/*    /index.html   200
```

```json
// vercel.json (Vercel)
{
  "rewrites": [
    {"source": "/(.*)", "destination": "/index.html"}
  ]
}
```
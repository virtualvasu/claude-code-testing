# Claude Generated Code

**Task**: 🎯 Goal
Set up a Vite + React project named claude-testing with the following features on the homepage:

Functional Requirements
Homepage Title
---
Display the text C4GT prominently on the homepage.

Use a clean, readable font (e.g., Inter or Roboto) with styling that makes it stand out (e.g., large font size, center alignment).

Moving Car Animation

Add a simple car animation that moves from left to right across the screen (looping or one-time is fine).

The car can be:

An SVG with motion applied using CSS/JS

An animated image

Or a simple rectangle/div shaped like a car with movement applied

Use CSS animation or a library like framer-motion if needed.

💻 Tech Stack
Frontend Framework: React (with TypeScript)

Bundler: Vite

Styling: Tailwind CSS preferred ....

**Generated on**: Fri Jul 18 18:24:43 UTC 2025

## Generated Content

```
I'll help you set up the Vite + React project with the C4GT homepage and moving car animation. Let me provide the necessary changes to implement these features.

## FILES_TO_CREATE
- `src/components/CarAnimation.tsx`
- `src/assets/car.svg`

## FILES_TO_MODIFY
- `package.json`
- `src/App.tsx`
- `src/App.css`
- `src/index.css`

## CODE_CHANGES

### 1. Update package.json to add Tailwind CSS
```json
{
  "name": "claude-testing",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.30.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "autoprefixer": "^10.4.17",
    "eslint": "^9.30.1",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.35.1",
    "vite": "^7.0.4"
  }
}
```

### 2. Create Car SVG Asset - `src/assets/car.svg`
```svg
<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Car body -->
  <rect x="10" y="15" width="50" height="15" rx="3" fill="#3B82F6"/>
  <!-- Car top -->
  <rect x="20" y="8" width="30" height="12" rx="6" fill="#1E40AF"/>
  <!-- Wheels -->
  <circle cx="20" cy="32" r="6" fill="#1F2937"/>
  <circle cx="50" cy="32" r="6" fill="#1F2937"/>
  <!-- Wheel centers -->
  <circle cx="20" cy="32" r="3" fill="#6B7280"/>
  <circle cx="50" cy="32" r="3" fill="#6B7280"/>
  <!-- Windows -->
  <rect x="23" y="10" width="8" height="8" rx="1" fill="#93C5FD"/>
  <rect x="35" y="10" width="8" height="8" rx="1" fill="#93C5FD"/>
  <!-- Headlight -->
  <circle cx="62" cy="20" r="3" fill="#FEF3C7"/>
</svg>
```

### 3. Create Car Animation Component - `src/components/CarAnimation.tsx`
```tsx
import React from 'react';
import carSvg from '../assets/car.svg';

const CarAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-inner">
      {/* Road */}
      <div className="absolute bottom-0 w-full h-8 bg-gray-700">
        {/* Road lines */}
        <div className="absolute top-1/2 w-full h-0.5 bg-yellow-400 transform -translate-y-1/2">
          <div className="animate-pulse flex space-x-4">
            <div className="w-8 h-0.5 bg-yellow-400"></div>
            <div className="w-8 h-0.5 bg-transparent"></div>
            <div className="w-8 h-0.5 bg-yellow-400"></div>
            <div className="w-8 h-0.5 bg-transparent"></div>
            <div className="w-8 h-0.5 bg-yellow-400"></div>
          </div>
        </div>
      </div>
      
      {/* Moving car */}
      <div className="absolute bottom-8 animate-drive">
        <img 
          src={carSvg} 
          alt="Moving car" 
          className="w-20 h-10 drop-shadow-lg"
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute top-2 left-10 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute top-4 right-20 w-6 h-6 bg-green-500 rounded-full opacity-40"></div>
      <div className="absolute top-1 right-10 w-4 h-4 bg-green-300 rounded-full opacity-50"></div>
    </div>
  );
};

export default CarAnimation;
```

### 4. Update App.tsx
```tsx
import React from 'react';
import CarAnimation from './components/CarAnimation';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 font-inter tracking-tight">
            C4GT
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Code for GovTech
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Car Animation Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
              Innovation in Motion
            </h2>
            <CarAnimation />
          </section>

          {/* Additional Content */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Government Billing & Invoicing
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Streamlining government processes through innovative technology solutions. 
                Built with modern React, TypeScript, and designed for efficiency and accessibility.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  React + TypeScript
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Vite
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 C4GT - Code for GovTech</p>
      </footer>
    </div>
  );
};

export default App;
```

### 5. Update App.css
```css
/* Custom animations */
@keyframes drive {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(calc(100vw + 20px));
  }
}

.animate-drive {
  animation: drive 8s linear infinite;
}

/* Custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient animations */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}

/* Hover effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
```

### 6. Update index.css (Add Tailwind directives)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(55, 65, 81, 0.87);
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

* {
  box-sizing: border-box;
}
```

## INSTRUCTIONS

1. **Install Tailwind CSS dependencies**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialize Tailwind CSS**:
   ```bash
   npx tailwindcss init -p
   ```

3. **Create tailwind.config.js** (this will be generated by the init command):
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         fontFamily: {
           'inter': ['Inter', 'sans-serif'],
         },
       },
     },
     plugins: [],
   }
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Features Implemented

✅ **C4GT Title**: Large, prominent title with gradient styling and Inter font  
✅ **Moving Car Animation**: SVG car that moves across the screen with road and background  
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS  
✅ **Clean Styling**: Modern gradient backgrounds and clean typography  
✅ **TypeScript Support**: Fully typed components and props  
✅ **Government Theme**: Professional styling appropriate for government billing/invoicing

The car animation loops continuously from left to right across the screen, and the entire design is responsive and accessible. The C4GT title is prominently displayed with an attractive gradient effect.
```

# C4GT React Web Application

A modern React + TypeScript web application built with Vite, featuring the C4GT (Code for Governance Tech) homepage with an animated car component.

## Features

✨ **Modern Stack**: React 19 + TypeScript + Vite  
🎨 **Tailwind CSS**: Beautiful, responsive styling  
🚗 **Car Animation**: Smooth SVG car animation moving across the screen  
📱 **Responsive Design**: Mobile-first approach with dark mode support  
⚡ **Fast Development**: Hot reload with Vite  

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd claude-code-testing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |  
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   └── CarAnimation.tsx    # Animated SVG car component
├── App.tsx                 # Main application component  
├── App.css                 # Custom styles
├── index.css              # Global styles with Tailwind
└── main.tsx               # Application entry point
```

## Key Components

### CarAnimation
A reusable React component featuring:
- Custom SVG car with detailed design
- Configurable looping animation
- Smooth CSS transitions
- Responsive behavior

### Homepage
- Large gradient "C4GT" title
- Clean typography using Inter and Roboto fonts
- Decorative animated elements
- Dark/light mode compatibility

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3, PostCSS
- **Linting**: ESLint 9
- **Fonts**: Inter, Roboto (Google Fonts)

## Development

This project was generated as part of Claude Code testing and includes:
- TypeScript configuration optimized for React
- ESLint rules for React hooks and best practices  
- Vite configuration with React plugin
- Tailwind CSS with custom animations

## License

This project is private and for testing purposes.
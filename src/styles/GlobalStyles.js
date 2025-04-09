import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Enhanced Color Palette - Dark Theme */
    --primary-color: #3B82F6;
    --primary-dark: #1E40AF;
    --primary-light: #60A5FA;
    --secondary-color: #0EA5E9;
    --accent-color: #38BDF8;
    
    /* Refined Background Colors */
    --background-color: #0A0A0F;
    --background-light: #12121A;
    --background-accent: #1A1A24;
    
    /* Expanded Background Colors for Gradients */
    --bg-gradient-1: rgba(59, 130, 246, 0.03);
    --bg-gradient-2: rgba(14, 165, 233, 0.02);
    --bg-gradient-3: rgba(96, 165, 250, 0.02);
    --bg-gradient-4: rgba(56, 189, 248, 0.03);
    
    /* Enhanced Text Colors */
    --text-primary: #F8F9FA;
    --text-secondary: #CED4DA;
    --text-accent: #E9ECEF;
    
    /* Refined UI Elements */
    --card-bg: rgba(22, 22, 29, 0.7);
    --border-color: rgba(59, 130, 246, 0.1);
    --hover-color: rgba(59, 130, 246, 0.05);
    
    /* Enhanced Shadows */
    --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    --text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    /* Transitions */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Glow Effects */
    --glow-primary: 0 0 20px rgba(59, 130, 246, 0.2);
    --glow-secondary: 0 0 25px rgba(14, 165, 233, 0.2);
    --glow-accent: 0 0 30px rgba(56, 189, 248, 0.2);
    
    /* Spacing System */
    --space-unit: 0.25rem;
    --space-xxs: calc(2 * var(--space-unit));
    --space-xs: calc(4 * var(--space-unit));
    --space-sm: calc(6 * var(--space-unit));
    --space-md: calc(8 * var(--space-unit));
    --space-lg: calc(12 * var(--space-unit));
    --space-xl: calc(16 * var(--space-unit));
    --space-xxl: calc(20 * var(--space-unit));
    
    /* Container Widths */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    
    /* Effects */
    --transition-fast: 0.2s ease-in-out;
    --transition-normal: 0.3s ease-in-out;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    --radius-full: 9999px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: auto;
    scroll-padding-top: 80px;
    
    @media screen and (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--background-color);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    
    /* Simple gradient background */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        var(--background-color) 0%,
        var(--background-light) 50%,
        var(--background-color) 100%
      );
      z-index: -2;
    }

    /* Subtle noise texture */
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.03;
      z-index: -1;
      pointer-events: none;
    }
    
    /* Depth overlay */
    .depth-overlay {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, 
        rgba(10, 10, 15, 0) 0%, 
        rgba(10, 10, 15, 0.1) 40%, 
        rgba(10, 10, 15, 0) 60%, 
        rgba(10, 10, 15, 0.1) 100%);
      z-index: -1;
      animation: depthAnimation 15s ease-in-out infinite alternate;
      pointer-events: none;
    }
  }

  @keyframes depthAnimation {
    0% {
      opacity: 0.05;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.05;
    }
  }

  /* Modern Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 5px;
    
    &:hover {
      background: var(--primary-color);
    }
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--primary-light);
  }

  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); }
  h4 { font-size: clamp(1.25rem, 2vw, 1.75rem); }
  h5 { font-size: clamp(1.125rem, 1.5vw, 1.5rem); }
  h6 { font-size: clamp(1rem, 1.25vw, 1.25rem); }

  p {
    margin-bottom: var(--space-md);
    color: var(--text-secondary);
    font-size: clamp(1rem, 1.1vw, 1.125rem);
  }

  a {
    color: var(--primary-light);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  a:hover {
    color: var(--accent-color);
    text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
  }

  /* Interactive Elements */
  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xs) var(--space-md);
    background: var(--primary-color);
    color: var(--text-primary);
    border: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    letter-spacing: 0.5px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s;
      z-index: 1;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 20px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2);
      
      &:before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px rgba(59, 130, 246, 0.15);
    }
    
    &:focus-visible {
      outline: 2px solid var(--primary-light);
      outline-offset: 2px;
    }
  }

  /* Links */
  a:hover {
    color: var(--accent-color);
    text-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
  }

  /* Social Links & Icons */
  .social-link, .icon-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%);
      transform: scale(0);
      opacity: 0;
      transition: all 0.4s ease;
    }
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: var(--glow-accent);
      z-index: 1;
      
      &:before {
        transform: scale(1.5);
        opacity: 0.8;
      }
    }
  }

  /* Navigation Links */
  .nav-link {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--accent-color);
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
      
      &:after {
        width: 100%;
      }
    }
  }

  /* Layout */
  .container {
    width: 90%;
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  section {
    padding: var(--space-xxl) 0;
  }

  /* Grid System */
  .grid {
    display: grid;
    gap: var(--space-md);
    grid-template-columns: repeat(12, 1fr);
  }

  /* Responsive Design */
  @media (max-width: 1280px) {
    .container { max-width: var(--container-lg); }
  }

  @media (max-width: 1024px) {
    .container { max-width: var(--container-md); }
    section { padding: var(--space-xl) 0; }
  }

  @media (max-width: 768px) {
    html { font-size: 15px; }
    .container { 
      max-width: var(--container-sm);
      padding: 0 var(--space-sm);
    }
    .grid { grid-template-columns: repeat(6, 1fr); }
  }

  @media (max-width: 640px) {
    html { font-size: 14px; }
    section { padding: var(--space-lg) 0; }
    .grid { grid-template-columns: repeat(4, 1fr); }
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .flex { display: flex; }
  .flex-center { 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gap-sm { gap: var(--space-sm); }
  .gap-md { gap: var(--space-md); }
  .gap-lg { gap: var(--space-lg); }

  /* Enhanced Card Styles */
  .card {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--box-shadow);
      border-color: var(--primary-color);
    }
  }

  /* Text Selection */
  ::selection {
    background: var(--primary-color);
    color: white;
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .flex { display: flex; }
  .flex-center { 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gap-sm { gap: var(--space-sm); }
  .gap-md { gap: var(--space-md); }
  .gap-lg { gap: var(--space-lg); }
`;

export default GlobalStyles; 

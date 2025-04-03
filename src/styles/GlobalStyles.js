import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Enhanced Color Palette */
    --primary-color: #9333EA;
    --primary-dark: #6B21A8;
    --primary-light: #A855F7;
    --secondary-color: #7E22CE;
    --accent-color: #D8B4FE;
    
    /* Refined Background Colors */
    --background-color: #0F0A1A;
    --background-light: #1A1625;
    --background-accent: #231C34;
    
    /* Enhanced Text Colors */
    --text-primary: #F8F9FA;
    --text-secondary: #CED4DA;
    --text-accent: #E9ECEF;
    
    /* Refined UI Elements */
    --card-bg: rgba(26, 22, 37, 0.7);
    --border-color: rgba(147, 51, 234, 0.2);
    --hover-color: rgba(147, 51, 234, 0.1);
    
    /* Enhanced Shadows */
    --box-shadow: 0 8px 30px rgba(147, 51, 234, 0.15);
    --text-shadow: 0 2px 10px rgba(147, 51, 234, 0.2);
    
    /* Transitions */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Glow Effects */
    --glow-primary: 0 0 20px rgba(147, 51, 234, 0.5);
    --glow-secondary: 0 0 25px rgba(168, 85, 247, 0.5);
    --glow-accent: 0 0 30px rgba(216, 180, 254, 0.5);
    
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
    
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 15% 15%, rgba(147, 51, 234, 0.08) 0%, transparent 35%),
        radial-gradient(circle at 85% 85%, rgba(124, 58, 237, 0.08) 0%, transparent 45%),
        radial-gradient(circle at 85% 15%, rgba(168, 85, 247, 0.08) 0%, transparent 35%),
        radial-gradient(circle at 15% 85%, rgba(147, 51, 234, 0.08) 0%, transparent 40%);
      animation: gradientAnimation 20s ease infinite alternate;
      z-index: -1;
    }

    &:after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.4;
      z-index: -1;
      pointer-events: none;
    }
  }

  @keyframes gradientAnimation {
    0% {
      transform: scale(1) rotate(0deg);
      background-position: 0% 0%;
    }
    50% {
      transform: scale(1.05) rotate(0.5deg);
      background-position: 100% 100%;
    }
    100% {
      transform: scale(1) rotate(0deg);
      background-position: 0% 0%;
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
    text-shadow: 0 0 8px rgba(216, 180, 254, 0.5);
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
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }

    &:hover:before {
      width: 300%;
      height: 300%;
    }
  }

  /* Links */
  a:hover {
    color: var(--accent-color);
  }

  /* Social Links & Icons */
  .social-link, .icon-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--glow-accent);
    }
  }

  /* Navigation Links */
  .nav-link {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      color: var(--accent-color);
      text-shadow: 0 0 8px rgba(216, 180, 254, 0.3);
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
`;

export default GlobalStyles; 
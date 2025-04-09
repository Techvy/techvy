import { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// Wave divider component
const WaveDivider = ({ position = 'top', inverted = false }) => {
  return (
    <WaveContainer position={position} inverted={inverted}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </WaveContainer>
  );
};

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
  
  ${props => props.position === 'top' ? 'top: 0;' : 'bottom: 0;'}
  ${props => props.inverted && 'transform: rotate(180deg);'}
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
    
    @media (max-width: 768px) {
      height: 50px;
    }
  }
  
  .shape-fill {
    fill: rgba(147, 51, 234, 0.1);
    animation: wave-animation 12s linear infinite alternate;
  }
  
  @keyframes wave-animation {
    0% {
      d: path("M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z");
    }
    50% {
      d: path("M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z");
    }
    100% {
      d: path("M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z");
    }
  }
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner>
              <SpinnerRing></SpinnerRing>
              <LoadingText>Loading</LoadingText>
            </LoadingSpinner>
          </LoadingScreen>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const SpinnerRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid var(--primary-color);
    border-right: 4px solid var(--accent-color);
    animation: spin 1.5s linear infinite;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid var(--accent-color);
    border-left: 4px solid var(--primary-color);
    animation: spin 1s linear infinite reverse;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color), var(--primary-color));
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 2s linear infinite;
  letter-spacing: 2px;
  
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export default App;
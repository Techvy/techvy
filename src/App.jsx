import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <MainContent>
        <section>
          <div className="container">
            <Hero />
          </div>
        </section>
        
        <section>
          <div className="container">
            <About />
          </div>
        </section>
        
        <section>
          <div className="container">
            <Skills />
          </div>
        </section>
      </MainContent>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
`;

const MainContent = styled.main`
  flex: 1;

  section {
    padding: var(--space-xxl) 0;
    background: var(--background-color);
    
    .container {
      position: relative;
    }
  }

  /* Responsive section padding */
  @media (max-width: 768px) {
    section {
      padding: var(--space-xl) 0;
    }
  }

  @media (max-width: 640px) {
    section {
      padding: var(--space-lg) 0;
    }
  }
`;

export default App;

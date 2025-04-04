import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../../assets/main.jpg';

const About = () => {
  return (
    <AboutSection id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>About Me</SectionTitle>
      </motion.div>

      <AboutContainer>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AboutText>
              <p>
I specialize in creating custom software solutions that genuinely make a difference in your business. Whether you need engaging Discord bots to connect better with your community, comprehensive full-stack web applications to help your business grow, or reliable automation tools to simplify repetitive tasks—I’ve got you covered.
              </p>
              <p>
I believe good software is more than just code—it's about making things simple, efficient, and user-friendly. My goal is always to build clean, scalable solutions that perfectly match your specific needs. I'm comfortable working on both frontend and backend, meaning you'll get a well-rounded product built thoughtfully from start to finish.
              </p>
              <p>
Need a responsive and attractive website to showcase your brand? Want an intelligent Discord bot that boosts engagement and interaction? Looking for automation tools to save valuable time and resources? I deliver practical solutions that focus directly on user experience and measurable results.
              </p>
              <p>
In the world of software development, quality and practicality come first. I understand your goals and tailor each project specifically to achieve them effectively. Mediocre results aren't an option—I strive for excellence and ensure that the software I deliver adds real value to your business.
              </p>
            </AboutText>
          </motion.div>

          <Stats>
            {[
              { value: '20+', label: 'Discord Bots Created' },
              { value: '30+', label: 'Web Projects' },
              { value: '15+', label: 'Automation Tools' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <StatItem>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              </motion.div>
            ))}
          </Stats>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >

          </motion.div>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: rgba(98, 0, 234, 0.03);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.4s ease;
    box-shadow: 0 0 8px var(--primary-color);
  }
  
  &:hover {    
    &:after {
      width: 100%;
      box-shadow: 
        0 0 10px var(--primary-color),
        0 0 20px var(--primary-color);
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const AboutContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--box-shadow);
  }
`;

const AboutText = styled.div`
  margin-bottom: 2.5rem;
  
  p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.1rem;
    
    &:first-child {
      font-size: 1.2rem;
      color: var(--text-accent);
    }
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  
  @media (max-width: 992px) {
    justify-content: center;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  background: var(--hover-color);
  min-width: 180px;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    background: var(--background-accent);
    box-shadow: var(--box-shadow);
  }
  
  @media (max-width: 992px) {
    min-width: 150px;
  }
`;

const StatValue = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-accent);
  font-weight: 500;
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
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
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
    
    &:before {
      width: 300%;
      height: 300%;
    }
  }
`;

export default About; 

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 80 },
    { name: 'Python', icon: <FaPython />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <SkillsSection id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>My Skills</SectionTitle>
      </motion.div>

      <SkillsContainer>
        <SkillsOverview>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <OverviewText>
              <p>
I'm not your average developer—I'm someone who genuinely understands the game and plays it well. My job isn't just writing code; it's about turning powerful ideas into real-world solutions that actually work. I don’t chase average—I chase excellence, and I deliver every single time.

When it comes to Discord bots, I don’t do standard. Anyone can build basic bots, but what I create goes far beyond ordinary. Whether it's advanced moderation features or engaging games that keep users coming back, my bots make your server the place people actually want to be.

On the web side, I build full-stack solutions that aren’t just functional—they're sleek, fast, and user-friendly. Whether it's your personal brand portfolio, a professional business website, or a complex web application, my projects always stand out because they perform better, look sharper, and simply deliver more.

Automation isn't just a buzzword for me—it’s how I help businesses dominate their workflow. I pinpoint inefficiencies, eliminate repetitive tasks, and create powerful automation tools that drastically boost productivity and efficiency.
              </p>
              <p>
Look, if average is your standard, I'm probably not your guy. But if you're looking for someone who delivers real quality, real solutions, and real results—then you've found exactly the developer you're looking for.
              </p>
            </OverviewText>
          </motion.div>
        </SkillsOverview>

        <SkillsDetails>
          <SkillCategory>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Development Skills
            </motion.h3>
            
            <SkillsGrid
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} variants={itemVariants}>
                  <SkillIconContainer>
                    {skill.icon}
                  </SkillIconContainer>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <SkillBar>
                      <SkillProgress width={skill.level} />
                    </SkillBar>
                    <SkillDescription>
                      {skill.name === 'Python' && 'Discord bots & Automation'}
                      {skill.name === 'JavaScript' && 'Web & Bot Development'}
                      {skill.name === 'React' && 'Frontend Applications'}
                      {skill.name === 'Next.js' && 'Full-stack Development'}
                      {skill.name === 'HTML5' && 'Structure & Semantics'}
                      {skill.name === 'CSS3' && 'Styling & Animations'}
                    </SkillDescription>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategory>
        </SkillsDetails>
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 100px 0;
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

const SkillsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
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

const SkillsOverview = styled.div`
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const OverviewText = styled.div`
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
`;

const SkillsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
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
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  height: 60px;
  font-size: 2.2rem;
  color: var(--primary-color);
  background: var(--hover-color);
  border-radius: 12px;
  transition: var(--transition);
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--background-accent);
  transition: var(--transition);
  border: 1px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--box-shadow);
    
    ${SkillIconContainer} {
      transform: scale(1.1);
      color: var(--primary-light);
    }
  }
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-accent);
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--hover-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  border-radius: 4px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const SkillDescription = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

export default Skills; 

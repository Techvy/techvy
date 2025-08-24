import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaArrowDown, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E44D26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, level: 80, color: '#61DAFB' },
    { name: 'Python', icon: <FaPython />, level: 85, color: '#3776AB' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 75, color: '#000000' },
  ];
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.skill-item');
      const overviewBox = document.querySelector('.overview-text');
      const depth = 30;
      
      const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
      
      cards.forEach((card, index) => {
        const factor = (index % 3 + 1) * 0.5;
        const xMove = xPos * depth * factor;
        const yMove = yPos * depth * factor;
        card.style.transform = `translate3d(${xMove}px, ${yMove}px, 0) scale(1.02)`;
      });
      
      if (overviewBox) {
        overviewBox.style.transform = `translate3d(${-xPos * 15}px, ${-yPos * 15}px, 0)`;
      }
    };
    
    const resetPositions = () => {
      const cards = document.querySelectorAll('.skill-item');
      const overviewBox = document.querySelector('.overview-text');
      
      cards.forEach(card => {
        card.style.transform = 'translate3d(0, 0, 0)';
      });
      
      if (overviewBox) {
        overviewBox.style.transform = 'translate3d(0, 0, 0)';
      }
    };
    
    const skillSection = document.getElementById('skills');
    
    if (skillSection) {
      skillSection.addEventListener('mousemove', handleMouseMove);
      skillSection.addEventListener('mouseleave', resetPositions);
    }
    
    return () => {
      if (skillSection) {
        skillSection.removeEventListener('mousemove', handleMouseMove);
        skillSection.removeEventListener('mouseleave', resetPositions);
      }
    };
  }, []);
  
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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contact') || document.getElementById('portfolio');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <SkillsSection id="skills">
      <ParallaxItem className="parallax-bg-1" depth={20} />
      <ParallaxItem className="parallax-bg-2" depth={40} />
      <ParallaxItem className="parallax-bg-3" depth={15} />
      
      <FloatingIcon style={{ top: '15%', left: '10%', animationDelay: '1s', color: '#61DAFB', fontSize: '30px' }}>
        <FaReact />
      </FloatingIcon>
      <FloatingIcon style={{ top: '25%', right: '15%', animationDelay: '2s', color: '#68A063', fontSize: '35px' }}>
        <FaNodeJs />
      </FloatingIcon>
      <FloatingIcon style={{ top: '60%', left: '8%', animationDelay: '0s', color: '#4DB33D', fontSize: '28px' }}>
        <SiMongodb />
      </FloatingIcon>
      <FloatingIcon style={{ top: '80%', right: '20%', animationDelay: '1.5s', color: '#F7DF1E', fontSize: '25px' }}>
        <FaJs />
      </FloatingIcon>
      <FloatingIcon style={{ top: '35%', left: '25%', animationDelay: '0.5s', color: '#FFCA28', fontSize: '32px' }}>
        <SiFirebase />
      </FloatingIcon>
      <FloatingIcon style={{ bottom: '20%', right: '12%', animationDelay: '2.5s', color: '#F05032', fontSize: '30px' }}>
        <FaGit />
      </FloatingIcon>
      <FloatingIcon style={{ bottom: '35%', left: '18%', animationDelay: '1.8s', color: '#38B2AC', fontSize: '32px' }}>
        <SiTailwindcss />
      </FloatingIcon>
      


      <SkillsContainer>
        <SkillsOverview>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <OverviewText className="overview-text">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="reveal-bar"
              ></motion.div>
              <p>
                <span className="highlight">As a developer</span>, I'm not your average dev. I understand the game and I play to win. I don’t just write code I build solutions that work, deliver real impact, and stand out. I don’t settle for "good enough"; I push for great and make sure it happens every time.
              </p>
              <SkillTags>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Web Development
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Discord Bots
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Full-Stack Applications
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Automation Tools
                </motion.span>
              </SkillTags>
              <p className="highlight-text">
                <span className="highlight-wrapper">
If you're cool with average, I'm not your guy. But if you want real quality, real results, and a dev who doesn't miss—then yeah, we should talk.
                </span>
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
              className="skill-heading"
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
                <SkillItem 
                  key={skill.name} 
                  variants={itemVariants} 
                  className="skill-item"
                >
                  <SkillIconContainer style={{ color: skill.color, background: `${skill.color}10` }}>
                    {skill.icon}
                    <IconGlow style={{ background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)` }} />
                  </SkillIconContainer>
                  <SkillInfo>
                    <SkillName>
                      {skill.name}
                    </SkillName>
                    <SkillPercentage>{skill.level}%</SkillPercentage>
                    <SkillBar>
                      <ProgressContainer>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          style={{ height: '100%' }}
                        >
                          <SkillProgress color={skill.color} />
                        </motion.div>
                      </ProgressContainer>
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
      
      <ScrollButton onClick={scrollToNextSection}>
        <FaArrowDown />
      </ScrollButton>
    </SkillsSection>
  );
};

const ParallaxItem = styled.div`
  position: absolute;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.05;
  border-radius: 50%;
  z-index: 0;
  filter: blur(40px);
  transition: transform 0.3s ease-out;
  
  &.parallax-bg-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
    animation: pulse 15s infinite alternate;
  }
  
  &.parallax-bg-2 {
    width: 350px;
    height: 350px;
    bottom: 20%;
    right: 10%;
    background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
    animation: pulse 12s 2s infinite alternate;
  }
  
  &.parallax-bg-3 {
    width: 250px;
    height: 250px;
    top: 40%;
    right: 20%;
    background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
    animation: pulse 10s 1s infinite alternate;
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.03;
      transform: scale(1);
    }
    50% {
      opacity: 0.06;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.03;
      transform: scale(1);
    }
  }
`;

const SkillsSection = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.05) 0%, rgba(10, 10, 15, 0) 70%),
               radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, rgba(10, 10, 15, 0) 70%);
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 800;
  letter-spacing: 0.5px;
  background: linear-gradient(
    135deg,
    var(--text-color) 0%,
    var(--primary-color) 50%,
    var(--accent-color) 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const TitleHighlight = styled.span`
  position: absolute;
  height: 1rem;
  width: 4rem;
  background: var(--primary-color);
  opacity: 0.1;
  border-radius: 4px;
  bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
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
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.03) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SkillsOverview = styled.div`
  margin-bottom: 3.5rem;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
  justify-content: center;
  
  span {
    background: var(--background-accent);
    padding: 0.7rem 1.4rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-accent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: default;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &:nth-child(1) {
      border-left: 4px solid #38BDF8;
    }
    
    &:nth-child(2) {
      border-left: 4px solid #3B82F6;
    }
    
    &:nth-child(3) {
      border-left: 4px solid #60A5FA;
    }
    
    &:nth-child(4) {
      border-left: 4px solid #0EA5E9;
    }
  }
  
  @media (max-width: 768px) {
    gap: 0.7rem;
    
    span {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
  }
`;

const OverviewText = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: center;
    padding: 0 1rem;
    
    .highlight {
      color: var(--accent-color);
      font-weight: 600;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 6px;
        background: var(--accent-color);
        bottom: 0;
        left: 0;
        opacity: 0.1;
        border-radius: 10px;
      }
    }
    
    &:first-child {
      font-size: 1.2rem;
      color: var(--text-accent);
      font-weight: 500;
    }
    
    &.highlight-text {
      position: relative;
      padding: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      margin-top: 1.2rem;
      text-align: center;
      
      .highlight-wrapper {
      font-weight: 700;
        font-size: 1.2rem;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
        letter-spacing: 0.03em;
        text-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
        
        /* Add these properties to ensure text is more visible */
        color: var(--primary-color); /* Fallback color */
        filter: brightness(1.4) contrast(1.2);
        animation: pulse-text 3s infinite;
      }
      
      /* Remove the black box background */
      &:before {
        content: none;
      }
      
      @keyframes pulse-text {
        0%, 100% {
          opacity: 1;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        50% {
          opacity: 0.9;
          text-shadow: 0 0 30px rgba(56, 189, 248, 0.7);
        }
      }
    }
  }
  
  background: rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  .reveal-bar {
    position: absolute;
    height: 5px;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color));
    background-size: 200% 100%;
    border-radius: 5px;
    animation: gradientMove 3s ease infinite;
    
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  }
  
  /* Add gradient border to make the container stand out */
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(56, 189, 248, 0.1));
    border-radius: 18px;
    z-index: -1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    p {
      font-size: 1rem;
      padding: 0;
      
      &:first-child {
        font-size: 1.1rem;
      }
      
      &.highlight-text {
        font-size: 1rem;
      }
    }
  }
`;

const SkillsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SkillCategory = styled.div`
  h3.skill-heading {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;
    padding-bottom: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: all 0.4s ease;
      box-shadow: 0 0 8px var(--primary-color);
      border-radius: 2px;
    }
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const IconGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const SkillIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 70px;
  font-size: 2.5rem;
  border-radius: 16px;
  transition: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    z-index: 1;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding: 1.8rem;
  border-radius: 16px;
  background: var(--background-accent);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), transparent);
    opacity: 1;
  }
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-accent);
  letter-spacing: 0.5px;
`;

const SkillPercentage = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  position: absolute;
  top: -22px;
  right: 0;
  opacity: 0.8;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => `linear-gradient(90deg, ${props.color}, ${props.color}99)`};
  border-radius: 7px;
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
      rgba(255, 255, 255, 0.3),
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
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
`;

const ScrollButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(10, 10, 15, 0.6);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: float 2s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  svg {
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 8px currentColor);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    font-size: 1.2rem;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.2;
  filter: drop-shadow(0 0 10px currentColor);
  animation: floatIcon 6s ease-in-out infinite;
  pointer-events: none;
  
  @keyframes floatIcon {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }
  
  @media (max-width: 768px) {
    opacity: 0.1;
  }
`;

export default Skills; 

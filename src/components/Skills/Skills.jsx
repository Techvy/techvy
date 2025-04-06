import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaArrowDown, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 80 },
    { name: 'Python', icon: <FaPython />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
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
            <OverviewText className="overview-text">
              <p>
I'm not your average dev—I'm the one who actually gets the game and plays to win. I don't just write code; I build real solutions that work and hit hard. I don't chase "good enough." I chase great, and I deliver—every single time.
              </p>
              <p>
Basic Discord bots? That's kid stuff. What I build? Advanced, engaging, and unforgettable. Whether it's next-level moderation or bots that make your server the place to be, I bring fire to the table.
              </p>
              <p>
Web? Full-stack, end-to-end, clean, fast, and built to impress. Whether it's a sleek portfolio, a pro-grade business site, or a complex web app, I make it look good and run even better.
              </p>
              <p>
Automation? That's my playground. I don't just automate—I obliterate inefficiencies. If your workflow's a mess, I'll turn it into a machine.
              </p>
              <p className="highlight-text">
If you're cool with average, I'm not your guy. But if you want real quality, real results, and a dev who doesn't miss—then yeah, we should talk.
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
                <SkillItem key={skill.name} variants={itemVariants} className="skill-item">
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
  
  &.parallax-bg-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 5%;
  }
  
  &.parallax-bg-2 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    right: 10%;
  }
  
  &.parallax-bg-3 {
    width: 200px;
    height: 200px;
    top: 40%;
    right: 20%;
  }
`;

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
    text-align: left;
    padding: 0 1rem;
    
    &:first-child {
      font-size: 1.2rem;
      color: var(--text-accent);
      font-weight: 500;
    }
    
    &:last-child {
      font-weight: 700;
      font-size: 1.15rem;
      background: linear-gradient(90deg, #ff7b00, #ff2d95);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      letter-spacing: 0.02em;
      text-shadow: 0 0 30px rgba(255, 45, 149, 0.3);
      position: relative;
      padding: 0.5rem 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 0.5rem;
    }
    
    &.highlight-text {
      font-weight: 700;
      font-size: 1.15rem;
      background: linear-gradient(90deg, #ff7b00, #ff2d95);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      letter-spacing: 0.02em;
      text-shadow: 0 0 30px rgba(255, 45, 149, 0.3);
      position: relative;
      padding: 0.5rem 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 0.5rem;
    }
  }
  
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    p {
      font-size: 1rem;
      padding: 0;
      
      &:first-child {
        font-size: 1.1rem;
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

const ScrollButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: float 2s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 0, 0, 0.3);
    color: #ff7b00;
    box-shadow: 0 8px 30px rgba(255, 123, 0, 0.3);
    animation: float 2s ease-in-out infinite, glow 1.5s ease-in-out infinite;
  }
  
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
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(255, 123, 0, 0.3), 0 0 10px rgba(255, 123, 0, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 123, 0, 0.6), 0 0 30px rgba(255, 123, 0, 0.4);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 123, 0, 0.3), 0 0 10px rgba(255, 123, 0, 0.2);
    }
  }
  
  svg {
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
    display: none;
  }
`;

export default Skills; 

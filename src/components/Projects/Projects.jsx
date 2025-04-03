import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product search, filtering, cart functionality, and payment integration.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+1',
      category: 'web',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application that displays current weather conditions and forecasts for locations worldwide.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+2',
      category: 'web',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with user authentication and real-time updates.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+3',
      category: 'app',
      technologies: ['React', 'Firebase', 'Material UI'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience with a modern UI design.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+4',
      category: 'web',
      technologies: ['React', 'Styled Components', 'Framer Motion'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile application for tracking workouts, progress, and fitness goals with data visualization.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+5',
      category: 'app',
      technologies: ['React Native', 'Redux', 'Chart.js'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for publishing and managing blog posts with categories and user comments.',
      image: 'https://via.placeholder.com/600x400/333/666?text=Project+6',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    }
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'App', value: 'app' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ProjectsSection id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>Recent work I've done</SectionSubtitle>
      </motion.div>

      <ProjectsContainer>
        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              active={activeFilter === filter.value}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.name}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} variants={itemVariants}>
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: rgba(98, 0, 234, 0.02);
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
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'rgba(98, 0, 234, 0.2)'};
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(98, 0, 234, 0.1)'};
    transform: translateY(-3px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--box-shadow);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  
  &:hover {
    img {
      transform: scale(1.1);
    }
    
    div {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(98, 0, 234, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateY(-3px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: rgba(157, 78, 221, 0.1);
  border-radius: 30px;
  font-size: 0.8rem;
  color: var(--accent-color);
`;

export default Projects; 
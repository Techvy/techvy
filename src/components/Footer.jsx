import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <FooterContainer>
        <ScrollTopButton>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={800}>
            <FaArrowUp />
          </Link>
        </ScrollTopButton>
        
        <FooterContent>
          <LogoArea>
            <LogoText>Portfolio</LogoText>
            <FooterText>
              Creating beautiful digital experiences with clean, efficient code.
            </FooterText>
          </LogoArea>
          
          <QuickLinks>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterNav>
              <NavItem>
                <StyledLink to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                  Home
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  About
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                  Skills
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                  Projects
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                  Contact
                </StyledLink>
              </NavItem>
            </FooterNav>
          </QuickLinks>
          
          <SocialArea>
            <FooterTitle>Connect With Me</FooterTitle>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </SocialArea>
        </FooterContent>
        
        <FooterDivider />
        
        <Copyright>
          <CopyrightText>
            © {currentYear} Portfolio. All Rights Reserved.
          </CopyrightText>
          <CreditsText>
            Designed & Built with <HeartIcon>♥</HeartIcon> by Techvy
          </CreditsText>
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #121212;
  padding: 60px 0 30px;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ScrollTopButton = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: var(--secondary-color);
    transform: translateX(-50%) translateY(-5px);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LogoArea = styled.div``;

const LogoText = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const QuickLinks = styled.div``;

const FooterTitle = styled.h3`
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--primary-color);
  }
`;

const FooterNav = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  margin-bottom: 0.8rem;
`;

const StyledLink = styled(Link)`
  color: var(--text-secondary);
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    color: var(--accent-color);
    padding-left: 5px;
  }
`;

const SocialArea = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(157, 78, 221, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CreditsText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const HeartIcon = styled.span`
  color: #f64747;
`;

export default Footer; 
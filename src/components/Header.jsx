import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      const sections = ['hero', 'about', 'skills', 'projects'];
      let currentSection = 'hero';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoIcon>
            <FaCode />
          </LogoIcon>
          <LogoText>Techvy</LogoText>
        </Logo>

        <MenuButton 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: 1,
            rotate: menuOpen ? 90 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <AnimatePresence>
          <NavLinks 
            menuOpen={menuOpen}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <NavItem
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.to)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <NavLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className={activeSection === item.to ? 'active' : ''}
                >
                  {item.name}
                  {activeSection === item.to && (
                    <ActiveIndicator layoutId="activeIndicator" />
                  )}
                  {hoveredItem === item.to && activeSection !== item.to && (
                    <HoverIndicator layoutId="hoverIndicator" />
                  )}
                </NavLink>
              </NavItem>
            ))}
            
            <NavItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
            >
              <ContactButton
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://discord.com/users/1250413029607084043/', '_blank');
                  setMenuOpen(false);
                }}
              >
                Contact Me
              </ContactButton>
            </NavItem>
          </NavLinks>
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: ${props => (props.scrolled ? '0.5rem 0' : '1rem 0')};
  background-color: ${props => 
    props.scrolled ? 'rgba(26, 22, 37, 0.85)' : 'transparent'};
  backdrop-filter: ${props => (props.scrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: ${props => 
    props.scrolled ? '0 4px 20px rgba(157, 78, 221, 0.15)' : 'none'};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${props => 
      props.scrolled ? 'linear-gradient(to right, transparent, rgba(157, 78, 221, 0.2), transparent)' : 'transparent'};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 0 15px rgba(157, 78, 221, 0.3);
  transform: rotate(-10deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0deg) scale(1.1);
    box-shadow: 0 0 20px rgba(157, 78, 221, 0.5);
  }
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(45deg, var(--accent-color), var(--primary-color));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientText 5s ease infinite;

  @keyframes gradientText {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  &:hover {
    text-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  border: none;
  outline: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 0;
    z-index: 1001;
  }
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  list-style: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(26, 22, 37, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
    gap: 2rem;
    transform: ${props => (props.menuOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${props => (props.menuOpen ? '1' : '0')};
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
`;

const NavItem = styled(motion.li)`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px var(--primary-color);
  }
  
  &:hover, &.active {
    color: var(--primary-color);
    text-shadow: 0 0 8px rgba(147, 51, 234, 0.3);
    
    &:after {
      width: 100%;
      box-shadow: 0 0 15px var(--primary-color);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    
    &:hover {
      background-color: rgba(98, 0, 234, 0.1);
      box-shadow: inset 0 0 15px rgba(147, 51, 234, 0.2);
    }
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
  border-radius: 2px;
  box-shadow: 0 0 10px var(--primary-color);
`;

const HoverIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--accent-color), var(--primary-color));
  border-radius: 2px;
  box-shadow: 0 0 8px var(--accent-color);
  opacity: 0.7;
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  z-index: 5;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.6s;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3), 0 0 15px rgba(56, 189, 248, 0.4);
    
    &:before {
      left: 100%;
    }
    
    &:after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 70%;
    padding: 0.8rem 1.5rem;
    margin-top: 1rem;
  }
`;

export default Header; 

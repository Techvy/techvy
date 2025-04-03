import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
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
  ];

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoText>Portfolio</LogoText>
        </Logo>

        <MenuButton onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavLinks menuOpen={menuOpen}>
          {menuItems.map((item, index) => (
            <NavItem
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                delay={0}
                isDynamic={true}
                spyThrottle={50}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>
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
  transition: var(--transition);
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
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--primary-light);
    text-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
  }
`;

const MenuButton = styled.button`
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
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);
    padding: 1rem 0;
    gap: 0;
    transform: ${props => (props.menuOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${props => (props.menuOpen ? '1' : '0')};
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
    
    &:hover {
      background-color: rgba(98, 0, 234, 0.1);
      box-shadow: inset 0 0 15px rgba(147, 51, 234, 0.2);
    }
  }
`;

export default Header; 
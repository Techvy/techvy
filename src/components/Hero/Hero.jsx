import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';
import profileImage from '../../assets/main.jpg';
import { TypeAnimation } from 'react-type-animation';
import toast, { Toaster } from 'react-hot-toast';

const Hero = () => {
  const handleViewWork = (e) => {
    e.preventDefault();
    toast.custom((t) => (
      <CustomToast $visible={t.visible}>
        <ToastIcon>🎨</ToastIcon>
        <ToastContent>
          <ToastTitle>Projects Section Coming Soon!</ToastTitle>
          <ToastMessage>We're crafting something amazing for you to see.</ToastMessage>
        </ToastContent>
      </CustomToast>
    ), {
      duration: 2000,
      position: 'top-center',
      style: {
        marginTop: '100px',
      },
    });
  };

  const handleContact = (e) => {
    e.preventDefault();
    toast.custom((t) => (
      <CustomToast $visible={t.visible}>
        <ToastIcon>💬</ToastIcon>
        <ToastContent>
          <ToastTitle>Redirecting to Discord</ToastTitle>
          <ToastMessage>Taking you to my Discord profile...</ToastMessage>
        </ToastContent>
      </CustomToast>
    ), {
      duration: 2000,
      position: 'top-center',
      style: {
        marginTop: '100px',
      },
    });

    // Redirect after toast shows
    setTimeout(() => {
      window.open('https://discord.com/users/1250413029607084043/', '_blank');
    }, 1000);
  };

  return (
    <HeroSection id="hero">
      <Toaster
        containerStyle={{
          zIndex: 1000,
          top: 0,
        }}
        toastOptions={{
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
      <HeroContainer>
        <ContentContainer>
          <TextContainer>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Techvy
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Discord Bot Developer',
                  2000,
                  'Web Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Automation Expert',
                  2000
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I build exceptional and accessible digital experiences for the web.
            </motion.p>
            <ButtonGroup>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <PrimaryButton
                  onClick={handleViewWork}
                  style={{ cursor: 'pointer' }}
                >
                  View My Work
                </PrimaryButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <SecondaryButton
                  onClick={handleContact}
                  style={{ cursor: 'pointer' }}
                >
                  Contact Me
                </SecondaryButton>
              </motion.div>
            </ButtonGroup>
            <SocialContainer>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <SocialLink href="https://github.com/techvy" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <SocialLink href="https://discord.com/users/1250413029607084043/" target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </SocialLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <SocialLink href="https://instagram.com/techvy_" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialLink>
              </motion.div>
            </SocialContainer>
          </TextContainer>
          <ImageContainer>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <HeroImageWrapper>
                <img src={profileImage} alt="Profile" />
              </HeroImageWrapper>
            </motion.div>
            <BackgroundBlur
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </ImageContainer>
        </ContentContainer>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 600px;
  
  span {
    display: block;
    font-size: 1.1rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    line-height: 1.2;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
  }
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 500px;
    line-height: 1.6;
  }
  
  @media (max-width: 992px) {
    margin-top: 2rem;
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      margin: 0 auto 2rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.button`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
`;

const SecondaryButton = styled.button`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: rgba(157, 78, 221, 0.1);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(157, 78, 221, 0.1);
  border-radius: 50%;
  color: var(--accent-color);
  font-size: 1.2rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--primary-color);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 0 20px var(--primary-color),
                0 0 35px var(--primary-color),
                0 0 50px rgba(157, 78, 221, 0.3);

    &:before {
      opacity: 0.5;
      transform: scale(1.5);
    }
  }

  svg {
    filter: drop-shadow(0 0 8px currentColor);
    transition: all 0.3s ease;
  }

  &:hover svg {
    filter: drop-shadow(0 0 12px white);
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  flex: 0 1 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 400px;
  margin-left: auto;
  
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 2rem;
    height: 350px;
    justify-content: center;
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 3;
  overflow: hidden;
  transition: transform 0.3s ease;
  aspect-ratio: 1/1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundBlur = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(157, 78, 221, 0) 70%);
  filter: blur(60px);
  z-index: 1;
  
  @media (max-width: 992px) {
    width: 400px;
    height: 400px;
  }
`;

const HeroText = styled.div`
  text-align: left;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(
      45deg,
      var(--text-color) 30%,
      var(--primary-color) 50%,
      var(--text-color) 70%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: shine 5s linear infinite;
    
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`;

const CustomToast = styled(motion.div)`
  padding: 16px 20px;
  background: rgba(157, 78, 221, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(157, 78, 221, 0.2);
  opacity: ${props => props.$visible ? 1 : 0};
  transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(-20px)'};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1000;
  margin-top: 1rem;
`;

const ToastIcon = styled.span`
  font-size: 24px;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToastTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const ToastMessage = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 4px 0 0;
`;

export default Hero; 
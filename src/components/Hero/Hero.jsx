import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaDiscord, FaInstagram, FaCode } from 'react-icons/fa';
import profileImage from '../../assets/main.jpg';
import { TypeAnimation } from 'react-type-animation';
import toast, { Toaster } from 'react-hot-toast';

// Add Google Font import
const GoogleFontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap"
    rel="stylesheet"
  />
);

const Hero = () => {
  const canvasRef = useRef(null);
  const heroImageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let hue = 250;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      
      hue += 0.5;
      if (hue > 360) hue = 0;
      
      requestAnimationFrame(animate);
    };

    animate();
    canvas.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

    setTimeout(() => {
      window.open('https://discord.com/users/1250413029607084043/', '_blank');
    }, 1000);
  };

  return (
    <HeroSection id="hero">
      <GoogleFontLink />
      <ParticleCanvas ref={canvasRef} />
      <GlowAccent className="accent-1" />
      <GlowAccent className="accent-2" />
      <GlowAccent className="accent-3" />
      <TopDecoration>
        <CodeIcon>
          <FaCode />
        </CodeIcon>
        <CodeIcon>
          <FaCode />
        </CodeIcon>
        <CodeIcon>
          <FaCode />
        </CodeIcon>
      </TopDecoration>
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
          <TextContainer ref={textContainerRef}>
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
              className="techvy-name"
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
              <HeroImageWrapper ref={heroImageRef}>
                <img src={profileImage} alt="Profile" />
              </HeroImageWrapper>
            </motion.div>
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
  padding-top: 0;
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
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  will-change: transform;
  
  span {
    display: block;
    font-size: 1.1rem;
    color: #60a5fa;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    line-height: 1.2;
    
    &.techvy-name {
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      font-weight: 800;
      font-style: normal;
      letter-spacing: 1.2px;
      color: #fff;
      background: none;
      -webkit-background-clip: unset;
      background-clip: unset;
      -webkit-text-fill-color: unset;
      text-shadow: 0 2px 8px rgba(0,0,0,0.12);
      animation: none;
      position: relative;
      font-size: 3.7rem;
    }
    
    @keyframes techvy-gradient-move {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #60a5fa;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 500px;
    color: var(--text-secondary);
  }
  
  @media (max-width: 992px) {
    flex: 1;
    text-align: center;
    
    p {
      margin-left: auto;
      margin-right: auto;
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
`;

const PrimaryButton = styled.button`
  display: inline-block;
  padding: 0.85rem 2.2rem;
  background: linear-gradient(90deg, #2563eb 0%, #1e293b 100%);
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.08rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.13);
  letter-spacing: 0.7px;
  transition: background 0.2s, box-shadow 0.2s, color 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(90deg, #1e293b 0%, #2563eb 100%);
    color: #fff;
    box-shadow: 0 6px 24px rgba(37, 99, 235, 0.18);
  }

  &:active {
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
  }
`;

const SecondaryButton = styled.button`
  display: inline-block;
  padding: 0.85rem 2.2rem;
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.08rem;
  cursor: pointer;
  box-shadow: none;
  letter-spacing: 0.7px;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #2563eb;
    color: #fff;
    border-color: #2563eb;
  }

  &:active {
    background: #1e293b;
    color: #fff;
    border-color: #1e293b;
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
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.10);
  border-radius: 16px;
  color: #fff;
  font-size: 1.5rem;
  position: relative;
  box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(30, 41, 59, 0.08) inset;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.18s, filter 0.18s;
  outline: none;
  margin-bottom: 2px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(59,130,246,0.08) 100%);
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    filter: brightness(1.15) saturate(1.2);
    box-shadow: 0 8px 32px 0 rgba(30, 41, 59, 0.13), 0 2px 8px 0 rgba(30, 41, 59, 0.10) inset;
    color: #fff;
    transform: scale(1.10);
  }

  &:active {
    background: rgba(255, 255, 255, 0.22);
    filter: brightness(1.05) saturate(1.1);
    box-shadow: 0 2px 8px 0 rgba(30, 41, 59, 0.10) inset;
    color: #fff;
    transform: scale(1.04);
  }

  svg {
    filter: none;
    transition: none;
    transform: none;
    font-size: 1.7em;
    position: relative;
    z-index: 1;
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
  position: relative;
  z-index: 2;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  height: 350px;
  width: 350px;
  transition: none;
  will-change: auto;
  transform-style: flat;
  animation: none;
  
  &::before {
    display: none;
  }
  
  &:hover {
    border-radius: 50%;
    transform: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  }
  
  &:hover::before {
    display: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: none;
    filter: none;
  }
  
  &:hover img {
    transform: none;
    filter: none;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    width: 250px;
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

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const GlowAccent = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
  
  &.accent-1 {
    background: var(--primary-color);
    width: 300px;
    height: 300px;
    top: 10%;
    right: 5%;
    animation: float-accent 12s ease-in-out infinite alternate;
  }
  
  &.accent-2 {
    background: var(--secondary-color);
    width: 250px;
    height: 250px;
    bottom: 15%;
    left: 10%;
    animation: float-accent 15s ease-in-out infinite alternate-reverse;
  }
  
  &.accent-3 {
    background: var(--accent-color);
    width: 200px;
    height: 200px;
    top: 30%;
    left: 20%;
    animation: float-accent 18s ease-in-out infinite alternate;
  }
  
  @keyframes float-accent {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translate(30px, 20px) scale(1.1);
      opacity: 0.5;
    }
    100% {
      transform: translate(10px, 40px) scale(0.9);
      opacity: 0.4;
    }
  }
  
  @media (max-width: 768px) {
    &.accent-1 {
      width: 200px;
      height: 200px;
    }
    
    &.accent-2 {
      width: 180px;
      height: 180px;
    }
    
    &.accent-3 {
      width: 150px;
      height: 150px;
    }
  }
`;

const TopDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const CodeIcon = styled.div`
  position: absolute;
  font-size: 4rem;
  color: rgba(157, 78, 221, 0.1);
  animation: float 8s infinite;
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
    font-size: 3rem;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation-delay: 2s;
    font-size: 5rem;
  }
  
  &:nth-child(3) {
    bottom: 15%;
    left: 20%;
    animation-delay: 4s;
    font-size: 4rem;
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.1;
    }
    50% {
      transform: translate(20px, 20px) rotate(10deg);
      opacity: 0.2;
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.1;
    }
  }
`;

export default Hero; 

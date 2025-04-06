import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';
import profileImage from '../../assets/main.jpg';
import { TypeAnimation } from 'react-type-animation';
import toast, { Toaster } from 'react-hot-toast';

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

    const heroImage = heroImageRef.current;
    const textContainer = textContainerRef.current;
    
    if (heroImage && textContainer) {
      const handleHeroMouseMove = (e) => {
        const hero = e.currentTarget;
        const rect = hero.getBoundingClientRect();
        
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const maxRotation = 7;
        const rotateY = maxRotation * (0.5 - x);
        const rotateX = maxRotation * (y - 0.5);
        
        heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        
        textContainer.style.transform = `perspective(1000px) rotateX(${-rotateX * 0.5}deg) rotateY(${-rotateY * 0.5}deg)`;
      };
      
      const resetHeroTransform = () => {
        heroImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        textContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      };
      
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.addEventListener('mousemove', handleHeroMouseMove);
        heroSection.addEventListener('mouseleave', resetHeroTransform);
        
        setTimeout(() => {
          heroImage.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(-3deg) scale(1.05)';
          setTimeout(() => {
            heroImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
          }, 800);
        }, 500);
        
        return () => {
          heroSection.removeEventListener('mousemove', handleHeroMouseMove);
          heroSection.removeEventListener('mouseleave', resetHeroTransform);
        };
      }
    }
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
      <ParticleCanvas ref={canvasRef} />
      <GlowAccent className="accent-1" />
      <GlowAccent className="accent-2" />
      <GlowAccent className="accent-3" />
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
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  will-change: transform;
  
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
  position: relative;
  z-index: 2;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  height: 350px;
  width: 350px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform;
  transform-style: preserve-3d;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export default Hero; 

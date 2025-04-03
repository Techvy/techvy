import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle>Contact Me</SectionTitle>
        <SectionSubtitle>Let's get in touch</SectionSubtitle>
      </motion.div>
      
      <ContactContainer>
        <ContactInfo>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactHeading>Get in Touch</ContactHeading>
            <ContactText>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </ContactText>
            
            <ContactInfoItems>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaMapMarkerAlt />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Location:</h4>
                  <p>New York, NY, USA</p>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaEnvelope />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Email:</h4>
                  <p>hello@example.com</p>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaPhoneAlt />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Phone:</h4>
                  <p>+1 (123) 456-7890</p>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoItems>
            
            <SocialLinks>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </ContactInfo>
        
        <ContactFormContainer>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                />
              </FormGroup>
              
              <FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </FormButton>
              
              {formStatus && (
                <FormStatusMessage success={formStatus.success}>
                  {formStatus.message}
                </FormStatusMessage>
              )}
            </ContactForm>
          </motion.div>
        </ContactFormContainer>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background-color: rgba(98, 0, 234, 0.03);
  padding: 2.5rem;
  border-radius: 10px;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
`;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const ContactText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactInfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(157, 78, 221, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const ContactInfoContent = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-secondary);
  }
`;

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

const ContactFormContainer = styled.div`
  flex: 1.5;
  background-color: #1a1a1a;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  width: ${props => props.fullWidth ? '100%' : 'calc(50% - 0.75rem)'};
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #222;
  border: 1px solid #333;
  border-radius: 4px;
  color: var(--text-color);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(157, 78, 221, 0.1);
  }
  
  &::placeholder {
    color: #555;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #222;
  border: 1px solid #333;
  border-radius: 4px;
  color: var(--text-color);
  font-size: 1rem;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(157, 78, 221, 0.1);
  }
  
  &::placeholder {
    color: #555;
  }
`;

const FormButton = styled.button`
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1rem;
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormStatusMessage = styled.div`
  margin-top: 1.5rem;
  padding: 0.8rem 1rem;
  width: 100%;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${props => props.success ? 'rgba(46, 213, 115, 0.2)' : 'rgba(246, 71, 71, 0.2)'};
  color: ${props => props.success ? '#2ed573' : '#f64747'};
`;

export default Contact; 
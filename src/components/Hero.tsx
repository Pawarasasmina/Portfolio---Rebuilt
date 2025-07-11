import { useState, useEffect } from 'react';
import leftimage from '../assets/image-1.png';
import rightimage from '../assets/image-2.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import myCV from '../assets/CV-Pawara Sasmina.pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Developer',
    'UI/UX Creator',
    'Mobile App Engineer', 
    
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentRoleIndex, isDeleting, roles]);

  const socialLinks = [
    {
      href: 'https://github.com/Pawarasasmina',
      icon: <FaGithub />, label: 'GitHub', color: 'hover:text',
    },
    {
      href: 'https://linkedin.com/in/pawarasasmina',
      icon: <FaLinkedin />, label: 'LinkedIn', color: 'hover:text-blue-600',
    },

    {
      href: 'https://instagram.com/_p_a_w_a_r_a_',
      icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-neon-magenta',
    },
        {
      href: 'https://facebook.com/pawara.sasmina',
      icon: <FaFacebook />, label: 'Twitter', color: 'hover:text-neon-blue',
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyber-dark via-cyber-dark/80 to-cyber-dark/60 ">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-neon-cyan/10 animate-pulse"
              style={{ animationDelay: `${i * 0.01}s` }}
            />
          ))}
        </div>
      </div>

      {/* Left and Right Images with overlays and fade effects */}
      <AnimatedImages />

  {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-4 sm:left-10 text-white/90 font-mono text-xs sm:text-s animate-float max-w-[80vw] sm:max-w-none whitespace-nowrap">
          const developer = "Pawara Sasmina";
        </div>
        <div className="absolute top-40 right-4 sm:right-20 text-neon-cyan/80 font-mono text-xs sm:text-s animate-float max-w-[80vw] sm:max-w-none whitespace-nowrap" style={{ animationDelay: '1s' }}>
          return innovation;
        </div>
        <div className="absolute bottom-20 left-4 sm:left-20 text-neon-magenta/90 font-mono text-xs sm:text-s animate-float max-w-[80vw] sm:max-w-none whitespace-nowrap" style={{ animationDelay: '2s' }}>
         function createAwesome() {'{'}
        </div>
        <div className="absolute bottom-20 right-4 sm:right-10 text-neon-purple/90 font-mono text-xs sm:text-s animate-float max-w-[80vw] sm:max-w-none whitespace-nowrap" style={{ animationDelay: '3s' }}>
         new Product = createAwesome();
        </div>
      </div>

      {/* One floating code snippet for accent */}
      <div className="absolute top-36 sm:top-24 left-1/2 -translate-x-1/2 text-neon-cyan/80 font-mono text-xs sm:text-sm animate-float pointer-events-none select-none max-w-[90vw] whitespace-nowrap z-10">
        {'// Welcome to my portfolio!'}
      </div>

      <div className="text-center z-[100] relative max-w-4xl mx-auto px-6">
        {/* Name with modern effect */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 tracking-tight relative inline-block">
          <span className="text-gradient bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-purple bg-clip-text text-transparent drop-shadow-lg">
            S.PAWARA SASMINA
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-14 mb-6 flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-mono text-neon-cyan flex items-center gap-2">
            <span className="command-line">{displayText}</span>
            <span className="terminal-cursor animate-blink">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-2xl font-orbitron text-gray-300 mb-10 animate-fade-in">
          <span className="text-neon-magenta font-bold">Engineer</span> by Skill. 
          <span className="text-neon-cyan font-bold"> Artist</span> by Vision.
        </p>

        {/* Level badge */}
        <div className="inline-flex items-center glass-effect rounded-full px-6 py-2 mb-10 border border-neon-green/40 shadow-lg bg-cyber-dark/60">
          <div className="w-2.5 h-2.5 bg-neon-green rounded-full mr-2 animate-pulse"></div>
          <span className="font-orbitron text-neon-green text-sm">Level 2 - Undergraduate @ SLIIT</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-2">
          <button 
            onClick={() => {  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cyber-button px-8 py-3 text-lg font-bold shadow-neon-cyan/30 hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <a
            href={myCV}
            download="CV-Pawara Sasmina.pdf"
            onClick={() => { console.log('Download CV clicked'); }}
            className="cyber-button border-neon-green text-neon-green hover:bg-neon-green hover:text-cyber-dark hover:shadow-neon-green px-8 py-3 text-lg font-bold transition-all flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
            Download CV
          </a>
          <button 
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cyber-button border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-white hover:shadow-neon-magenta px-8 py-3 text-lg font-bold transition-all"
          >
            Initialize Contact
          </button>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center gap-6 mt-8 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
        >
          {socialLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`text-3xl transition-transform duration-300 ${link.color} hover:scale-125 focus:scale-110 focus:outline-none`}
              style={{ filter: 'drop-shadow(0 0 8px #00FFFF88)' }}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Ambient particles (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

import { useRef } from 'react';

const AnimatedImages = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setMounted(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setMounted(true);
    }
  }, [isMobile]);
  return (
    <div className="absolute inset-0 w-full h-full flex justify-between z-10 pointer-events-none">
      {/* Left image */}
      <div
        className="relative h-full w-1/2 max-w-[40vw] min-w-[100px]"
        style={{
          transition: isMobile ? undefined : 'transform 1.2s cubic-bezier(0.4,0,0.2,1)',
          transform: mounted || isMobile
            ? 'translateX(0)'
            : 'translateX(50.1vw)',
        }}
      >
        <img
          src={leftimage}
          alt="left visual"
          className="absolute left-0 top-0 h-full w-full object-cover select-none opacity-80 animate-fade-in-left"
          style={{ zIndex: 1 }}
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/0" style={{ zIndex: 2 }}></div>
      </div>
      {/* Right image */}
      <div
        className="relative h-full w-1/2 max-w-[40vw] min-w-[100px]"
        style={{
          transition: isMobile ? undefined : 'transform 1.2s cubic-bezier(0.4,0,0.2,1)',
          transform: mounted || isMobile
            ? 'translateX(0)'
            : 'translateX(-49.3vw)',
        }}
      >
        <img
          src={rightimage}
          alt="right visual"
          className="absolute right-0 top-0 h-full w-full object-cover select-none opacity-80 animate-fade-in-right"
          style={{ zIndex: 1 }}
        />
        <div className="absolute right-0 top-0 h-full w-full bg-black/0" style={{ zIndex: 2 }}></div>
      </div>
    </div>
  );
};

export default Hero;

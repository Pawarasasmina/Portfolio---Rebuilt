import { useState, useEffect } from 'react';
import leftimage from '../assets/image-1.png';
import rightimage from '../assets/image-2.png';

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

  return (
    <section id="hero" className=" min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyber-dark via-cyber-dark/80 to-cyber-dark/60 ">
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
      <div className="absolute inset-0 w-full h-full flex justify-between z-10 pointer-events-none">
        {/* Left image */}
        <div className="relative h-full w-1/2 max-w-[40vw] min-w-[180px]">
          <img
            src={leftimage}
            alt="left visual"
            className="absolute left-0 top-0 h-full w-full object-cover select-none opacity-80 animate-fade-in-left"
            style={{ zIndex: 1 }}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black/0" style={{ zIndex: 2 }}></div>
        </div>
        {/* Right image */}
        <div className="relative h-full w-1/2 max-w-[40vw] min-w-[180px]">
          <img
            src={rightimage}
            alt="right visual"
            className="absolute right-0 top-0 h-full w-full object-cover select-none opacity-80 animate-fade-in-right"
            style={{ zIndex: 1 }}
          />
          <div className="absolute right-0 top-0 h-full w-full bg-black/0" style={{ zIndex: 2 }}></div>
        </div>
      </div>

  {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="absolute top-36 sm:top-24 left-1/2 -translate-x-1/2 text-neon-cyan/80 font-mono text-xs sm:text-sm animate-float pointer-events-none select-none max-w-[90vw] whitespace-nowrap">
        {'// Welcome to my portfolio!'}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
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
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button px-8 py-3 text-lg font-bold shadow-neon-cyan/30 hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-white hover:shadow-neon-magenta px-8 py-3 text-lg font-bold transition-all"
          >
            Initialize Contact
          </button>
        </div>

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

export default Hero;

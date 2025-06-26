
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Developer',
    'Mobile App Engineer', 
    'UI/UX Creator'
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-neon-cyan/20 animate-pulse"
              style={{ animationDelay: `${i * 0.01}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-neon-green/30 font-mono text-xs animate-float">
          const developer = "Pawara Sasmina";
        </div>
        <div className="absolute top-40 right-20 text-neon-cyan/30 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
          function createAwesome() {'{'}
        </div>
        <div className="absolute bottom-40 left-20 text-neon-magenta/30 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>
          return innovation;
        </div>
        <div className="absolute bottom-20 right-10 text-neon-purple/30 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>
          {'}'}
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Name with glitch effect */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8">
          <span 
            className="glitch text-gradient glow-text inline-block animate-text-glow"
            data-text="PAWARA SASMINA"
          >
            PAWARA SASMINA
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-16 mb-8">
          <p className="text-2xl md:text-3xl font-mono text-neon-cyan">
            <span className="command-line">{displayText}</span>
            <span className="terminal-cursor"></span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-orbitron text-gray-300 mb-12 animate-fade-in">
          <span className="text-neon-magenta">Engineer</span> by Skill. 
          <span className="text-neon-cyan"> Artist</span> by Vision.
        </p>

        {/* Level badge */}
        <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-12 border border-neon-green/50">
          <div className="w-3 h-3 bg-neon-green rounded-full mr-3 animate-pulse"></div>
          <span className="font-orbitron text-neon-green">Level 3 - Undergraduate @ SLIIT</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:shadow-neon-magenta"
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

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
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

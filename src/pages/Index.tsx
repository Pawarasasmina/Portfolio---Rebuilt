import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactTerminal from '../components/ContactTerminal';
import StarfieldBackground from '../components/StarfieldBackground';
import CursorTrail from '../components/CursorTrail';
import MiniTerminal from '../components/MiniTerminal';

const Index = () => {
  const [konamiMode, setKonamiMode] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  // Scroll to top and to #hero on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);

      if (newSequence.join(',') === konamiCode.join(',')) {
        setKonamiMode(!konamiMode);
        setKonamiSequence([]);
        
        // Show easter egg message
        const message = document.createElement('div');
        message.innerHTML = `
          <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 glass-effect p-8 rounded-lg border border-neon-magenta shadow-neon-magenta">
            <h2 class="text-2xl font-orbitron text-neon-magenta mb-4">🎮 KONAMI CODE ACTIVATED!</h2>
            <p class="text-neon-cyan font-mono">Easter egg unlocked! Theme mode toggled.</p>
            <p class="text-xs text-gray-400 mt-2">Press ESC to close</p>
          </div>
        `;
        document.body.appendChild(message);

        const closeMessage = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            document.body.removeChild(message);
            document.removeEventListener('keydown', closeMessage);
          }
        };

        document.addEventListener('keydown', closeMessage);
        setTimeout(() => {
          if (document.body.contains(message)) {
            document.body.removeChild(message);
            document.removeEventListener('keydown', closeMessage);
          }
        }, 5000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence, konamiMode, konamiCode]);

  return (
    <>
      <Helmet>
        <title>Pawara Sasmina - Full Stack Developer | UI/UX Creator | Mobile App Engineer</title>
        <meta name="description" content="Experienced Full Stack Developer specializing in React, Node.js, and mobile app development. Explore my portfolio of innovative projects, modern UI/UX designs, and software solutions." />
        <link rel="canonical" href="https://www.pawara.online/" />
      </Helmet>
      
      <div className={`min-h-screen ${konamiMode ? 'bg-white text-black' : 'bg-cyber-dark text-white'} transition-all duration-1000`}>
        <StarfieldBackground />
        <CursorTrail />
        <Navbar />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactTerminal />
      </main>

      <MiniTerminal />
      
        {/* Ambient lighting effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </div>
    </>
  );
};

export default Index;

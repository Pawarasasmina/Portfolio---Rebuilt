import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // close mobile menu on navigation
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-orbitron font-bold">
            <span className="text-gradient glow-text">S.P.S</span>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-orbitron text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-cyan glow-text'
                    : 'text-gray-300 hover:text-neon-cyan'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-300 ${
                  activeSection === item.id ? 'w-full shadow-neon-cyan' : 'w-0'
                }`}></span>
                
                {/* Hover effect */}
                <span className="absolute bottom-0 left-0 h-0.5 bg-neon-cyan transition-all duration-300 w-0 hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Open menu">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-full h-0.5 bg-neon-cyan mb-1 transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-neon-cyan mb-1 transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-neon-cyan transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[1001] bg-cyber-dark flex flex-col items-center justify-center md:hidden animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`my-3 text-2xl font-orbitron uppercase tracking-widest px-8 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-neon-cyan glow-text'
                  : 'text-gray-200 hover:text-neon-cyan'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 text-neon-magenta font-bold text-lg underline"
          >
            Close
          </button>
        </div>
      )}

      {/* Scan line effect */}
      <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navbar;

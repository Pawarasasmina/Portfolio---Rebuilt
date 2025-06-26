import { useState, useRef, useEffect } from 'react';

const MiniTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'MINI TERMINAL v1.0 - Ready for commands',
    'Type "help" for available commands'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '• help - Show this help message',
      '• projects - Scroll to projects section',
      '• about - Scroll to about section', 
      '• skills - Scroll to skills section',
      '• contact - Scroll to contact section',
      '• clear - Clear terminal history',
      '• time - Show current time',
      '• joke - Tell a programming joke',
      '• close - Close the mini terminal'
    ],
    projects: () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      return ['Navigating to projects section...'];
    },
    about: () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      return ['Navigating to about section...'];
    },
    skills: () => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      return ['Navigating to skills section...'];
    },
    contact: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return ['Navigating to contact section...'];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    time: () => [
      `Current time: ${new Date().toLocaleString()}`
    ],
    joke: () => [
      'Why do programmers prefer dark mode?',
      'Because light attracts bugs! 🐛',
      '...',
      'Get it? Bugs? 😄'
    ],
    close: () => {
      setIsOpen(false);
      return ['Mini terminal closed.'];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command as keyof typeof commands];
    
    if (output) {
      const result = output();
      if (command !== 'clear') {
        setHistory(prev => [...prev, `> ${cmd}`, ...result]);
      }
    } else {
      setHistory(prev => [...prev, `> ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands']);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Terminal Window */}
      <div className={`transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="glass-effect border border-neon-cyan/50 rounded-lg w-96 h-80 flex flex-col overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-cyber-gray/50 px-4 py-2 border-b border-neon-cyan/30 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
            </div>
            <span className="text-neon-cyan font-mono text-xs">mini-terminal</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-sm"
            >
              ×
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-3 bg-cyber-dark/90 overflow-y-auto font-mono text-xs">
            {history.map((line, index) => (
              <div key={index} className={`mb-1 ${
                line.startsWith('>') ? 'text-neon-cyan' : 'text-gray-300'
              }`}>
                {line}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="border-t border-neon-cyan/30 bg-cyber-gray/50">
            <div className="flex items-center p-2">
              <span className="text-neon-cyan font-mono text-xs mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder-gray-500"
                placeholder="Enter command..."
              />
            </div>
          </form>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-4 glass-effect border border-neon-cyan/50 rounded-full w-16 h-16 flex items-center justify-center text-neon-cyan hover:shadow-neon-cyan transition-all duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        <div className="font-mono text-xs">
          {isOpen ? '−' : '>_'}
        </div>
      </button>
    </div>
  );
};

export default MiniTerminal;

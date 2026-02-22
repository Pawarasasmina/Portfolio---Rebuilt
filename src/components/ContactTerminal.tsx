import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
  timestamp?: string;
}

const ContactTerminal = () => {
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'CONTACT TERMINAL v2.3.1 INITIALIZED...' },
    { type: 'output', content: 'READY FOR INPUT' },
    { type: 'output', content: '> Please provide the following information:' },
    { type: 'output', content: '> NAME: [Enter your full name]' }
  ]);

  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'message' | 'complete'>('name');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  // Focus input when component mounts or step changes
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) return;

    if (inputRef.current && currentStep !== 'complete' && !isProcessing) {
      inputRef.current.focus();
    }
  }, [currentStep, isProcessing]);

  // Handle clicking on terminal to focus input
  const handleTerminalClick = () => {
    if (inputRef.current && currentStep !== 'complete' && !isProcessing) {
      inputRef.current.focus();
    }
  };

  const addTerminalLine = (line: TerminalLine) => {
    setTerminalLines(prev => [...prev, {
      ...line,
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputSubmit = async () => {
    if (!currentInput.trim()) {
      addTerminalLine({ type: 'error', content: 'ERROR: Input cannot be empty!' });
      return;
    }

    // Add user input to terminal
    addTerminalLine({ type: 'input', content: `> ${currentInput}` });

    switch (currentStep) {
      case 'name':
        if (currentInput.length < 2) {
          addTerminalLine({ type: 'error', content: 'ERROR: Name must be at least 2 characters long!' });
          break;
        }
        setFormData(prev => ({ ...prev, name: currentInput }));
        addTerminalLine({ type: 'success', content: `NAME ACCEPTED: ${currentInput}` });
        addTerminalLine({ type: 'output', content: '> EMAIL: [Enter your email address]' });
        setCurrentStep('email');
        break;

      case 'email':
        if (!validateEmail(currentInput)) {
          addTerminalLine({ type: 'error', content: 'ERROR: Please enter a valid email address!' });
          break;
        }
        setFormData(prev => ({ ...prev, email: currentInput }));
        addTerminalLine({ type: 'success', content: `EMAIL ACCEPTED: ${currentInput}` });
        addTerminalLine({ type: 'output', content: '> MESSAGE: [Enter your message]' });
        setCurrentStep('message');
        break;

      case 'message':
        if (currentInput.length < 10) {
          addTerminalLine({ type: 'error', content: 'ERROR: Message must be at least 10 characters long!' });
          break;
        }
        setFormData(prev => ({ ...prev, message: currentInput }));
        addTerminalLine({ type: 'success', content: 'MESSAGE ACCEPTED' });
        setCurrentStep('complete');
        await submitForm({ ...formData, message: currentInput });
        break;
    }

    setCurrentInput('');
  };

  const submitForm = async (data: FormData) => {
    setIsProcessing(true);
    addTerminalLine({ type: 'output', content: 'PROCESSING MESSAGE...' });
    
    // Send email using EmailJS
    try {
      await emailjs.send(
        'service_r6r9dwi', // replace with your EmailJS service ID
        'template_9w0wuic', // replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message
        },
        'AjuF7Kzd1C57NZ8Hn' // replace with your EmailJS public key
      );
      addTerminalLine({ type: 'success', content: '✓ MESSAGE SENT SUCCESSFULLY!' });
      addTerminalLine({ type: 'success', content: '✓ THANK YOU FOR CONTACTING PAWARA SASMINA' });
      addTerminalLine({ type: 'output', content: '> RESPONSE EXPECTED WITHIN 24 HOURS' });
      addTerminalLine({ type: 'output', content: '> TYPE "RESET" TO START OVER' });
    } catch (error) {
      addTerminalLine({ type: 'error', content: 'ERROR: Failed to send message. Please try again later.' });
    }
    setIsProcessing(false);

    // In a real app, you would send the data to your backend or email service
    console.log('Form submitted:', data);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      if (currentInput.toLowerCase() === 'reset' && currentStep === 'complete') {
        // Reset terminal
        setTerminalLines([
          { type: 'output', content: 'TERMINAL RESET...' },
          { type: 'output', content: 'CONTACT TERMINAL v2.3.1 INITIALIZED...' },
          { type: 'output', content: 'READY FOR INPUT' },
          { type: 'output', content: '> Please provide the following information:' },
          { type: 'output', content: '> NAME: [Enter your full name]' }
        ]);
        setCurrentStep('name');
        setFormData({ name: '', email: '', message: '' });
        setCurrentInput('');
        return;
      }
      handleInputSubmit();
    }
  };

  const getPromptText = () => {
    switch (currentStep) {
      case 'name': return 'NAME';
      case 'email': return 'EMAIL';
      case 'message': return 'MESSAGE';
      case 'complete': return 'COMPLETE';
      default: return 'INPUT';
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-gradient glow-text">CONTACT.SH</span>
          </h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            <span className="command-line">Initialize secure communication protocol</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Container */}
          <div className="glass-effect rounded-lg border border-neon-green/50 shadow-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-cyber-gray/50 px-6 py-3 border-b border-neon-green/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                </div>
                <span className="text-neon-green font-mono text-sm">
                  contact@pawara-sasmina.dev
                </span>
              </div>
              <div className="text-neon-green font-mono text-xs">
                {new Date().toLocaleString()}
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalRef}
              onClick={handleTerminalClick}
              className="h-96 overflow-y-auto p-6 bg-cyber-dark/80 font-mono text-sm cursor-text relative"
            >
              {terminalLines.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className={`${
                    line.type === 'input' ? 'text-white' :
                    line.type === 'output' ? 'text-neon-cyan' :
                    line.type === 'error' ? 'text-red-400' :
                    'text-neon-green'
                  }`}>
                    {line.content}
                  </span>
                  {line.timestamp && (
                    <span className="text-gray-500 text-xs ml-4">
                      [{line.timestamp}]
                    </span>
                  )}
                </div>
              ))}

              {/* Current Input Line */}
              {(currentStep !== 'complete' || (currentStep === 'complete' && !isProcessing)) && (
                <div className="flex items-center">
                  <span className="text-neon-cyan mr-2">
                    [{getPromptText()}]$
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent text-white font-mono text-sm outline-none flex-1"
                    disabled={isProcessing && currentStep === 'complete'}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                  <span className={`text-neon-green ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </div>
              )}

              {/* Processing Animation */}
              {isProcessing && (
                <div className="flex items-center text-neon-yellow">
                  <span className="mr-2">PROCESSING</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-neon-yellow rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-neon-yellow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-neon-yellow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="bg-cyber-gray/50 px-6 py-3 border-t border-neon-green/30 flex items-center justify-between">
              <div className="text-neon-green font-mono text-xs">
                Press ENTER to submit • Type "RESET" to restart
              </div>
              <div className="flex items-center space-x-4 text-xs font-mono">
                <span className="text-gray-400">
                  Step: {currentStep === 'complete' ? '4/4' : 
                         currentStep === 'message' ? '3/4' :
                         currentStep === 'email' ? '2/4' : '1/4'}
                </span>
                <div className={`w-2 h-2 rounded-full ${
                  currentStep === 'complete' ? 'bg-neon-green animate-pulse' : 'bg-neon-cyan animate-pulse'
                }`}></div>
              </div>
            </div>
          </div>

          {/* Instructions Panel */}
          <div className="mt-8 glass-effect rounded-lg p-6 border border-neon-cyan/30">
            <h3 className="text-neon-cyan font-orbitron font-bold mb-4">TERMINAL INSTRUCTIONS</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <div className="text-neon-green mb-2">COMMANDS:</div>
                <div className="text-gray-300 space-y-1">
                  <div>• ENTER - Submit current input</div>
                  <div>• RESET - Restart terminal session</div>
                  <div>• Click terminal area to focus</div>
                </div>
              </div>
              <div>
                <div className="text-neon-magenta mb-2">VALIDATION:</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Name: Min 2 characters</div>
                  <div>• Email: Valid format required</div>
                  <div>• Message: Min 10 characters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-neon-green/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-neon-cyan/20 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
    </section>
  );
};

export default ContactTerminal;

import { motion } from 'framer-motion';

const About = () => {
  const timelineData = [
    {
      year: '2025-Present',
      title: 'Software Engineering Intern',
      company: 'Mobitel (Pvt) Ltd',
      description: 'Contributed to Web application development and backend systems',
      type: 'internship'
    },
    {
      year: '2022-Present',
      title: 'Undergraduate Student',
      company: 'SLIIT - Sri Lanka Institute of Information Technology',
      description: 'Pursuing BSc (Hons) in Information Technology, specializing in Software Engineering',
      type: 'education'
    },
    {
      year: '2021',
      title: 'GCE A/L Examination',
      company: 'St.Thomas\'s College, Matara',
      description: 'Completed GCE Advanced Level with focus on Mathematics, Physics, and Chemistry',
      type: 'education'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Software Engineering student', desc: 'Academic Excellence' },
    { icon: '💻', title: 'Full Stack', desc: 'MERN Expert' },
    { icon: '📱', title: 'Mobile Dev', desc: 'React Native' },
    { icon: '🎨', title: 'UI/UX', desc: 'Design Systems' }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-x-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
    >
      {/* Cinematic scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-30" style={{ mixBlendMode: 'overlay' }}>
        <div className="w-full h-full bg-repeat opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)' }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-gradient glow-text">ABOUT.EXE</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="relative flex flex-col items-center">
            {/* Futuristic Profile Photo Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta p-1 animate-border-glow">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                  {/* Profile photo placeholder */}
                  <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-5xl sm:text-6xl font-orbitron text-neon-cyan border-2 border-neon-cyan/30 shadow-neon-cyan/20">
                    SPS
                  </div>
                </div>
              </div>
              {/* Rotating elements */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-neon-cyan rounded-full transform -translate-x-1/2 -translate-y-2"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-neon-magenta rounded-full transform -translate-x-1/2 translate-y-2"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-neon-green rounded-full transform -translate-x-2 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-neon-purple rounded-full transform translate-x-2 -translate-y-1/2"></div>
              </div>
              {/* Animated circuit lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 320 320" className="w-full h-full">
                  <polyline points="160,0 160,40" stroke="#00FFFF55" strokeWidth="2" fill="none" />
                  <polyline points="320,160 280,160" stroke="#FF00FF55" strokeWidth="2" fill="none" />
                  <polyline points="160,320 160,280" stroke="#39FF1455" strokeWidth="2" fill="none" />
                  <polyline points="0,160 40,160" stroke="#9D00FF55" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-xs">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center shadow-neon-cyan/10"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="font-orbitron text-neon-cyan text-sm font-bold">{achievement.title}</div>
                  <div className="text-gray-400 text-xs">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-6 flex items-center gap-2">
              <span className="command-line">Journey Timeline</span>
              <span className="w-4 h-4 bg-neon-magenta rounded-full animate-pulse"></span>
            </h3>
            <div className="relative ml-2">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-magenta"></div>
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-10"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                >
                  {/* Timeline dot */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 shadow-lg ${
                    item.type === 'education' 
                      ? 'bg-neon-cyan/20 border-neon-cyan' 
                      : 'bg-neon-magenta/20 border-neon-magenta'
                  }`}>
                    <div className={`w-4 h-4 rounded-full ${
                      item.type === 'education' ? 'bg-neon-cyan' : 'bg-neon-magenta'
                    } animate-pulse`}></div>
                  </div>
                  {/* Timeline content */}
                  <div className="ml-6 glass-effect p-6 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 flex-1 shadow-neon-magenta/10">
                    <div className="text-neon-cyan font-mono text-sm mb-2">{item.year}</div>
                    <h4 className="font-orbitron font-bold text-white mb-1 text-lg">{item.title}</h4>
                    <div className="text-neon-magenta font-semibold mb-2">{item.company}</div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Bio Text */}
            <div className="glass-effect p-6 rounded-lg border border-neon-purple/30 mt-8 shadow-neon-purple/10">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Passionate <span className="text-neon-cyan">Full Stack Developer</span> with a keen eye for
                <span className="text-neon-green"> innovative solutions</span>. Currently pursuing my degree at SLIIT
                while gaining real-world experience through internships at leading tech companies.
                I specialize in creating <span className="text-neon-purple">immersive digital experiences</span> that
                bridge the gap between functionality and aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-neon-cyan/20 rotate-45 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-neon-magenta/20 rotate-45 animate-spin-slow" style={{ animationDuration: '12s' }}></div>
      {/* Neon circuit lines for extra cyberpunk flair */}
      <div className="absolute left-1/2 top-0 w-1 h-32 bg-gradient-to-b from-neon-cyan/40 to-transparent -translate-x-1/2 blur-sm"></div>
      <div className="absolute right-0 top-1/2 w-32 h-1 bg-gradient-to-l from-neon-magenta/40 to-transparent blur-sm"></div>
    </motion.section>
  );
};

export default About;

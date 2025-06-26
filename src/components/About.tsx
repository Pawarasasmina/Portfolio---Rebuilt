
const About = () => {
  const timelineData = [
    {
      year: '2022-Present',
      title: 'Undergraduate Student',
      company: 'SLIIT - Sri Lanka Institute of Information Technology',
      description: 'Pursuing BSc (Hons) in Information Technology, specializing in Software Engineering',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Software Engineering Intern',
      company: 'Mobitel (Pvt) Ltd',
      description: 'Contributed to mobile application development and backend systems',
      type: 'internship'
    },
    {
      year: '2024',
      title: 'Tech Intern',
      company: 'Sri Lanka Telecom (SLT)',
      description: 'Worked on telecommunications software solutions and network applications',
      type: 'internship'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Dean\'s List', desc: 'Academic Excellence' },
    { icon: '💻', title: 'Full Stack', desc: 'MERN Expert' },
    { icon: '📱', title: 'Mobile Dev', desc: 'React Native' },
    { icon: '🎨', title: 'UI/UX', desc: 'Design Systems' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-gradient glow-text">ABOUT.EXE</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="relative">
            {/* Futuristic Profile Photo Container */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta p-1 animate-border-glow">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                  {/* Profile photo placeholder */}
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-6xl font-orbitron text-neon-cyan border-2 border-neon-cyan/30">
                    PS
                  </div>
                </div>
              </div>
              
              {/* Rotating elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-cyan rounded-full transform -translate-x-1/2 -translate-y-2"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-neon-magenta rounded-full transform -translate-x-1/2 translate-y-2"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-neon-green rounded-full transform -translate-x-2 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-neon-purple rounded-full transform translate-x-2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="font-orbitron text-neon-cyan text-sm font-bold">{achievement.title}</div>
                  <div className="text-gray-400 text-xs">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-8">
              <span className="command-line">Journey Timeline</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-magenta"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  {/* Timeline dot */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 ${
                    item.type === 'education' 
                      ? 'bg-neon-cyan/20 border-neon-cyan' 
                      : 'bg-neon-magenta/20 border-neon-magenta'
                  }`}>
                    <div className={`w-4 h-4 rounded-full ${
                      item.type === 'education' ? 'bg-neon-cyan' : 'bg-neon-magenta'
                    } animate-pulse`}></div>
                  </div>
                  
                  {/* Timeline content */}
                  <div className="ml-6 glass-effect p-6 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 flex-1">
                    <div className="text-neon-cyan font-mono text-sm mb-2">{item.year}</div>
                    <h4 className="font-orbitron font-bold text-white mb-1">{item.title}</h4>
                    <div className="text-neon-magenta font-semibold mb-2">{item.company}</div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bio Text */}
            <div className="glass-effect p-6 rounded-lg border border-neon-purple/30 mt-8">
              <p className="text-gray-300 leading-relaxed">
                Passionate <span className="text-neon-cyan">Full Stack Developer</span> and 
                <span className="text-neon-magenta"> Mobile App Engineer</span> with a keen eye for 
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
      <div className="absolute top-20 right-10 w-32 h-32 border border-neon-cyan/20 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-neon-magenta/20 rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
    </section>
  );
};

export default About;

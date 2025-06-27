import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-cyan',
      skills: [
        { name: 'React/Next.js', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '💚' }
      ]
    },
    {
      title: 'Backend',
      color: 'neon-magenta',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'GraphQL', level: 70, icon: '🔗' }
      ]
    },
    {
      title: 'Mobile',
      color: 'neon-green',
      skills: [
        { name: 'React Native', level: 85, icon: '📱' },
        { name: 'Flutter', level: 70, icon: '🦋' },
        { name: 'Swift', level: 65, icon: '🍎' },
        { name: 'Kotlin', level: 68, icon: '🤖' }
      ]
    },
    {
      title: 'Database',
      color: 'neon-purple',
      skills: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'Firebase', level: 82, icon: '🔥' }
      ]
    },
    {
      title: 'DevOps',
      color: 'neon-orange',
      skills: [
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'AWS', level: 72, icon: '☁️' },
        { name: 'Git/GitHub', level: 92, icon: '🔧' },
        { name: 'CI/CD', level: 70, icon: '🔄' }
      ]
    },
    {
      title: 'Tools',
      color: 'neon-yellow',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'Postman', level: 88, icon: '📮' },
        { name: 'Jira', level: 75, icon: '📋' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryElement = entry.target;
            const categoryIndex = parseInt(categoryElement.getAttribute('data-category-index') || '0');
            const category = skillCategories[categoryIndex];
            
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, skillIndex * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const categoryElements = document.querySelectorAll('.skill-category');
    categoryElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { text: string; border: string; bg: string; shadow: string } } = {
      'neon-cyan': { text: 'text-neon-cyan', border: 'border-neon-cyan', bg: 'bg-neon-cyan', shadow: 'shadow-neon-cyan' },
      'neon-magenta': { text: 'text-neon-magenta', border: 'border-neon-magenta', bg: 'bg-neon-magenta', shadow: 'shadow-neon-magenta' },
      'neon-green': { text: 'text-neon-green', border: 'border-neon-green', bg: 'bg-neon-green', shadow: 'shadow-neon-green' },
      'neon-purple': { text: 'text-neon-purple', border: 'border-neon-purple', bg: 'bg-neon-purple', shadow: 'shadow-[0_0_20px_#9D00FF]' },
      'neon-orange': { text: 'text-neon-orange', border: 'border-neon-orange', bg: 'bg-neon-orange', shadow: 'shadow-[0_0_20px_#FF8000]' },
      'neon-yellow': { text: 'text-neon-yellow', border: 'border-neon-yellow', bg: 'bg-neon-yellow', shadow: 'shadow-[0_0_20px_#FFFF00]' }
    };
    return colorMap[color] || colorMap['neon-cyan'];
  };

  return (
    <motion.section
      id="skills"
      className="py-20 relative"
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
            <span className="text-gradient glow-text">SKILLS.JSON</span>
          </h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            <span className="command-line">Technical proficiency across the development stack</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-4"></div>
        </div>

        {/* XP Style Overview */}
        <div className="glass-effect rounded-lg p-6 mb-12 border border-neon-cyan/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-orbitron font-bold text-neon-cyan">
              Overall XP Level: 85/100
            </h3>
            <div className="text-neon-green font-mono">LEVEL UP!</div>
          </div>
          <div className="w-full bg-cyber-gray rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta transition-all duration-2000 ease-out animate-border-glow"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            
            return (
              <motion.div
                key={categoryIndex}
                className={`skill-category glass-effect rounded-lg p-6 border hover:${colors.shadow} transition-all duration-300 hover:scale-105`}
                data-category-index={categoryIndex}
                whileHover={{ scale: 1.07, rotateZ: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                style={{ perspective: 1000 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 ${colors.bg} rounded-full mr-3 animate-pulse`}></div>
                  <h3 className={`text-xl font-orbitron font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const animatedLevel = animatedSkills[`${categoryIndex}-${skillIndex}`] || 0;
                    
                    return (
                      <div key={skillIndex} className="skill-item">
                        {/* Skill Name and Level */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{skill.icon}</span>
                            <span className="text-white font-mono text-sm">{skill.name}</span>
                          </div>
                          <span className={`${colors.text} font-mono text-sm font-bold`}>
                            {animatedLevel}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-cyber-gray rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${colors.bg} transition-all duration-1000 ease-out relative`}
                            style={{ width: `${animatedLevel}%` }}
                          >
                            {/* Animated glow effect */}
                            <div className={`absolute inset-0 ${colors.bg} animate-pulse opacity-75`}></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Category XP Badge */}
                <div className={`mt-6 text-center border ${colors.border} rounded-full py-2 px-4 ${colors.text} font-mono text-xs`}>
                  {category.title.toUpperCase()} MASTERY
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Skill Logos */}
        <div className="mt-16 relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-8 animate-float">
              {['⚛️', '🐍', '🔥', '💻', '🚀', '🎨', '🤖', '☁️'].map((emoji, index) => (
                <div
                  key={index}
                  className="text-4xl opacity-30 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.5}s`,
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Matrix Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green font-mono text-sm matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(33 + Math.random() * 93)}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;


import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with real-time inventory management and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production'
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app with offline-first architecture and real-time sync.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Beta'
    },
    {
      id: 3,
      title: 'AI Dashboard Analytics',
      description: 'Machine learning powered analytics dashboard with predictive insights and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Development'
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform ensuring transparency and security using smart contracts.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Prototype'
    }
  ];

  const statusColors = {
    'Production': 'text-neon-green border-neon-green',
    'Beta': 'text-neon-cyan border-neon-cyan',
    'Development': 'text-neon-yellow border-neon-yellow',
    'Prototype': 'text-neon-magenta border-neon-magenta'
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-gradient glow-text">PROJECTS.DIR</span>
          </h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            <span className="command-line">Innovative solutions crafted with cutting-edge technology</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`glass-effect rounded-lg overflow-hidden border transition-all duration-500 ${
                hoveredProject === index 
                  ? 'border-neon-cyan shadow-neon-cyan transform scale-105 rotate-1' 
                  : 'border-white/10 hover:border-neon-cyan/50'
              }`}>
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === index ? 'scale-110 brightness-110' : 'scale-100 brightness-75'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-70' : 'opacity-90'
                  }`}></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border font-mono text-xs ${
                    statusColors[project.status as keyof typeof statusColors]
                  } glass-effect`}>
                    {project.status}
                  </div>

                  {/* Hover Buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button text-xs py-2 px-4"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:shadow-neon-magenta text-xs py-2 px-4"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full hover:bg-neon-cyan/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Border Glow Effect */}
                <div className={`absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 blur-sm"></div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-neon-cyan rounded-full transition-all duration-300 ${
                hoveredProject === index ? 'animate-ping' : 'animate-pulse'
              }`}></div>
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-neon-magenta rounded-full transition-all duration-300 ${
                hoveredProject === index ? 'animate-ping' : 'animate-pulse'
              }`} style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button className="cyber-button">
            View All Projects
          </button>
        </div>
      </div>

      {/* Background decorative grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-cyan/20"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

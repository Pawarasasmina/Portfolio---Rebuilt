import { useState } from 'react';
import adressbook from '../assets/adressbook.jpeg';
import pathfinder from '../assets/pathfinder.png';
import pixelplaza from '../assets/pixelplasa.png';
import healthcare from '../assets/healthcare.png';
import highway from '../assets/highway.png';
import lanerunner from '../assets/lanerunner.png';
import dilubeats from '../assets/dilubeats.png';
import job from '../assets/job.jpeg';
import tailorshop from '../assets/tailorshop.png';
import company from '../assets/company.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'DILU Beats',
      description: 'Developed a portfolio website for Sri Lankan famous music producer as a freelancing project.',
      image: dilubeats, // Placeholder, update if you have a real image
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Web-site-for-singer.git',
      demo: 'https://dilubeats.com',
      status: 'Production'
    },
    {
      id: 2,
      title: 'Neuriox IT Landing Page',
      description: 'Developed a modern landing page for my own freelancing web company.',
      image: company, // Placeholder
      tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/Pawarasasmina/neuriOx-company_portfolio.git',
      demo: 'https://neurioxit.systems',
      status: 'Production'
    },
    {
      id: 3,
      title: 'Sisira Tailors',
      description: 'Built a displaying website for a Sri Lankan clothing businessman as a freelancing project.',
      image: tailorshop, // Placeholder
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Sisira_Tailors.git',
      demo: 'https://sisira-tailors.vercel.app/',
      status: 'Production'
    },
    {
      id: 4,
      title: 'Pixel Plaza',
      description: 'Developed a web-based shopping mall system to improve shopping experience beyond normal e-commerce platforms.',
      image: pixelplaza,
      tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JWT', 'Bcrypt', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Pixel-Plaza---Online-Shopping-Mall.git',
      demo: '',
      status: 'Development'
    },
    {
      id: 5,
      title: 'Online Healthcare System',
      description: 'Developed a web-based e-channeling and medical details sharing system.',
      image: healthcare,
      tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Smart_HealthCare_System.git',
      demo: '',
      status: 'Development'
    },
    {
      id: 6,
      title: 'Path Finder',
      description: 'A cross platform mobile application to address urban traffic problems.',
      image: pathfinder,
      tech: ['Flutter', 'Dart', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/Path-Finder.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 7,
      title: 'Online Seat Booking System',
      description: 'Developed a web-based highway bus ticket booking system.',
      image: highway,
      tech: ['MERN Stack', 'Vite', 'Bootstrap CSS', 'Bcrypt', 'JWT', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Online-seat-booking-system.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 8,
      title: 'Lane Runner',
      description: 'Developed a simple mobile game for Android.',
      image: lanerunner,
      tech: ['Kotlin', 'XML', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/LaneRunner.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 9,
      title: 'Address Book',
      description: 'Simple Android mobile application for managing addresses of people.',
      image: adressbook,
      tech: ['Kotlin', 'XML', 'SQLite', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/Address-Book.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 10,
      title: 'Sky-On-Eye',
      description: 'Web based online movie ticket booking system.',
      image: company, // Placeholder
      tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/Pawarasasmina/Sky-On-Eye.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 11,
      title: 'Online Music Store',
      description: 'Developed a web-based music listening and purchasing system.',
      image: '',
      tech: ['Java', 'Bootstrap CSS', 'OOP'],
      github: 'https://github.com/Pawarasasmina/Online-Music-Store.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 12,
      title: 'Fitness Master',
      description: 'CRUD operations for online nutritional plans and fitness planning with frontend and backend interactions.',
      image: '',
      tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/Pawarasasmina/Project-06---Fitness-Master.git',
      demo: '',
      status: 'Prototype'
    }
  ];

  const statusColors = {
    'Production': 'text-neon-green border-neon-green',
    'Beta': 'text-neon-cyan border-neon-cyan',
    'Development': 'text-neon-yellow border-neon-yellow',
    'Prototype': 'text-neon-magenta border-neon-magenta'
  };

  // Determine which projects to show
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

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
          {visibleProjects.map((project, index) => (
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
          {!showAll && projects.length > 4 && (
            <button className="cyber-button" onClick={() => setShowAll(true)}>
              View All Projects
            </button>
          )}
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

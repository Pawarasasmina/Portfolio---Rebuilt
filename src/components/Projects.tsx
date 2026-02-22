import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
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
import CQ from '../assets/cq.png';
import mail from '../assets/image.png';
import rank from '../assets/rank.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Mail Management Service',
      description: 'Official domain-based mailbox management system with mailbox request handling and role-based access control.',
      image: mail,
      tech: ['React', 'Node.js', 'MongoDB', 'RestAPI', 'Web Sockets'],
      github: 'https://github.com/Pawarasasmina/mail-management.git',
      demo: 'https://mail-management-bay.vercel.app',
      status: 'Production'
    },
    {
      id: 2,
      title: 'Wayback Downloading Machine',
      description: 'A tool to capture expired domains and download stable archived versions from the Wayback Machine.',
      image: healthcare,
      tech: ['React', 'Node.js', 'RestAPI', 'Web Sockets'],
      github: 'https://github.com/Pawarasasmina/wayback-downloading-machine.git',
      demo: '',
      status: 'Development'
    },
    {
      id: 3,
      title: 'Domain Rank Checker',
      description: 'A a real-time domain rank checker, tracks Google Top 10 search results and analysise with system db to provide insights on domain performance and trends.',
      image: rank,
      tech: ['React', 'Node.js', 'REST API', 'Web Sockets'],
      github: 'https://github.com/Pawarasasmina/domain-rank-checker.git',
      demo: 'https://rankchecker.200m.website',
      status: 'Production'
    },
    {
      id: 4,
      title: 'DILU Beats',
      description: 'Professional portfolio website for Sri Lankan music producer featuring interactive design and seamless user experience.',
      image: dilubeats,
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Web-site-for-singer.git',
      demo: 'https://dilubeats.com',
      status: 'Production'
    },
    {
      id: 5,
      title: 'CQ Group Landing Page',
      description: 'Modern, responsive landing page for UK-based IT solutions company with professional design and animations.',
      image: CQ,
      tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/Pawarasasmina/neuriOx-company_portfolio.git',
      demo: 'https://www.cqgroup.co.uk',
      status: 'Production'
    },
    {
      id: 6,
      title: 'Neuriox IT Landing Page',
      description: 'Elegant landing page for freelancing web development company showcasing services and portfolio.',
      image: company,
      tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/nerioxIt/company-website.git',
      demo: 'https://neurioxit.systems',
      status: 'Production'
    },
    {
      id: 4,
      title: 'Sisira Tailors',
      description: 'Professional display website for Sri Lankan clothing business featuring product showcase and contact integration.',
      image: tailorshop,
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Sisira_Tailors.git',
      demo: 'https://sisira-tailors.vercel.app/',
      status: 'Production'
    },
    {
      id: 5,
      title: 'Pixel Plaza',
      description: 'Comprehensive web-based shopping mall system with advanced features beyond traditional e-commerce platforms.',
      image: pixelplaza,
      tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JWT', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Pixel-Plaza---Online-Shopping-Mall.git',
      demo: '',
      status: 'Development'
    },
    {
      id: 6,
      title: 'Online Healthcare System',
      description: 'Full-featured e-channeling platform for medical appointments and health record management with secure authentication.',
      image: healthcare,
      tech: ['MERN Stack', 'Vite', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Smart_HealthCare_System.git',
      demo: '',
      status: 'Development'
    },
    {
      id: 7,
      title: 'Path Finder',
      description: 'Cross-platform mobile application addressing urban traffic congestion with intelligent route suggestions.',
      image: pathfinder,
      tech: ['Flutter', 'Dart', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/Path-Finder.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 8,
      title: 'Highway Bus Booking',
      description: 'Streamlined web-based ticket booking system for highway bus services with real-time seat availability.',
      image: highway,
      tech: ['MERN Stack', 'Vite', 'Bootstrap', 'JWT', 'JavaScript'],
      github: 'https://github.com/Pawarasasmina/Online-seat-booking-system.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 9,
      title: 'Lane Runner',
      description: 'Engaging Android mobile game with smooth gameplay mechanics and intuitive controls.',
      image: lanerunner,
      tech: ['Kotlin', 'XML', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/LaneRunner.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 10,
      title: 'Address Book',
      description: 'Efficient Android application for contact management with local database storage and search functionality.',
      image: adressbook,
      tech: ['Kotlin', 'XML', 'SQLite', 'Android Studio'],
      github: 'https://github.com/Pawarasasmina/Address-Book.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 11,
      title: 'Sky-On-Eye',
      description: 'Web-based movie ticket booking platform with theater selection and seat reservation capabilities.',
      image: job,
      tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/Pawarasasmina/Sky-On-Eye.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 12,
      title: 'Online Music Store',
      description: 'Complete music streaming and purchasing platform with user authentication and payment integration.',
      image: company,
      tech: ['Java', 'Bootstrap', 'OOP'],
      github: 'https://github.com/Pawarasasmina/Online-Music-Store.git',
      demo: '',
      status: 'Prototype'
    },
    {
      id: 13,
      title: 'Fitness Master',
      description: 'Comprehensive fitness planning platform with nutritional guidance and workout tracking features.',
      image: healthcare,
      tech: ['PHP', 'HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/Pawarasasmina/Project-06---Fitness-Master.git',
      demo: '',
      status: 'Prototype'
    }
  ];

  const statusColors = {
    'Production': 'bg-neon-green/10 text-neon-green border-neon-green',
    'Beta': 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan',
    'Development': 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow',
    'Prototype': 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta'
  };

  // Show 6 projects by default, then all when clicked
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-gradient glow-text">PROJECTS.DIR</span>
          </h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            <span className="command-line">$ ls -la ~/projects | grep -i "innovative"</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-4"></div>
        </div>

        {/* Projects Grid - 3 columns for better clarity */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`glass-effect rounded-xl overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                hoveredProject === index 
                  ? 'border-neon-cyan shadow-lg shadow-neon-cyan/50 transform -translate-y-2' 
                  : 'border-white/10 hover:border-neon-cyan/50'
              }`}>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-60' : 'opacity-80'
                  }`}></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full border font-mono text-xs font-semibold ${
                    statusColors[project.status as keyof typeof statusColors]
                  } backdrop-blur-sm`}>
                    {project.status}
                  </div>

                  {/* Hover Action Buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-cyber-dark/90 backdrop-blur-sm border border-neon-cyan text-neon-cyan px-4 py-2 rounded-lg hover:bg-neon-cyan hover:text-cyber-dark transition-all duration-300 font-mono text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-cyber-dark/90 backdrop-blur-sm border border-neon-magenta text-neon-magenta px-4 py-2 rounded-lg hover:bg-neon-magenta hover:text-cyber-dark transition-all duration-300 font-mono text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-orbitron font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-md hover:bg-neon-cyan/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-mono text-gray-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Border Glow Effect */}
                <div className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-magenta/10 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && projects.length > 6 && (
          <div className="text-center mt-12">
            <button 
              className="cyber-button group px-8 py-3"
              onClick={() => setShowAll(true)}
            >
              <span className="flex items-center gap-2">
                See More Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center mt-12">
            <button 
              className="cyber-button group px-8 py-3"
              onClick={() => {
                setShowAll(false);
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                Show Less
              </span>
            </button>
          </div>
        )}
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

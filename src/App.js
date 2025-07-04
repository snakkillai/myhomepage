import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';
import SAILogoSimple from './components/SAILogoSimple'; // Simple version for headers
import SAIRobotHeader from './components/SAIRobotHeader'; // Complex version for showcase

const App = () => {
  // Sample data - replace with your actual information
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://your-taskmanager-demo.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Tools & Others",
      icon: <Code className="w-8 h-8" />,
      technologies: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman", "Jest"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Simple SAI Component */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <SAILogoSimple />
              </div>
              <span className="text-xl font-bold text-gray-900">
                sAI Suresh Kumar Nakkilla
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Larger Simple Logo in Hero */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24">
              <SAILogoSimple />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Suresh Kumar Nakkilla
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            I create beautiful, functional, and user-centered digital experiences with 23+ years of expertise that make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Passionate Developer with a Love for Clean Code
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer with over 23 years of experience creating web applications 
                that solve real-world problems. I specialize in React, Node.js, AI/ML, and modern web technologies, 
                with a strong focus on user experience and performance optimization.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and mentoring. I believe in writing 
                clean, maintainable code and creating applications that users love to interact with.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sureshkumarnakkilla"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sureshkumarnakkilla"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:suresh.nakkilla@gmail.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
            
            {/* Profile Image with Simple Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-32 h-32">
                    <SAILogoSimple />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sAI Technology Showcase Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              sAI Technology Showcase
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the fusion of artificial intelligence and human creativity through interactive design
            </p>
          </div>
          
          {/* Complex Logo Showcase */}
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <SAIRobotHeader />
            </div>
          </div>
          
          {/* Technology Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8">
                  <SAILogoSimple />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Solutions</h3>
              <p className="text-gray-300">Leveraging machine learning and neural networks to create intelligent applications</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-gray-300">End-to-end development from concept to deployment with modern technologies</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-300">Pushing boundaries with cutting-edge technologies and creative problem-solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Complex Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="transform hover:rotate-3 transition-transform duration-500">
                <SAIRobotHeader />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet sAI
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Your Augmented Intelligence Partner
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                sAI represents the perfect blend of human creativity and artificial intelligence. 
                With 23+ years of development experience, I create solutions that don't just work—they inspire.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Advanced Machine Learning Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Data Processing & Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Intelligent User Experience Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable Cloud Architecture</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  Collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-25"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I work with a variety of technologies and tools to create amazing digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="text-center">
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {skillCategory.icon}
                  </div>
                </div>
                
                {/* Skill Category Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skillCategory.category}
                </h3>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 transform rotate-12">
            <SAIRobotHeader />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <SAILogoSimple />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life with sAI? I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">suresh.nakkilla@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">github.com/sureshkumarnakkilla</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/sureshkumarnakkilla</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 mb-6">Let's discuss your next project and see how sAI can help bring your vision to reality.</p>
              <a
                href="mailto:suresh.nakkilla@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Suresh Kumar Nakkilla • sAI Augmented Intelligence • Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
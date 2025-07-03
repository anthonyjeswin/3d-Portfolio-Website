
import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'AI Chat App with Gemini API',
      description: 'Modern chat application featuring Gmail login integration, theme toggle, and advanced AI conversations powered by Google\'s Gemini API.',
      technologies: ['React', 'Node.js', 'Gemini API', 'OAuth', 'Material-UI'],
      features: ['Gmail OAuth Integration', 'Dark/Light Theme Toggle', 'Real-time AI Chat', 'Responsive Design'],
      status: 'Current',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with 3D animations, smooth transitions, and optimized performance across all devices.',
      technologies: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
      features: ['3D Animations', 'Responsive Design', 'Performance Optimized', 'SEO Ready'],
      status: 'Live',
      gradient: 'from-yellow-500 to-orange-600',
      url:'https://anthonyjeswin.netlify.app/'
    },
    {
      title: 'TODO List Website',
      description: 'Modern, responsive TODO List website with 3D animations, smooth transitions, and optimized performance across all devices.',
      technologies: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
      features: ['3D Animations', 'Responsive Design', 'Performance Optimized', 'SEO Ready'],
      status: 'Live',
      gradient: 'from-indigo-500 to-blue-600',
      url:'https://todomanagerbyjeswin.netlify.app/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text animate-on-scroll">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
            A showcase of my recent work spanning web development, mobile applications, 
            security tools, and AI integration projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-on-scroll hover-lift cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-morphism p-6 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:border-primary/50">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.status}
                    </span>
                    <ArrowUp className="transform rotate-45 text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-foreground rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                  </div>
                </div>
              ))}
        </div> 
      </div>
    </section>
  );
};

export default Projects;

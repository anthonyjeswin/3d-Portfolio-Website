
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Anthony Jeswin — Tech Enthusiast, Blogger, Cloud Security Analyst.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Hero Content */}
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-block p-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-glow">
              <div className="text-6xl sm:text-8xl font-bold gradient-text animate-float">
                AJ
              </div>
            </div>
          </div>
          
          <h1 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="font-mono border-r-2 border-primary pr-2">
              {displayText}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting secure digital solutions and sharing tech insights through innovative projects and technical writing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-primary hover:text-secondary transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

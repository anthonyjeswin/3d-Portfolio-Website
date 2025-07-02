
import { useEffect, useRef } from 'react';


function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'UI/UX Design', level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'Web Development', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'Technical Writing', level: 68, color: 'from-purple-500 to-pink-500' },
    { name: 'Ethical Hacking', level: 70, color: 'from-red-500 to-orange-500' },
    { name: 'Graphic Design', level: 75, color: 'from-indigo-500 to-blue-500' },
    { name: 'Software Testing', level: 58, color: 'from-yellow-500 to-orange-500' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'AI Tools Blog Launch',
      description: 'Created comprehensive blog featuring 2025\'s top AI productivity tools'
    },
    {
      year: '2023',
      title: 'Ethical Hacking',
      description: 'Studied Ethical Hacking Techniques'
    },
    {
      year: '2022',
      title: 'Tech Content Creator',
      description: 'Started tech trend blog with SEO optimization and AdSense integration'
    },
    {
      year: '2021',
      title: 'UI/UX Design',
      description: 'Designed a Website in Adobe XD'
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
    <section ref={sectionRef} id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text animate-on-scroll">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
            Passionate about bridging the gap between technology and security, I specialize in cloud security analysis,
            web development, and creating educational content that makes complex tech concepts accessible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Bio Section */}
          <div className="animate-on-scroll">
            <div className="glass-morphism p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey as a Computer Science student has been full of learning, challenges, and growth. When I started, I was excited but also unsure of what to expect. I slowly learned how to write programs, solve problems, and think logically.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, I explored different areas like web development, app development, and databases. I did projects, learned new tools, and even faced many errors—but each mistake helped me improve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now, in my final year, I feel more confident. I'm working on my final year project and getting ready for job interviews. This journey has taught me not just technical skills, but also how to be patient, think clearly, and never stop learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I'm excited for the next chapter, where I hope to use my knowledge to build useful things and grow even more in the tech world.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-glow`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-semibold mb-12 text-center gradient-text">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center animate-on-scroll ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="glass-morphism p-6 rounded-xl hover-lift">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

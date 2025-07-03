
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold gradient-text mb-4">Anthony Jeswin</div>
            <p className="text-muted-foreground mb-4">
              Tech Enthusiast, Web Developer, and Cloud Security Analyst crafting secure digital solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Technical Writing</li>
              <li>Ethical Hacking</li>
              <li>Mobile Development</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Anthony Jeswin. All rights reserved.
            </p>
            
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;

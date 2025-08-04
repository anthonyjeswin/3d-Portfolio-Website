
import { useState } from 'react';
import { toast } from 'sonner';
import { Download, Mail, Linkedin, Github, Instagram } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formsubmit.co/anthonyjeswin2004@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1fyTZKgYcE0fmY1wZWem7pogqsSJAWtFj/view?usp=sharing'; // This would be your actual resume file
    link.download = 'https://drive.google.com/file/d/1fyTZKgYcE0fmY1wZWem7pogqsSJAWtFj/view?usp=sharing';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Resume download started!');
  };

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:anthonyjeswin2004@gmail.com', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/anthonyjeswin/', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/anthonyjeswin', color: 'hover:text-gray-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/anthonyjeswin/', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                    placeholder="Subject"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Resume */}
          <div className="space-y-8 animate-fade-in">
            {/* Resume Download */}
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive overview of my experience, skills, and achievements.
              </p>
              <button
                onClick={handleResumeDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
              >
                <Download className="animate-bounce" size={20} />
                <span>Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-muted rounded-lg transition-all duration-300 hover:scale-105 hover:bg-muted/80 ${social.color} group`}
                  >
                    <social.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Info</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Location:</strong> Available for remote work
                </div>
                <div>
                  <strong className="text-foreground">Response Time:</strong> Usually within 24 hours
                </div>
                <div>
                  <strong className="text-foreground">Languages:</strong> English, Tamil
                </div>
                <div>
                  <strong className="text-foreground">Availability:</strong> Open to new opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

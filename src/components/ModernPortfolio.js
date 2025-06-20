import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { emailjsConfig } from "../config/emailjs";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Palette,
  Zap,
  Phone,
  MapPin,
} from "lucide-react";

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ];

      const current = sections.find((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const refs = {
      home: heroRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Veuillez remplir tous les champs.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Matthieu Dubois",
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will reply to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus({
        type: "error",
        message: "Error sending. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Caps Shop",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "Prisma", "GraphQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Site web",
      description: "Landing page for an organisation",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["Javascript", "jQuery"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Modern application to manage tasks with pomodoro timer",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "PostgreSQL", "Expo"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    {
      name: "React/Next.js",
      level: 85,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      level: 82,
      icon: Code,
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Node.js",
      level: 78,
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "C#",
      level: 80,
      icon: Zap,
      color: "from-black-500 to-grey-500",
    },
    {
      name: "UI/UX Design",
      level: 74,
      icon: Palette,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "GraphQL",
      level: 65,
      icon: Code,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLoaded ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <div class="logo-showcase">
                    <div class="logo-display">
                      <div class="logo-flash">MD</div>
                      <div class="scan-line"></div>
                    </div>
                  </div>
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["home", "about", "projects", "skills", "contact"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                          activeSection === item
                            ? "bg-white/20 text-white"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-xl">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div
          className={`max-w-4xl mx-auto text-center px-4 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold">JS</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Matthieu Dubois
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer - Problem Solver - Tech Enthusiast
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and innovative
            design solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/dubmatth"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matthdub"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dubois.matthieu@live.be"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with 6+ years of
                experience creating digital solutions that combine functionality
                with beautiful design. My journey in tech started with a
                curiosity about how things work and evolved into a love for
                building products that make a difference.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of development, I'm passionate about experimenting with
                emerging technologies, participating in collaborative projects,
                and mentoring fellow developers. I maintain a mindset of
                lifelong learning to stay at the forefront of this rapidly
                changing industry.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin size={16} />
                  <span>Martelange, Belgium</span>
                </div>
                {/* <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone size={16} />
                  <span>Available for freelance</span>
                </div> */}
              </div>

              {/* <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
                <Download size={16} />
                Download Resume
              </button> */}
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-8">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                  <img
                    src={
                      require("../assets/IMG_1972.jpeg") ||
                      "https://via.placeholder.com/300"
                    }
                    alt={"Matthieu Dubois"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">Some of my recent work</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "frontend", "fullstack", "mobile", "backend"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: isLoaded ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 mt-2 block">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a chat about technology and design.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Mail className="text-purple-400" size={20} />
                  <span>dubois.matthieu@live.be</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Phone className="text-purple-400" size={20} />
                  <span>+32 493 147 946</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <MapPin className="text-purple-400" size={20} />
                  <span>Martelange, Belgium</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/dubmatth"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthdubois"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:dubois.matthieu@live.be"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                />
              </div>
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg backdrop-blur-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Matthieu Dubois. Built with ❤️, React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;

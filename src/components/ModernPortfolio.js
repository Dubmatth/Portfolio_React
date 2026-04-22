import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "experiences", ref: experiencesRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ];

      const current = sections.find(({ ref }) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const refs = {
      home: heroRef,
      about: aboutRef,
      experiences: experiencesRef,
      skills: skillsRef,
      contact: contactRef,
    };
    refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isLoaded={isLoaded}
      />
      <Hero heroRef={heroRef} isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <About aboutRef={aboutRef} />
      <Experiences experiencesRef={experiencesRef} isLoaded={isLoaded} />
      <Skills skillsRef={skillsRef} isLoaded={isLoaded} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default ModernPortfolio;

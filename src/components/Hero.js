import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Hero = ({ heroRef, isLoaded, scrollToSection }) => {
  return (
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
              <span className="text-4xl font-bold">MD</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full-Stack Developer · I build things that work · Based in Belgium
        </p>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I like building things end-to-end — from the database to the UI.
          Right now I'm working on personal projects and sharpening my skills
          in TypeScript and mobile dev.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("experiences")}
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
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send an email"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;

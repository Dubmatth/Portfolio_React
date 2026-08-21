import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
// Hardcoded since there's only one project today; move into the data model if a second one is added.
import pomodeepIcon from "../assets/pomodeep-icon.png";

const Projects = ({ projectsRef, isLoaded }) => {
  return (
    <section ref={projectsRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-300 text-lg">What I'm building right now</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={pomodeepIcon}
                  alt={`${project.name} icon`}
                  className="w-16 h-16 rounded-2xl shrink-0"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-purple-300 italic text-sm mt-1">{project.tagline}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-500/10 text-purple-200 rounded-full border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium transition-colors"
              >
                Visit {project.link.replace(/^https?:\/\//, "")}
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

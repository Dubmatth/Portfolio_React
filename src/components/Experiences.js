import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data/portfolio";

const EXPANDED_BY_DEFAULT = 1;

const Experiences = ({ experiencesRef, isLoaded }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section ref={experiencesRef} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiences & Achievements
          </h2>
        </div>

        <div className="space-y-8 relative md:pl-20">
          <div className="hidden md:block absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-purple-400/60 via-purple-500/30 to-transparent" />

          {experiences.map((exp, index) => {
            const isExpanded = showAll || index < EXPANDED_BY_DEFAULT;

            return (
              <div
                key={exp.id}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="hidden md:block absolute -left-[3.75rem] top-9 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-[0_0_0_4px_rgba(15,10,30,0.9)]" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-lg mt-1">
                      {exp.role}
                      {exp.company && ` · ${exp.company}`}
                    </p>
                  </div>
                  <span className="text-sm text-gray-300 mt-2 md:mt-0 md:ml-4 shrink-0">
                    {exp.period}
                  </span>
                </div>

                {isExpanded ? (
                  <>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {exp.context}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                        Key achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-500 mr-2 mt-1">▹</span>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
                    {exp.context}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-500/10 text-purple-200 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {experiences.length > EXPANDED_BY_DEFAULT && (
          <div className="flex justify-center mt-10 md:pl-20">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {showAll ? "Show less" : "Show full details for earlier roles"}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experiences;

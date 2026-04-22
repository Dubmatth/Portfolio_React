import { experiences } from "../data/portfolio";

const Experiences = ({ experiencesRef, isLoaded }) => {
  return (
    <section ref={experiencesRef} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiences & Achievements
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-medium text-lg mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0 md:ml-4 shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {exp.context}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

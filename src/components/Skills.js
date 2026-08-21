import { skillCategories } from "../data/portfolio";

const Skills = ({ skillsRef, isLoaded }) => {
  return (
    <section ref={skillsRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
                {group.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 ${
                        isLoaded
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${(groupIndex * 3 + index) * 100}ms` }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} shrink-0`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

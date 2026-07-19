import { MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 7+ years of experience
              creating digital solutions that combine functionality with
              beautiful design. At 10, I built my first website following an
              online guide. Life took me elsewhere — video games, other
              passions — but code never really left. At 29, I went back to
              school, earned my Web Developer degree with high distinction, and
              turned my internship into a full-time role as a junior consultant.
              What still fascinates me today is the same thing that hooked me
              as a kid: the idea that you can talk to a machine through text.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Life outside work mostly means family — I'm a dad of three young
              kids, so time is precious. But I've never managed to stay away
              from tech for long. A few days in, I'm back reading articles on
              Medium, checking what's new on GitHub, or catching up on the
              latest releases and drama on social media. It's not a routine I
              force — it's just who I am.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={require("../assets/IMG_1974.png")}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

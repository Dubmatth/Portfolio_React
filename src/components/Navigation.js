import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

const Navigation = ({ activeSection, scrollToSection, isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  return (
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
                <div className="logo-showcase">
                  <div className="logo-display">
                    <div className="logo-flash">MD</div>
                    <div className="scan-line"></div>
                  </div>
                </div>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                      activeSection === item
                        ? "bg-white/20 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
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

        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

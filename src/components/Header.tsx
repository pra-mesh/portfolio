import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../constants/personalInfo";
import { useTheme } from "../contexts/ThemeContext";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../constants/navItems";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = "Resume_prams_prada.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 text-slate-700 dark:text-slate-200  ${
        isScrolled
          ? "bg-white/80 dark:bg-black/60  backdrop:blur-xl shadow-2xl"
          : " bg-white/5 dark:bg-black/5"
      }
       transition-colors duration-300  `}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-12 ${
          isScrolled ? "border-b border-gray-500/10" : ""
        }`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className=" font-bold">{PERSONAL_INFO.name}</h1>
          </div>
          <nav className="hidden md:flex text-2xl space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                type="button"
                className={`text-sm font-bold transition-colors duration-300
                   hover:bg-gradient-to-r hover:text-transparent bg-clip-text hover:from-lime-300 hover:to-green-600 ${
                     isScrolled ? "text-slate-800 dark:text-slate-100 " : ""
                   }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-slate-500 dark:text-slate-300 hover:text-green-500 dark:hover:text-white hover:bg-slate-100
               dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center md:space-x-2 px-2 md:px-4 py-2
               bg-gradient-to-r from-lime-400 to-green-600 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <Download size={16} />
              <span className="hidden md:inline-flex">Resume</span>
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-600" : "text-white"
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-black/90  border-y border-gray-500/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium
                    hover:bg-gradient-to-r hover:text-transparent bg-clip-text hover:from-lime-300 hover:to-green-600
                     rounded-md transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

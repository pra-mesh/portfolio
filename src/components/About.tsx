import { Maximize, Minus, Trophy, X } from "lucide-react";
import { codeElements } from "./codeElementsAbout";
import { timeline } from "../constants/timeline";
import { GiJourney } from "react-icons/gi";
import { achievements } from "../constants/achievements";

const About = () => {
  return (
    <section id="about" className="py-20  relative overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-5 transform transition-all duration-1000 
          `}
        >
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600
           dark:from-sky-400 dark:to-green-700 bg-clip-text text-transparent mb-6"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r via-indigo-500 to-teal-600 mx-auto rounded-full animate-ping"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20 text-slate-600 dark:text-slate-300">
          <div>
            <div className="relative mr-25 lg:mr-0">
              {/* Main Code Terminal */}
              <div
                className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border
        border-gray-400/20  dark:border-gray-700/50 shadow-2xl  overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="mx-4 flex items-center justify-between  py-3 border-b border-slate-700/50">
                  <div>
                    <p className="pl-2 pr-5 text-xl  border-slate-700/50 border-t border-x border-t-blue-600/80 shadow-2xl b">
                      Overview
                    </p>
                  </div>
                  <div className="flex space-x-4 text-gray-700 dark:text-gray-100">
                    <Minus className="h-4 w-4 " />
                    <Maximize className="h-4 w-4" />
                    <X className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col text-slate-600 dark:text-slate-300  justify-end">
                  <div className="p-6 h-75 flex-1 space-y-4">
                    <p className="text-lg leading-relaxed mb-6">
                      I'm a passionate full-stack developer with over 5 years of
                      experience building enterprise-grade applications using{" "}
                      <span className="font-semibold text-blue-600">.NET</span>{" "}
                      and
                      <span className="font-semibold text-cyan-600">
                        {" "}
                        React
                      </span>
                      . I specialize in creating scalable, maintainable
                      solutions that deliver exceptional user experiences.
                    </p>
                    <p className="text-lg  leading-relaxed mb-6">
                      My expertise spans the entire development lifecycle, from
                      architectonic robust backend systems with .NET Core to
                      crafting responsive, interactive front-ends with React and
                      TypeScript. I'm passionate about clean code, performance
                      optimization, and staying current with the latest
                      technologies.
                    </p>
                    <p className="text-lg  leading-relaxed">
                      When I'm not coding, you'll find me contributing to
                      open-source projects, mentoring junior developers, or
                      exploring new technologies that can solve real-world
                      problems.
                    </p>
                  </div>
                  <div className=" border-t mx-4 my-2 border-slate-700/50 py-4 px-2">
                    <div className="  flex items-center space-x-2 text-green-500 dark:text-green-400 font-mono text-sm">
                      <span className="text-green-400 mr-2">$</span>
                      <span>Building amazing applications...</span>
                      <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
                    </div>
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-700/50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-violet-600">
                          10+
                        </div>
                        <div className="text-sm ">Completed Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">
                          4+
                        </div>
                        <div className="text-sm ">Years Exp</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          25+
                        </div>
                        <div className="text-sm ">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Code Elements */}
              {codeElements.map((element, index) => (
                <div
                  key={index}
                  className={`absolute ${element.position} bg-white/90 backdrop-blur-sm 
                rounded-lg p-3 shadow-lg border border-slate-200 flex items-center space-x-2 animate-pulse`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="text-blue-600">{element.icon}</div>
                  <span className="text-slate-700 font-mono text-sm">
                    {element.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 shadow-2xl rounded-2xl ">
              <h3 className="text-2xl font-bold  mb-8 flex items-center">
                <Trophy className="w-10 h-10  dark:bg-amber-50 mr-3 rounded-full border-1 border-amber-600 p-1 text-amber-600" />
                Achievement
              </h3>

              <div className="space-y-4 relative">
                {achievements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-white/10  dark:bg-gray-900/50 backdrop-blur-sm px-6 py-2 rounded-xl shadow-lg border
                       border-white/50 group-hover:shadow-xl transition-all duration-300 `}
                    >
                      <p className="leading-relaxed">{item.details}</p>
                      <div className="absolute -top-2 -left-2">
                        <Icon className="w-8 h-8 text-amber-300/90 dark:text-amber-300/50" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Timeline */}
          <div className="lg:ml-20">
            <h3 className="text-2xl font-bold  mb-8 flex items-center">
              <GiJourney className="w-10 h-10 mr-3 dark:bg-amber-50 rounded-full border-1 border-blue-600 p-1 text-blue-600" />
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-blue-600 to-emerald-600"></div>
              <div className="space-y-4">
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="relative flex items-start group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-12 h-12 
                         bg-${item.color}-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Content */}
                      <div className="ml-3 flex-1">
                        <div
                          className={`bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 group-hover:shadow-xl transition-all duration-300 `}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold underline ">
                              {item.title}
                            </h4>
                            <span
                              className={`px-3 py-1  text-sm font-semibold rounded-full`}
                            >
                              {item.year}
                            </span>
                          </div>
                          <p className="leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

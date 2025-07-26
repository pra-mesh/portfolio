import { useEffect, useMemo, useState } from "react";
import { Maximize, Minus, X } from "lucide-react";
import { PERSONAL_INFO } from "../constants/personalInfo";

export const Terminal = () => {
  const tabs = ["Program.cs", "App.tsx", "script.sql"] as const;
  type tabType = (typeof tabs)[number];

  const [activeTerminal, setActiveTerminal] = useState<tabType>("Program.cs");

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const codeSnippets = useMemo<Record<tabType, string>>(
    () => ({
      "Program.cs": "dotnet ef add migrations",
      "App.tsx": "npm run dev",
      "script.sql": "EXEC myProc",
    }),
    []
  );

  useEffect(() => {
    const text = codeSnippets[activeTerminal];
    let index = 0;
    setTypedText("");
    setIsTyping(true);
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [activeTerminal, codeSnippets]);

  return (
    <div className="relative">
      <div
        className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border
       border-gray-400/20  dark:border-gray-700/50 shadow-2xl"
      >
        {/* Termainal Header */}
        <div className="flex items-center justify-between pl-4 pr-8 py-3 border-b border-slate-700/50">
          <div>
            {tabs.map((x) => (
              <button
                key={x}
                onClick={() => setActiveTerminal(x)}
                type="button"
                className={` pl-2 pr-5 text-slate-600 dark:text-slate-300 border-slate-700/50 ${
                  activeTerminal === x
                    ? "border-t border-x border-t-blue-600/80 shadow-2xl b"
                    : "border-b"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 text-gray-700 dark:text-gray-100">
            <Minus className="h-4 w-4 " />
            <Maximize className="h-4 w-4" />
            <X className="h-4 w-4" />
          </div>
        </div>
        {/* Code Content */}
        <div className="p-6 space-y-4">
          {activeTerminal === "Program.cs" && (
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-500">
                // Building the future, one line at a time
              </div>
              <div className="text-blue-400">
                <span className="text-purple-400">public class </span>
                Developer
              </div>
              <div className="text-slate-500  dark:text-slate-300 ml-4">
                {"{"}
              </div>
              <div className="text-green-400 ml-8">
                <span className="text-purple-400">public string[]</span>
                Skills =
              </div>
              <div className="text-slate-500  dark:text-slate-300 ml-12">
                {'{ "C#", "React", "TypeScript", "SQL" };'}
              </div>
              <div className=" ml-4">{"}"}</div>
            </div>
          )}
          {activeTerminal === "App.tsx" && (
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-500">//This a components</div>
              <div className="text-purple-400">
                import <span className="text-yellow-400">{"{ "}</span>
                <span className="text-sky-300">useState</span>
                <span className="text-yellow-400">{" } "}</span>
                from
                <span className="text-orange-400/80">{' "react"'}</span>
                <br />
              </div>
              <div className="text-yellow-400">
                <span className="text-blue-400/90">const </span>
                <span className="text-yellow-300/90">Development </span>
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  =
                </span>
                ()
                <span className="text-sky-600/90">{" => "}</span>
                {"{"}
              </div>
              <div className="text-purple-400 ml-5">
                <span className="text-blue-400/90">const </span>
                {"["}
                <span className="text-blue-600/90">state </span>
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  ,
                </span>
                <span className="text-yellow-300/80">setState </span>
                {"] "}
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  =
                </span>
                {"<"}
                <span className="text-green-600/90">string </span>
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  |
                </span>
                <span className="text-green-600/90">null </span>
                {">"}(
                <span className="text-orange-400/80">{'"Hello from Js"'}</span>)
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  ;
                </span>
              </div>
              <div className="ml-5 text-purple-400">
                return
                <span className="text-blue-400/90"> {" <div>"} </span>
                {"{"} <span className="text-blue-600/90">state </span>
                {"}"}
                <span className="text-blue-400/90"> {" </div>"} </span>
              </div>
              <div className="text-purple-400">
                {"}"}
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  ;
                </span>
              </div>
              <div className="text-purple-400">
                export default
                <span className="text-yellow-300/90"> Development</span>
                <span className="text-slate-500  dark:text-slate-300 mr-2">
                  ;
                </span>
              </div>
            </div>
          )}
          {activeTerminal === "script.sql" && (
            <div className="text-blue-600/90">
              <div>
                create procedure{" "}
                <span className="text-slate-500  dark:text-slate-300 ">
                  myProc
                </span>
              </div>
              <div>as</div>
              <div>begin</div>
              <div>
                select * from{" "}
                <span className="text-slate-500  dark:text-slate-300">
                  devStack
                </span>
              </div>
              <div>end</div>
            </div>
          )}
        </div>
        <div className="border-t border-slate-700/50 pt-4 px-2 flex items-center space-x-2 text-green-500 dark:text-green-400 font-mono text-sm">
          <span>$</span>
          <span>{typedText}</span>
          <span
            className={`inline-block w-2 h-5  ${
              isTyping ? "bg-green-500 dark:bg-green-400 animate-pulse" : ""
            }`}
          ></span>
        </div>

        <div className="flex flex-wrap  gap-2 pt-4 pb-2 px-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-mono border border-blue-500/30">
            .NET Core
          </span>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono border border-cyan-500/30">
            React
          </span>
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-mono border border-yellow-500/30">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-mono border border-green-500/30">
            SQL Server
          </span>
        </div>
        {/* Floating Profile Image */}
        <div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br
        from-blue-500/70 to-purple-600/70 
        dark:from-blue-500 dark:to-purple-600 p-1 shadow-2xl"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.webp`}
            alt={PERSONAL_INFO.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

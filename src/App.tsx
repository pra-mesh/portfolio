import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div
      className="min-h-screen min-w-sm bg-gradient-to-br from-lime-50  via-indigo-50 to-lime-100  pb-3
    dark:from-teal-900 dark:via-indigo-900 dark:to-teal-900 transition-colors duration-200"
    >
      <Header />
      <Hero />
      <hr className="mx-10 text-gray-300/40 dark:text-gray-400/20 animate-pulse" />
      <About />
      <hr className="mx-10 text-gray-300/40 dark:text-gray-400/20 animate-pulse" />
      <Skills />
      <hr className="mx-10 text-gray-300/40 dark:text-gray-400/20 animate-pulse" />
      <Contact />
      <hr className="mx-10 text-gray-300/40 dark:text-gray-400/20 animate-pulse" />
      <Footer />
    </div>
  );
}

export default App;

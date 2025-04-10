import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Built-in Navbar */}
      <nav className="bg-black sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Divya K</h1>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-300 mt-3 sm:mt-0">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#internship" className="hover:text-white">Internship</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#achievements" className="hover:text-white">Achievements</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Sections */}
      <main className="px-4 sm:px-6">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        <section id="internship" className="scroll-mt-20">
          <Internship />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="achievements" className="scroll-mt-20">
          <Achievements />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

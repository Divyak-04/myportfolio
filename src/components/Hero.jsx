// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-purple-500 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Divya K
        </motion.h1>

        <motion.h2
          className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Web Developer | MERN Stack Enthusiast
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Transforming ideas into beautiful and functional websites using modern web technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <a
            href="/DIVYAK_7376222IT135(CV).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full text-center transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-3 px-6 rounded-full text-center transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mt-8 text-3xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 leading-snug mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Divya K
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Web Developer | MERN Stack Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Transforming ideas into beautiful and functional websites using modern web technologies. Let's build something amazing together!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <a
            href="/DIVYAK_7376222IT135(CV) (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full text-center transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-full text-center transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <a
            href="https://github.com/Divyak-04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/divya-k"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="py-20 px-6 bg-black text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed">
        I'm Divya K, a passionate and determined developer with experience in building full-stack web applications using the MERN stack. I enjoy solving problems and continuously improving my skills. I’ve worked on projects like a personalized news website, venue booking systems, and virtual temple tours, integrating modern technologies like MongoDB, React, and Tailwind CSS.
      </p>
    </motion.section>
  );
};
export default About;
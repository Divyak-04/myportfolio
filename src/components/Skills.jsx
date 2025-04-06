import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js","Express.js" ,"MongoDB", "Tailwind CSS", "C", "Java", "Python"];

const Skills = () => {
  return (
    <motion.section
      className="py-20 px-6 bg-gray-900 text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 px-6 py-3 rounded-full text-white border border-purple-500 hover:bg-purple-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
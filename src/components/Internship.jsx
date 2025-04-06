import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const Internship = () => {
  return (
    <div className="bg-black text-white px-6 py-10 md:py-12 md:px-12">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 border-b-2 pb-2 border-gray-700">
          <FaLaptopCode className="inline-block mr-3 text-purple-400" />
          Internship
        </h1>

        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Data Science Internship</h2>
          <p className="text-gray-300 mb-2">🗓 Duration: 1 month</p>
          <p className="text-gray-400 mb-3">
            ✅ Completed under TNSDC and Naan Mudhalvan Scheme in association with STEP NITK and Pantech E-Learning.
          </p>
          <p className="text-gray-400 italic">
            Gained practical experience in Python for Data Science, problem-solving, and real-time data projects.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Internship;

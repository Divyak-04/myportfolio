import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  return (
    <section className="bg-black text-white py-16 px-6" id="achievements">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-500 mb-10">Achievements & Certifications</h2>

        <div className="space-y-10">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 flex items-center mb-2">
              <FaCertificate className="mr-2" /> Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Problem Solving through Programming in C – NPTEL (Jan-Apr 2023)</li>
              <li>Build a Full Website Using WordPress – Coursera (Dec 2024)</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 flex items-center mb-2">
              <FaAward className="mr-2" /> Achievements
            </h3>
            <p className="text-gray-300">
              🏆 <strong>Second Runner-Up</strong> – Frontend Frenzy 2024 (25/03/2024): Awarded for developing a "Go Green" themed website in an event organized by the CodeCircle club, competing against 80+ teams.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
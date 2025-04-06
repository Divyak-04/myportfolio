import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-zinc-950 text-white py-16 px-6" id="contact">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-500 mb-10">Contact</h2>

        <div className="space-y-6 text-lg text-gray-300">
          <p className="flex items-center">
            <FaPhone className="mr-2 text-purple-400" /> 8610516378
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-purple-400" /> divya.it22@bitsathy.ac.in
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-purple-400" /> divyakulanthaisamy@gmail.com
          </p>

          <div className="flex gap-6 text-purple-300 text-2xl mt-4">
            <a href="https://github.com/Divyak-04" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/divyak04" target="_blank"><FaLinkedin /></a>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
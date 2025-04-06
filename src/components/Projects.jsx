// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Slider from "react-slick";

const projects = [
  {
    title: "Temple Tourism Website",
    tech: "HTML, CSS, JS, PHP, MySQL",
    role: "Frontend Developer",
    description:
      "A stunning, user-friendly tourism website with online booking, event listings, and cultural insights.",
    link: "https://github.com/Divyak-04/templeWeb.git",
    images: [
      "/images/Screenshot 2024-11-05 175919.png",
      "/images/Screenshot 2024-11-05 180040.png",
    ],
  },
  {
    title: "Personalized News Website",
    tech: "MERN Stack",
    role: "Frontend & Backend Developer",
    description:
      "A personalized, user-friendly news website with tailored feeds, trending topics, and real-time updates.",
    link: "https://github.com/Divyak-04/newssite.git",
    images: [
      "/images/Screenshot 2025-04-06 211130.png",
      "/images/Screenshot 2025-04-06 211345.png",
      "/images/Screenshot 2025-04-06 211403.png",
    ],
  },
  {
    title: "Venue Booking System",
    tech: "MEVN Stack",
    role: "Individual Project",
    description:
      "A platform where faculty book venues for events and admins approve or reject requests with remarks.",
    link: "https://github.com/Divyak-04/venue_booking.git",
    images: [
      "/images/Screenshot 2025-04-06 214509.png",
      "/images/Screenshot 2025-04-06 214547.png",
      "/images/Screenshot 2025-04-06 214600.png",
      "/images/Screenshot 2025-04-06 214624.png",
      "/images/Screenshot 2025-04-06 215235.png",
    ],
  },
];

// ✅ Slider settings with single default arrow
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, // Only default arrows, no duplicates
};

const Projects = () => {
  return (
    <section className="bg-zinc-950 py-16 px-6" id="projects">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-500 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-2xl p-6 shadow-xl hover:shadow-purple-600 transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              {/* ✅ Image slider with full image view */}
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl mb-4"
                  />
                ))}
              </Slider>

              <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-1">
                🛠 <strong>Tech:</strong> {project.tech}
              </p>
              <p className="text-gray-300 text-sm mb-1">
                👤 <strong>Role:</strong> {project.role}
              </p>
              <p className="text-gray-400 mt-2 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

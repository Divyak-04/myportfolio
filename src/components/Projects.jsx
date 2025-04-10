// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

// ✅ Slider configuration
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Projects = () => {
  return (
    <section className="bg-zinc-950 py-16 px-4 sm:px-6" id="projects">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-500 mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-purple-600 transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 rounded-md overflow-hidden">
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto max-h-[350px] object-contain rounded-xl"
                    />
                  ))}
                </Slider>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-1">
                🛠 <strong>Tech:</strong> {project.tech}
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-1">
                👤 <strong>Role:</strong> {project.role}
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-2 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors"
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

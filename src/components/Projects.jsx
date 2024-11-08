import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Toggle project details on tap for mobile view
  const handleTap = (projectId) => {
    if (activeProjectId === projectId) {
      setActiveProjectId(null); // Close the overlay if already open
    } else {
      // Slight delay to avoid flicker
      setTimeout(() => setActiveProjectId(projectId), 50);
    }
  };

  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
            onClick={() => handleTap(project.id)}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Display project details on tap (mobile) or hover (desktop) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                activeProjectId === project.id || window.innerWidth > 768
                  ? "opacity-100 backdrop-blur-lg bg-black bg-opacity-60"
                  : "opacity-0"
              }`}
            >
              <h3 className="mb-2 text-xl sm:text-lg">{project.name}</h3>
              <p className="mb-12 p-4 sm:p-2 sm:text-sm">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 sm:px-3 sm:py-1 sm:text-xs"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // State to handle tapped project (for mobile behavior)
  const [tappedProject, setTappedProject] = useState(null);

  // Function to toggle project details on tap (mobile view)
  const handleTap = (project) => {
    setTappedProject(tappedProject === project ? null : project);
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
            onClick={() => handleTap(project)} // Handle tap for mobile
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Show project details for desktop and mobile */}
            {(tappedProject === project || window.innerWidth > 768) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
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
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      duration: "2023 - 2024",
      title: "Tourism App For Coimbatore",
      description:
        "Developed a tourism app on Android Studio for Coimbatore, featuring tourist spots, hotels, and restaurants. Integrated location-based features for a seamless user experience. Ensured high-quality UI/UX. Currently under copyright process and to be uploaded to Play Store.",
      techStack: ["Android Studio", "Firebase"],
    },
    {
      duration: "2024",
      title: "Bonafide Certificate Request System",
      description:
        "Developed a digital solution to automate the bonafide certificate request process, reducing manual paperwork. Led the back-end implementation with SQL and PHP, and designed the front-end using HTML and CSS. Reached the finals of SREC Hackathon 1.0, demonstrating innovation and problem-solving skills.",
      techStack: ["HTML5", "CSS3", "JS", "PHP", "MySQL"],
    },
    {
      duration: "Jun 2024 - Jul 2024",
      title: "Tectzo Solutions Private Limited",
      description:
        "Developed a transport management web app, utilizing React Native, ReactJS, NodeJS, ExpressJS, and MongoDB with roles for Drivers, Managers, and Customers. Facilitates vehicle rental, efficient enterprise vehicle management, and parcel servicing, streamlining the transportation process for all users. Currently in the final stage of development, ready for deployment.",
      techStack: ["ReactJS", "React Native", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      duration: "2024 - Current",
      title: "Homeopathy Clinic Website and App",
      description:
        "Developed a website and mobile app for a homeopathy clinic, allowing patients to book appointments and consult doctors via video calls. Integrated an ML model to classify patients as acute or chronic based on initial symptom input. Patients can make appointments and track their medical records. Doctors can track patients with the call log.",
      techStack: ["ReactJS", "React Native", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      duration: "2025",
      title: "Calendar Event Management System",
      description:
        "Developed an interactive event management calendar using FullCalendar.io and enhanced the UI with dialog boxes from shadcn/ui. Tasks can be added by clicking on a date in the calendar and are stored in local storage. Tasks can be edited, moved, and deleted, with flexible time adjustments. All tasks can be exported as JSON or CSV.",
      techStack: ["NextJS", "FullCalendar.io"],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      className="px-6 lg:px-[13rem] py-[2.4rem] bg-white dark:bg-[#1D1E24] text-black dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl mb-12 sixtyfour-styled"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <AnimatePresence>
        {projects
          .slice(0, showAll ? projects.length : 3)
          .map((project, index) => (
            <motion.section
              key={index}
              className="flex flex-col lg:flex-row lg:gap-4 mb-8 border-b border-gray-300 dark:border-gray-700 pb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="lg:w-1/2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  {project.duration}
                </p>
              </motion.div>

              <div className="lg:w-1/2">
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-lg text-black dark:text-white">
                    {project.title}
                  </h1>
                  <p className="text-sm font-quicksand text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gray-300 dark:bg-[#A8B9CF] text-sm px-3 py-1 rounded-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ))}
      </AnimatePresence>

      {projects.length > 3 && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-[#2D2F36] text-black dark:text-white shadow-md hover:bg-gray-300 dark:hover:bg-[#3A3B42] transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;

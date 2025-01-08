import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      duration: "2024 - Current",
      title: "Homeopathy Clinic Website and App",
      description:
        "Developed a website and mobile app for a homeopathy clinic, allowing patients to book appointments and consult doctors via video calls. Integrated an ML model to classify patients as acute or chronic based on initial symptom input. Patients can make appointments and track their medical records. Doctors can track patients with the call log.",
      techStack: [
        "React Native",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
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
      techStack: ["HTML5", "CSS", "JS", "PHP", "MySQL"],
    },
  ];

  return (
    <motion.div
      className="px-6 lg:px-[13rem] py-[2.4rem] bg-[#1D1E24] text-white"
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

      {projects.map((project, index) => (
        <motion.section
          key={index}
          className="flex flex-col lg:flex-row lg:gap-4 mb-8 border-b border-gray-700 pb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">{project.duration}</p>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="text-lg">{project.title}</h1>
              <p className="text-sm font-quicksand">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-[#A8B9CF] text-sm px-3 py-1 rounded-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 + techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default Projects;

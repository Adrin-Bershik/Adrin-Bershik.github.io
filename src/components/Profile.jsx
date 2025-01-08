import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layout, Cpu, Server, Wifi } from "lucide-react";

const Profile = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  // Array of tech icons with labels
  const techIcons = [
    { icon: Code, label: "Development" },
    { icon: Database, label: "Database" },
    { icon: Globe, label: "Web" },
    { icon: Layout, label: "Frontend" },
    { icon: Server, label: "Backend" },
    { icon: Cpu, label: "Systems" },
    { icon: Wifi, label: "Network" },
  ];

  // Rotate through icons automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % techIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row py-5 px-6 md:px-16 items-center">
      <motion.div
        className="flex flex-col justify-center items-center md:items-end w-full md:w-1/2 md:pr-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-[1.3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hey guys! This is
        </motion.p>
        <motion.p
          className="text-[4rem] sm:text-[5.5rem] text-[#1EA7E7]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Adrin
        </motion.p>
        <motion.p
          className="text-[4rem] sm:text-[5.5rem] text-[#1EA7E7]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Bershik
        </motion.p>

        <motion.div
          className="flex gap-2 items-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[1.3rem]">Follow me on</p>
          <div className="flex space-x-3">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/adrinbershik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#0A66C2] transition"
            >
              <i className="bi bi-linkedin"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Adrin-Bershik-C-J"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#171515] transition"
            >
              <i className="bi bi-github"></i>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center md:justify-end mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="mailto:adrinbershik.2201008@srec.ac.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-[#A8B9CF] w-28 h-10 rounded-md hover:bg-[#95A5C7] transition">
              Mail Me
            </button>
          </motion.a>
          <motion.a
            href="../assets/Resume.pdf"
            download="Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="text-[#A8B9CF] w-32 h-10 rounded-md border border-[#A8B9CF] bg-[#1D1E24] hover:text-[#ffffff] hover:bg-[#A8B9CF] transition">
              Download CV
            </button>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full mb-3 md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative w-[22rem] h-[22rem] sm:w-[27rem] sm:h-[27rem] bg-[#1D1E24] rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Connection Lines Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-[#A8B9CF]"
                style={{ top: `${i * 5}%`, left: 0 }}
                animate={{
                  x: [-1000, 1000],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Central Tech Icon Display */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              key={activeIcon}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {React.createElement(techIcons[activeIcon].icon, {
                size: 120,
                className: "text-[#A8B9CF]",
              })}
            </motion.div>
            <motion.p
              key={`label-${activeIcon}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-[#A8B9CF] text-xl font-semibold"
            >
              {techIcons[activeIcon].label}
            </motion.p>
          </motion.div>

          {/* Orbiting Small Icons */}
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: index * (15 / techIcons.length),
                ease: "linear",
              }}
            >
              <motion.div
                style={{
                  transform: `translate(120px, 0)`,
                }}
                animate={{
                  scale: activeIcon === index ? 1.2 : 0.8,
                  opacity: activeIcon === index ? 1 : 0.3,
                }}
              >
                {React.createElement(tech.icon, {
                  size: 24,
                  className: "text-[#A8B9CF]",
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;

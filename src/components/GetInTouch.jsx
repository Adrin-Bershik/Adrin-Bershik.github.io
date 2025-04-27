import React from "react";
import { motion } from "framer-motion";
import linktree from "../assets/linktree.png";
import github from "../assets/githubIcon.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";

const GetInTouch = () => {
  return (
    <motion.footer
      className="flex flex-col items-center gap-4 py-6 bg-white dark:bg-[#1D1E24] text-black dark:text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-3xl"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Connect with me!
      </motion.h3>

      <motion.div
        className="flex gap-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/adrinbershik"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-7 h-7 object-contain"
          />
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:adrinbershik.2201008@srec.ac.in"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={gmail}
            alt="Gmail"
            className="w-8 h-8 object-contain rounded-full"
          />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Adrin-Bershik-C-J"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={github} alt="GitHub" className="w-8 h-8 object-contain" />
        </motion.a>

        {/* Linktree */}
        <motion.a
          href="https://linktr.ee/adrinbershik"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={linktree}
            alt="Linktree"
            className="w-7 h-7 object-contain"
          />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default GetInTouch;

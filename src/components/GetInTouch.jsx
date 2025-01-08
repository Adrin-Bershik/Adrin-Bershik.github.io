import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <motion.footer
      className="flex flex-col items-center gap-4 py-6 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-lg"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stay in touch!
      </motion.h3>
      <motion.div
        className="flex gap-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://www.linkedin.com/in/adrin-bershik-95b919256"
          className="text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0A66C2" }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bi bi-linkedin text-2xl"></i>
        </motion.a>
        <motion.a
          href="mailto:adrinbershik.2201008@srec.ac.in"
          className="text-gray-300"
          whileHover={{ scale: 1.2, color: "#EA4335" }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bi bi-envelope-fill text-2xl"></i>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default GetInTouch;

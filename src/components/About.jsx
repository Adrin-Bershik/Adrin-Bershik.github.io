import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="px-6 lg:px-[13rem] py-[2.4rem] bg-white dark:bg-[#1D1E24] text-black dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl text-black dark:text-white"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>
      <br />
      <motion.p
        className="text-2xl font-quicksand text-justify text-gray-700 dark:text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Hello! I'm <span className="font-bold text-[#1EA7E7] dark:text-[#1EA7E7]">Adrin</span>, a
          passionate and forward-thinking student with hands-on experience in
          developing full-stack projects using modern technologies.
        </p>
        <br />
        <p>
          Motivated by the desire to explore new trends and technologies, I am
          focused on solving complex problems and building scalable web
          applications.
        </p>
        <br />
        <p>
          I thrive in collaborative environments and am committed to delivering
          impactful solutions that meet user and business needs. Always striving
          to grow professionally, I'm eager to contribute to meaningful projects
          and reach new heights in the tech industry.
        </p>
        <br />
      </motion.p>
    </motion.section>
  );
};

export default About;

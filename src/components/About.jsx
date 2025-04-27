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
          Hello! I'm{" "}
          <span className="font-bold text-[#1EA7E7] dark:text-[#1EA7E7]">
            Adrin
          </span>
          , a passionate and forward-thinking student at Sri Ramakrishna
          Engineering College. With a strong foundation in full-stack
          development, I am driven by a desire to create innovative, scalable,
          and user-centric solutions that can shape the future of technology.
        </p>
        <br />
        <p>
          I thrive on exploring new trends and technologies, constantly learning
          and adapting to the ever-evolving landscape of the tech world. My goal
          is to leverage my skills to make a meaningful impact while
          collaborating with like-minded professionals, mentors, and potential
          partners who share my enthusiasm for innovation.
        </p>
        <br />
        <p>
          Always motivated by the challenge of pushing boundaries, I’m committed
          to continuous growth and to contributing to projects that foster
          progress and change. Let's connect and collaborate to build the tech
          of tomorrow!
        </p>
        <br />
      </motion.p>
    </motion.section>
  );
};

export default About;

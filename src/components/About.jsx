import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="px-6 lg:px-[13rem] py-[2.4rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="text-3xl"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>
      <br />
      <motion.p 
        className="text-2xl font-quicksand"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hello! I'm Adrin, a passionate and forward-thinking student with
        hands-on experience in developing full-stack projects using modern
        technologies. Motivated by the desire to explore
        new trends and technologies, I am focused on solving complex problems
        and building scalable web applications. I thrive in collaborative
        environments and am committed to delivering impactful solutions that
        meet user and business needs. Always striving to grow professionally,
        I'm eager to contribute to meaningful projects and reach new heights in
        the tech industry.
      </motion.p>
    </motion.section>
  );
};

export default About;
import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import tailwindIcon from "../assets/Tailwind_CSS_Logo.svg.png";
import react from "../assets/react.svg";
import cIcon from "../assets/c.png";
import node from "../assets/node.svg";
import express from "../assets/express-original.svg";
import mongodb from "../assets/mongodb-original.svg";
import github from "../assets/github.svg";
import mysql from "../assets/mysql.png";
import angular from "../assets/angular.svg";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "ReactJS", icon: react },
    { name: "AngularJS", icon: angular },
    { name: "NodeJS", icon: node },
    { name: "ExpressJS", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "GitHub", icon: github },
    { name: "C", icon: cIcon },
    { name: "MySQL", icon: mysql },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="px-6 lg:px-[13rem] py-[2.4rem] bg-[#1D1E24] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-3xl mb-12 sixtyfour-styled"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#202537] w-40 h-40 flex flex-col items-center justify-center rounded-md"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="h-20 w-20 mb-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h4
              //className="font-quicksand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {skill.name}
            </motion.h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

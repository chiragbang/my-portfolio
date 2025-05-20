"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { Engine } from "@tsparticles/engine";

type AboutProps = {
  id?: string;
};

const About = ({ id }: AboutProps) => {
  // Initialize tsparticles
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id={id} className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center antialiased py-12 px-4 relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content */}
      <motion.div
        className="max-w-3xl w-full text-center relative z-10 backdrop-blur-md bg-neutral-900/30 p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] border border-neutral-800/50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading with Typewriter Effect */}
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              "About Me",
              2000,
              "About Chirag Bang",
              2000,
              "About My Journey",
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8"
          />
        </motion.div>

        {/* Detailed Description */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-200 text-base md:text-lg leading-relaxed mb-10"
        >
          I'm Chirag Bang, a Full Stack Developer with a passion for building innovative, high-performance web applications. With over 5 years of experience, I specialize in React, Next.js, Node.js, and TypeScript, creating solutions that are fast, scalable, and user-focused. My expertise extends to optimizing SEO, ensuring accessibility, and implementing agile methodologies to deliver exceptional results. I thrive on turning complex challenges into elegant solutions and stay ahead of the curve by exploring AI-driven development and modern frameworks. Outside of coding, I contribute to open-source communities, write tech blogs, and dive into the latest industry trends to fuel my creativity and growth.
        </motion.p>

        {/* Hire Me Button with Tilt Effect */}
        <motion.div variants={itemVariants}>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
          >
            {/* <a
              href="mailto:chiragbang@example.com"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition duration-300 transform hover:-translate-y-1"
            >
              Hire Me
            </a> */}

            <div className="mt-4 relative z-10">
            <a
              href="mailto:chiragbang@example.com"
              download
              className="inline-block px-6 py-2 text-sm md:text-base font-medium text-neutral-200 border border-neutral-700 rounded-full hover:border-neutral-300 hover:text-white hover:shadow-[0_0_10px_#fff3] transition duration-300"
            >
              Hire Me
            </a>
          </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
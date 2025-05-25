"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-10">
      <div className="max-w-9xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Image */}
       

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-bold">
            Chirag Bang
          </h1>
          <p className="text-neutral-500 max-w-lg my-2 text-sm md:text-base relative z-10">
            Full Stack Developer building fast, scalable web apps with React, Next.js & Node.js. Focused on UX, SEO, and agile-driven development.
          </p>

          {/* Modern Download Resume Button */}
          <div className="mt-4 relative z-10">
            <Link
              href="/resume.pdf"
              download
              className="inline-block px-6 py-2 text-sm md:text-base font-medium text-neutral-200 border border-neutral-700 rounded-full hover:border-neutral-300 hover:text-white hover:shadow-[0_0_10px_#fff3] transition duration-300"
            >
              Download Resume
            </Link>
          </div>
        </div>
         <div className="relative z-10">
          <Image
            src="/profile7.png"
            alt="Chirag Bang Avatar"
            width={500}
            height={500}
            className="shadow-lg"
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;


// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// // const Hero = () => {
// //   const skills = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "GraphQL"];

// //   // Particle animation styles
// //   const particleStyles = `
// //     canvas#particle-canvas {
// //       position: absolute;
// //       top: 0;
// //       left: 0;
// //       width: 100%;
// //       height: 100%;
// //       z-index: 0;
// //       opacity: 0.3;
// //     }
// //   `;

// //   // Particle animation script
// //   const particleScript = `
// //     const canvas = document.getElementById('particle-canvas');
// //     const ctx = canvas.getContext('2d');
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;
    
// //     const particlesArray = [];
// //     const numberOfParticles = 100;
    
// //     class Particle {
// //       constructor() {
// //         this.x = Math.random() * canvas.width;
// //         this.y = Math.random() * canvas.height;
// //         this.size = Math.random() * 5 + 1;
// //         this.speedX = Math.random() * 0.5 - 0.25;
// //         this.speedY = Math.random() * 0.5 - 0.25;
// //       }
// //       update() {
// //         this.x += this.speedX;
// //         this.y += this.speedY;
// //         if (this.size > 0.2) this.size -= 0.01;
// //       }
// //       draw() {
// //         ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
// //         ctx.beginPath();
// //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// //         ctx.fill();
// //       }
// //     }
    
// //     function init() {
// //       for (let i = 0; i < numberOfParticles; i++) {
// //         particlesArray.push(new Particle());
// //       }
// //     }
    
// //     function animate() {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       for (let i = 0; i < particlesArray.length; i++) {
// //         particlesArray[i].update();
// //         particlesArray[i].draw();
// //         if (particlesArray[i].size <= 0.2) {
// //           particlesArray.splice(i, 1);
// //           i--;
// //           particlesArray.push(new Particle());
// //         }
// //       }
// //       requestAnimationFrame(animate);
// //     }
    
// //     init();
// //     animate();
    
// //     window.addEventListener('resize', () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     });
// //   `;

// //   return (
// //     <div className="relative w-full min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center overflow-hidden p-6 md:p-12">
// //       <style>{particleStyles}</style>
// //       <canvas id="particle-canvas" />
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
// //         {/* Left: Text and Call-to-Action */}
// //         <motion.div
// //           className="md:w-3/5 text-center md:text-left space-y-6 bg-neutral-900/50 backdrop-blur-md p-8 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-neutral-700/30"
// //           initial={{ x: -50, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         >
// //           <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300 tracking-tight">
// //             Chirag Bang
// //           </h1>
// //           <div className="text-neutral-200 text-lg md:text-2xl font-semibold min-h-[2.5rem]">
// //             <TypeAnimation
// //               sequence={[
// //                 "Full Stack Developer",
// //                 2000,
// //                 "Architecting Scalable Solutions",
// //                 2000,
// //                 "Designing Seamless UX",
// //                 2000,
// //                 "Driving Innovation Forward",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               repeat={Infinity}
// //             />
// //           </div>
// //           <p className="text-neutral-300 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
// //             I build high-performance, user-centric web applications with React, Next.js, and Node.js, delivering scalable solutions with a focus on clean code and modern design.
// //           </p>
// //           <div className="flex justify-center md:justify-start gap-4">
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Link
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-block px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
// //               >
// //                 Download Resume
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Link
// //                 href="/#projects"
// //                 className="inline-block px-8 py-3 text-base font-semibold text-cyan-300 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
// //               >
// //                 Explore Projects
// //               </Link>
// //             </motion.div>
// //           </div>
// //           {/* Social Icons */}
// //           <div className="flex justify-center md:justify-start gap-4 mt-4">
// //             <motion.a
// //               href="https://github.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4 }}
// //               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-200"
// //             >
// //               <FaGithub size={24} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4 }}
// //               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-200"
// //             >
// //               <FaLinkedin size={24} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4 }}
// //               className="text-neutral-400 hover:text-cyan-300 transition-colors duration-200"
// //             >
// //               <FaTwitter size={24} />
// //             </motion.a>
// //           </div>
// //         </motion.div>

// //         {/* Right: Avatar with Skill Badges */}
// //         <motion.div
// //           className="md:w-2/5 flex flex-col items-center"
// //           initial={{ x: 50, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         >
// //           <Image
// //             src="/profile3.jpg"
// //             alt="Chirag Bang Avatar"
// //             width={280}
// //             height={280}
// //             className="rounded-xl border-2 border-neutral-700 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-shadow duration-300"
// //           />
// //           <motion.div
// //             className="mt-6 grid grid-cols-3 gap-3"
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             {skills.map((skill, index) => (
// //               <motion.span
// //                 key={index}
// //                 className="px-4 py-2 bg-neutral-800/60 backdrop-blur-sm text-cyan-200 text-sm font-medium rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-200"
// //                 whileHover={{ y: -4, scale: 1.05 }}
// //               >
// //                 {skill}
// //               </motion.span>
// //             ))}
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //       <script dangerouslySetInnerHTML={{ __html: particleScript }} />
// //     </div>
// //   );
// // };

// // export default Hero;

// // "use client";
// // import React, { useEffect, useRef } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// // import * as THREE from "three";
// // import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// // const Hero = () => {
// //   const skills = ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "WebGL"];
// //   const canvasRef = useRef(null);
// //   const { transcript, listening, resetTranscript } = useSpeechRecognition();

// //   // Matrix Background Animation
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext("2d");
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     const fontSize = 14;
// //     const columns = canvas.width / fontSize;
// //     const drops = Array(Math.floor(columns)).fill(0);

// //     function draw() {
// //       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);
// //       ctx.fillStyle = "#22d3ee";
// //       ctx.font = `${fontSize}px monospace`;

// //       for (let i = 0; i < drops.length; i++) {
// //         const text = chars.charAt(Math.floor(Math.random() * chars.length));
// //         const x = i * fontSize;
// //         const y = drops[i] * fontSize;
// //         ctx.fillText(text, x, y);
// //         if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
// //         drops[i]++;
// //       }
// //     }

// //     const interval = setInterval(draw, 33);
// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     window.addEventListener("resize", resize);
// //     return () => {
// //       clearInterval(interval);
// //       window.removeEventListener("resize", resize);
// //     };
// //   }, []);

// //   // 3D Avatar Animation
// //   useEffect(() => {
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// //     const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: document.getElementById("avatar-canvas") });
// //     renderer.setSize(300, 300);

// //     const geometry = new THREE.SphereGeometry(1, 32, 32);
// //     const material = new THREE.MeshBasicMaterial({
// //       map: new THREE.TextureLoader().load("/profile3.jpg"),
// //       wireframe: true,
// //       wireframeLinewidth: 2,
// //       color: 0x22d3ee,
// //     });
// //     const sphere = new THREE.Mesh(geometry, material);
// //     scene.add(sphere);

// //     camera.position.z = 2;

// //     const animate = () => {
// //       sphere.rotation.y += 0.01;
// //       renderer.render(scene, camera);
// //       requestAnimationFrame(animate);
// //     };
// //     animate();

// //     return () => renderer.dispose();
// //   }, []);

// //   // Voice Command Handling
// //   useEffect(() => {
// //     if (transcript.toLowerCase().includes("download resume")) {
// //       window.location.href = "/resume.pdf";
// //       resetTranscript();
// //     }
// //   }, [transcript]);

// //   return (
// //     <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-6 md:p-12">
// //       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
// //         {/* Left: Text and CTAs */}
// //         <motion.div
// //           className="md:w-3/5 text-center md:text-left space-y-6 bg-black/30 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
// //           initial={{ x: -100, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1, ease: "easeOut" }}
// //         >
// //           <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 tracking-tighter">
// //             Chirag Bang
// //           </h1>
// //           <div className="text-cyan-200 text-lg md:text-2xl font-semibold min-h-[2.5rem]">
// //             <TypeAnimation
// //               sequence={[
// //                 "Revolutionizing Web Development",
// //                 2000,
// //                 "Crafting Immersive UX",
// //                 2000,
// //                 "Building Scalable Futures",
// //                 2000,
// //                 "Innovating with Code",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={40}
// //               repeat={Infinity}
// //             />
// //           </div>
// //           <p className="text-neutral-200 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
// //             I architect next-gen web applications with React, Next.js, and WebGL, blending cutting-edge tech with seamless user experiences. Based in Gurugram, I’m redefining digital innovation.
// //           </p>
// //           <div className="flex justify-center md:justify-start gap-4">
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Link
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-block px-8 py-3 text-base font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:from-cyan-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300"
// //               >
// //                 Download Resume
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Link
// //                 href="/#projects"
// //                 className="inline-block px-8 py-3 text-base font-semibold text-cyan-300 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300"
// //               >
// //                 Discover Projects
// //               </Link>
// //             </motion.div>
// //             <motion.button
// //               onClick={() => SpeechRecognition.startListening()}
// //               className={`inline-block px-4 py-2 text-sm font-medium text-cyan-200 rounded-full border ${listening ? "border-red-500 animate-pulse" : "border-cyan-500/30"} hover:bg-cyan-500/20 transition-all duration-300`}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {listening ? "Listening..." : "Voice Command"}
// //             </motion.button>
// //           </div>
// //           <div className="flex justify-center md:justify-start gap-4 mt-4">
// //             <motion.a
// //               href="https://github.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4, rotate: 5 }}
// //               className="text-cyan-400 hover:text-cyan-200 transition-colors duration-200"
// //             >
// //               <FaGithub size={28} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4, rotate: 5 }}
// //               className="text-cyan-400 hover:text-cyan-200 transition-colors duration-200"
// //             >
// //               <FaLinkedin size={28} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -4, rotate: 5 }}
// //               className="text-cyan-400 hover:text-cyan-200 transition-colors duration-200"
// //             >
// //               <FaTwitter size={28} />
// //             </motion.a>
// //           </div>
// //         </motion.div>

// //         {/* Right: 3D Avatar and Orbiting Skills */}
// //         <motion.div
// //           className="md:w-2/5 flex flex-col items-center relative"
// //           initial={{ x: 100, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1, ease: "easeOut" }}
// //         >
// //           <canvas id="avatar-canvas" className="w-[300px] h-[300px] rounded-full shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
// //           <div className="relative w-full h-48">
// //             {skills.map((skill, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="absolute px-4 py-2 bg-black/50 backdrop-blur-md text-cyan-200 text-sm font-medium rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"
// //                 style={{
// //                   left: "50%",
// //                   top: "50%",
// //                 }}
// //                 animate={{
// //                   x: 100 * Math.cos((2 * Math.PI * index) / skills.length),
// //                   y: 100 * Math.sin((2 * Math.PI * index) / skills.length),
// //                   rotate: 360,
// //                 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 10,
// //                   ease: "linear",
// //                   delay: index * 0.5,
// //                 }}
// //               >
// //                 {skill}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;


// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// // import { useGesture } from "@use-gesture/react";
// // import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// // const Hero = () => {
// //   const skills = ["React", "Next.js", "WebGL", "TypeScript", "GraphQL", "AI"];
// //   const canvasRef = useRef(null);
// //   const [holoPanelOpen, setHoloPanelOpen] = useState(false);
// //   const [chatPrompt, setChatPrompt] = useState("");
// //   const [chatResponse, setChatResponse] = useState("");
// //   const [isMounted, setIsMounted] = useState(false);
// //   const { transcript, listening, resetTranscript } = useSpeechRecognition();

// //   // Mark component as mounted to avoid SSR issues
// //   useEffect(() => {
// //     setIsMounted(true);
// //     return () => setIsMounted(false);
// //   }, []);

// //   // Generative Particle Grid Background
// //   useEffect(() => {
// //     if (!isMounted) return;

// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const particles = Array(80).fill().map(() => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       size: Math.random() * 4 + 2,
// //       vx: (Math.random() - 0.5) * 1,
// //       vy: (Math.random() - 0.5) * 1,
// //       hue: 180 + Math.random() * 60, // Cyan to blue range
// //     }));

// //     function draw() {
// //       if (!ctx) return;
// //       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       particles.forEach((particle) => {
// //         particle.x += particle.vx;
// //         particle.y += particle.vy;
// //         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
// //         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
// //         ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
// //         ctx.fill();

// //         // Connect nearby particles
// //         particles.forEach((other) => {
// //           const dist = Math.hypot(particle.x - other.x, particle.y - other.y);
// //           if (dist < 100 && dist > 0) {
// //             ctx.beginPath();
// //             ctx.moveTo(particle.x, particle.y);
// //             ctx.lineTo(other.x, other.y);
// //             ctx.strokeStyle = `hsla(${particle.hue}, 70%, 60%, 0.3)`;
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       requestAnimationFrame(draw);
// //     }

// //     draw();
// //     const resize = () => {
// //       if (canvas) {
// //         canvas.width = window.innerWidth;
// //         canvas.height = window.innerHeight;
// //         particles.forEach((particle) => {
// //           particle.x = Math.random() * canvas.width;
// //           particle.y = Math.random() * canvas.height;
// //         });
// //       }
// //     };
// //     window.addEventListener("resize", resize);
// //     return () => window.removeEventListener("resize", resize);
// //   }, [isMounted]);

// //   // Gesture Controls for Skill Matrix
// //   const bind = useGesture({
// //     onHover: ({ hovering }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node, i) => {
// //         node.style.transform = hovering
// //           ? `scale(1.3) translate(${Math.cos(i * 0.5) * 8}px, ${Math.sin(i * 0.5) * 8}px)`
// //           : "scale(1)";
// //       });
// //     },
// //     onDrag: ({ movement: [mx, my] }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node) => {
// //         node.style.transform = `translate(${mx * 0.1}px, ${my * 0.1}px)`;
// //       });
// //     },
// //   });

// //   // Voice Command and Chat Handling
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     if (transcript.toLowerCase().includes("open panel")) {
// //       setHoloPanelOpen(true);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("download resume")) {
// //       window.location.href = "/resume.pdf";
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("close panel")) {
// //       setHoloPanelOpen(false);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("chat")) {
// //       setChatResponse("Greetings! I'm Chirag's AI assistant. Ask about his projects, skills, or vision!");
// //       resetTranscript();
// //     }
// //   }, [transcript, isMounted]);

// //   const handleChatSubmit = (e) => {
// //     e.preventDefault();
// //     if (chatPrompt.toLowerCase().includes("project")) {
// //       setChatResponse("Chirag builds cutting-edge web apps with React and Next.js. Explore his projects below!");
// //     } else if (chatPrompt.toLowerCase().includes("skill")) {
// //       setChatResponse("Chirag masters React, Next.js, WebGL, TypeScript, and AI. Want specifics?");
// //     } else {
// //       setChatResponse("I'm ready to assist! Try asking about Chirag's work or expertise.");
// //     }
// //     setChatPrompt("");
// //   };

// //   if (!isMounted) return null;

// //   return (
// //     <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-4 md:p-12" {...bind()}>
// //       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-12" />
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
// //         {/* Left: Holographic Interface */}
// //         <motion.div
// //           className="md:w-3/5 text-center md:text-left space-y-6 bg-black/20 backdrop-blur-2xl p-10 rounded-3xl border border-cyan-500/15 shadow-[0_0_50px_rgba(34,211,238,0.4)]"
// //           initial={{ x: -150, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.2, ease: "easeOut" }}
// //         >
// //           <h1 className="text-4xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 to-blue-400 tracking-tighter">
// //             Chirag Bang
// //           </h1>
// //           <div className="text-cyan-50 text-lg md:text-3xl font-bold min-h-[3rem]">
// //             <TypeAnimation
// //               sequence={[
// //                 "Cybernetic Web Pioneer",
// //                 2000,
// //                 "Crafting Digital Dimensions",
// //                 2000,
// //                 "Architecting Tomorrow",
// //                 2000,
// //                 "Merging Code & Vision",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={30}
// //               repeat={Infinity}
// //             />
// //           </div>
// //           <p className="text-neutral-100 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
// //             From Gurugram, I create revolutionary web experiences with React, Next.js, and WebGL, blending futuristic design with AI-driven innovation.
// //           </p>
// //           <motion.div
// //             className="flex justify-center md:justify-start gap-4"
// //             animate={{ y: holoPanelOpen ? 0 : -20, opacity: holoPanelOpen ? 1 : 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
// //               <Link
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-block px-10 py-4 text-lg font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-500 rounded-xl hover:from-cyan-400 hover:to-blue-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-300"
// //               >
// //                 Download Resume
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
// //               <Link
// //                 href="/#projects"
// //                 className="inline-block px-10 py-4 text-lg font-bold text-cyan-100 border border-cyan-400/20 rounded-xl hover:bg-cyan-400/15 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
// //               >
// //                 Explore Projects
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //           <motion.div className="flex flex-col gap-3">
// //             <motion.button
// //               onClick={() => SpeechRecognition.startListening()}
// //               className={`inline-block px-6 py-3 text-sm font-bold text-cyan-50 rounded-xl border ${listening ? "border-red-400 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.6)]" : "border-cyan-400/20"} hover:bg-cyan-400/20 transition-all duration-300`}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {listening ? "Listening..." : "Voice Control (Say 'Open Panel' or 'Chat')"}
// //             </motion.button>
// //             {chatResponse && (
// //               <motion.div
// //                 className="text-cyan-100 text-sm bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-[0_0_10px_rgba(34,211,238,0.3)]"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.4 }}
// //               >
// //                 {chatResponse}
// //               </motion.div>
// //             )}
// //             <form onSubmit={handleChatSubmit} className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={chatPrompt}
// //                 onChange={(e) => setChatPrompt(e.target.value)}
// //                 placeholder="Ask about my work..."
// //                 className="px-4 py-2 bg-black/50 text-cyan-100 rounded-xl border border-cyan-400/20 focus:outline-none focus:border-cyan-400"
// //               />
// //               <motion.button
// //                 type="submit"
// //                 className="px-4 py-2 text-sm font-bold text-cyan-50 bg-cyan-500/20 rounded-xl hover:bg-cyan-500/30"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Send
// //               </motion.button>
// //             </form>
// //           </motion.div>
// //           <div className="flex justify-center md:justify-start gap-6 mt-6">
// //             <motion.a
// //               href="https://github.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -6, rotate: 10, scale: 1.2 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaGithub size={32} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -6, rotate: 10, scale: 1.2 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaLinkedin size={32} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -6, rotate: 10, scale: 1.2 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaTwitter size={32} />
// //             </motion.a>
// //           </div>
// //         </motion.div>

// //         {/* Right: Glitch Avatar and Skill Matrix */}
// //         <motion.div
// //           className="md:w-2/5 flex flex-col items-center relative"
// //           initial={{ x: 150, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.2, ease: "easeOut" }}
// //         >
// //           <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden group">
// //             <Image
// //               src="/profile3.jpg"
// //               alt="Chirag Bang Avatar"
// //               width={300}
// //               height={300}
// //               className="object-cover rounded-full border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:animate-glitch"
// //             />
// //             <style jsx>{`
// //               @keyframes glitch {
// //                 0% {
// //                   transform: translate(0);
// //                 }
// //                 20% {
// //                   transform: translate(-2px, 2px);
// //                   clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
// //                 }
// //                 40% {
// //                   transform: translate(2px, -2px);
// //                   clip-path: polygon(0 33%, 100% 33%, 100% 66%, 0 66%);
// //                 }
// //                 60% {
// //                   transform: translate(-2px, 2px);
// //                   clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
// //                 }
// //                 80% {
// //                   transform: translate(2px, -2px);
// //                 }
// //                 100% {
// //                   transform: translate(0);
// //                   clip-path: none;
// //                 }
// //               }
// //               .animate-glitch {
// //                 animation: glitch 0.3s linear infinite;
// //               }
// //             `}</style>
// //           </div>
// //           <div className="relative w-full h-64 mt-6">
// //             {skills.map((skill, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="skill-node absolute px-5 py-2 bg-black/40 backdrop-blur-md text-cyan-100 text-sm font-bold rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)]"
// //                 style={{
// //                   left: "50%",
// //                   top: "50%",
// //                 }}
// //                 animate={{
// //                   x: 120 * Math.cos((2 * Math.PI * index) / skills.length + Date.now() * 0.0006),
// //                   y: 120 * Math.sin((2 * Math.PI * index) / skills.length + Date.now() * 0.0006),
// //                   scale: [1, 1.2, 1],
// //                   opacity: [0.7, 1, 0.7],
// //                 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 8,
// //                   ease: "easeInOut",
// //                   delay: index * 0.3,
// //                 }}
// //               >
// //                 {skill}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// // import { useGesture } from "@use-gesture/react";
// // import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// // const Hero = () => {
// //   const skills = ["React", "Next.js", "WebGL", "TypeScript", "GraphQL", "AI"];
// //   const canvasRef = useRef(null);
// //   const [holoPanelOpen, setHoloPanelOpen] = useState(false);
// //   const [chatPrompt, setChatPrompt] = useState("");
// //   const [chatResponse, setChatResponse] = useState("");
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
// //   const { transcript, listening, resetTranscript } = useSpeechRecognition();
// //   const [suggestions, setSuggestions] = useState([]);

// //   // SSR Safety
// //   useEffect(() => {
// //     setIsMounted(true);
// //     return () => setIsMounted(false);
// //   }, []);

// //   // Fractal Wave Background
// //   useEffect(() => {
// //     if (!isMounted) return;

// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     let time = 0;
// //     const waves = Array(5).fill().map(() => ({
// //       amplitude: Math.random() * 20 + 10,
// //       frequency: Math.random() * 0.02 + 0.01,
// //       phase: Math.random() * Math.PI * 2,
// //       hue: 180 + Math.random() * 60,
// //     }));

// //     function draw() {
// //       if (!ctx) return;
// //       ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       for (let x = 0; x < canvas.width; x += 5) {
// //         let y = canvas.height / 2;
// //         waves.forEach((wave) => {
// //           const distance = Math.hypot(x - cursorPos.x, y - cursorPos.y);
// //           const influence = Math.max(0, 1 - distance / 300);
// //           y += Math.sin(x * wave.frequency + time + wave.phase) * wave.amplitude * (1 + influence);
// //         });

// //         ctx.beginPath();
// //         ctx.moveTo(x, canvas.height);
// //         ctx.lineTo(x, y);
// //         ctx.strokeStyle = `hsla(${waves[0].hue}, 80%, 50%, 0.3)`;
// //         ctx.stroke();
// //       }

// //       time += 0.05;
// //       requestAnimationFrame(draw);
// //     }

// //     draw();
// //     const resize = () => {
// //       if (canvas) {
// //         canvas.width = window.innerWidth;
// //         canvas.height = window.innerHeight;
// //       }
// //     };
// //     window.addEventListener("resize", resize);
// //     window.addEventListener("mousemove", (e) => {
// //       setCursorPos({ x: e.clientX, y: e.clientY });
// //     });
// //     return () => {
// //       window.removeEventListener("resize", resize);
// //       window.removeEventListener("mousemove");
// //     };
// //   }, [isMounted, cursorPos]);

// //   // Gesture Controls for Skill Swarm
// //   const bind = useGesture({
// //     onHover: ({ hovering, xy: [x, y] }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node, i) => {
// //         const rect = node.getBoundingClientRect();
// //         const distance = Math.hypot(rect.left + rect.width / 2 - x, rect.top + rect.height / 2 - y);
// //         const scale = hovering && distance < 150 ? 1.4 : 1;
// //         node.style.transform = `scale(${scale}) translate(${Math.cos(i) * 5}px, ${Math.sin(i) * 5}px)`;
// //       });
// //     },
// //     onDrag: ({ movement: [mx, my] }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node) => {
// //         node.style.transform = `translate(${mx * 0.08}px, ${my * 0.08}px)`;
// //       });
// //     },
// //   });

// //   // Voice Command and Chat Handling
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     if (transcript.toLowerCase().includes("open panel")) {
// //       setHoloPanelOpen(true);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("download resume")) {
// //       window.location.href = "/resume.pdf";
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("close panel")) {
// //       setHoloPanelOpen(false);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("chat")) {
// //       setChatResponse("Welcome to my digital realm! Ask about my projects, skills, or vision.");
// //       setSuggestions(["Projects", "Skills", "Vision"]);
// //       resetTranscript();
// //     }
// //   }, [transcript, isMounted]);

// //   const handleChatSubmit = (e) => {
// //     e.preventDefault();
// //     if (chatPrompt.toLowerCase().includes("project")) {
// //       setChatResponse("I build revolutionary web apps with React and Next.js. Explore my projects below!");
// //       setSuggestions(["React Projects", "Next.js Apps"]);
// //     } else if (chatPrompt.toLowerCase().includes("skill")) {
// //       setChatResponse("I master React, Next.js, WebGL, TypeScript, and AI. Want specifics?");
// //       setSuggestions(["WebGL Details", "AI Expertise"]);
// //     } else if (chatPrompt.toLowerCase().includes("vision")) {
// //       setChatResponse("My vision is to fuse art, code, and AI to redefine the web. Curious?");
// //       setSuggestions(["Future of Web", "AI Integration"]);
// //     } else {
// //       setChatResponse("Let's dive deeper! Try asking about my projects, skills, or vision.");
// //       setSuggestions(["Projects", "Skills", "Vision"]);
// //     }
// //     setChatPrompt("");
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setChatPrompt(suggestion);
// //     handleChatSubmit({ preventDefault: () => {} });
// //   };

// //   if (!isMounted) return null;

// //   return (
// //     <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-4 md:p-12" {...bind()}>
// //       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-10" />
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
// //         {/* Left: Holographic Interface */}
// //         <motion.div
// //           className="md:w-3/5 text-center md:text-left space-y-6 bg-black/25 backdrop-blur-2xl p-12 rounded-3xl border border-cyan-600/15 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
// //           initial={{ x: -200, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.4, ease: "easeOut" }}
// //         >
// //           <h1 className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-50 to-blue-300 tracking-tighter">
// //             Chirag Bang
// //           </h1>
// //           <div className="text-cyan-50 text-lg md:text-3xl font-extrabold min-h-[3.5rem]">
// //             <TypeAnimation
// //               sequence={[
// //                 "Quantum Code Alchemist",
// //                 2000,
// //                 "Weaving Digital Cosmos",
// //                 2000,
// //                 "Engineering Future Realms",
// //                 2000,
// //                 "Fusing Art & Innovation",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={25}
// //               repeat={Infinity}
// //             />
// //           </div>
// //           <p className="text-neutral-50 max-w-md mx-auto md:mx-0 text-base md:text-xl leading-relaxed">
// //             From Gurugram, I craft transcendent web experiences with React, Next.js, and WebGL, blending quantum aesthetics with AI-driven innovation.
// //           </p>
// //           <motion.div
// //             className="flex justify-center md:justify-start gap-4"
// //             animate={{ y: holoPanelOpen ? 0 : -30, opacity: holoPanelOpen ? 1 : 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
// //               <Link
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-block px-12 py-4 text-lg font-extrabold text-black bg-gradient-to-r from-cyan-200 to-blue-400 rounded-xl hover:from-cyan-300 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300"
// //               >
// //                 Download Resume
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
// //               <Link
// //                 href="/#projects"
// //                 className="inline-block px-12 py-4 text-lg font-extrabold text-cyan-100 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/15 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
// //               >
// //                 Discover Projects
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //           <motion.div className="flex flex-col gap-3">
// //             <motion.button
// //               onClick={() => SpeechRecognition.startListening()}
// //               className={`inline-block px-6 py-3 text-sm font-bold text-cyan-50 rounded-xl border ${listening ? "border-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.7)]" : "border-cyan-500/20"} hover:bg-cyan-500/25 transition-all duration-300`}
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {listening ? "Listening..." : "Voice Control (Say 'Open Panel' or 'Chat')"}
// //             </motion.button>
// //             {chatResponse && (
// //               <motion.div
// //                 className="text-cyan-100 text-sm bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 {chatResponse}
// //               </motion.div>
// //             )}
// //             <form onSubmit={handleChatSubmit} className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={chatPrompt}
// //                 onChange={(e) => setChatPrompt(e.target.value)}
// //                 placeholder="Ask about my work..."
// //                 className="px-4 py-2 bg-black/50 text-cyan-100 rounded-xl border border-cyan-500/20 focus:outline-none focus:border-cyan-500"
// //               />
// //               <motion.button
// //                 type="submit"
// //                 className="px-4 py-2 text-sm font-bold text-cyan-50 bg-cyan-600/20 rounded-xl hover:bg-cyan-600/30"
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Send
// //               </motion.button>
// //             </form>
// //             {suggestions.length > 0 && (
// //               <motion.div
// //                 className="flex flex-wrap gap-2 mt-2"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.4 }}
// //               >
// //                 {suggestions.map((suggestion, index) => (
// //                   <motion.button
// //                     key={index}
// //                     onClick={() => handleSuggestionClick(suggestion)}
// //                     className="px-3 py-1 text-xs font-medium text-cyan-200 bg-black/30 rounded-full hover:bg-cyan-500/20"
// //                     whileHover={{ scale: 1.05 }}
// //                   >
// //                     {suggestion}
// //                   </motion.button>
// //                 ))}
// //               </motion.div>
// //             )}
// //           </motion.div>
// //           <div className="flex justify-center md:justify-start gap-6 mt-6">
// //             <motion.a
// //               href="https://github.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaGithub size={34} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaLinkedin size={34} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaTwitter size={34} />
// //             </motion.a>
// //           </div>
// //         </motion.div>

// //         {/* Right: Quantum Glitch Avatar and Skill Swarm */}
// //         <motion.div
// //           className="md:w-2/5 flex flex-col items-center relative"
// //           initial={{ x: 200, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.4, ease: "easeOut" }}
// //         >
// //           <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden group">
// //             <Image
// //               src="/profile3.jpg"
// //               alt="Chirag Bang Avatar"
// //               width={320}
// //               height={320}
// //               className="object-cover rounded-full border-2 border-cyan-600/30 shadow-[0_0_40px_rgba(34,211,238,0.6)] group-hover:animate-quantum-glitch"
// //             />
// //             <style jsx>{`
// //               @keyframes quantum-glitch {
// //                 0% {
// //                   transform: translate(0);
// //                   filter: brightness(1);
// //                 }
// //                 20% {
// //                   transform: translate(-3px, 3px);
// //                   filter: brightness(1.2) hue-rotate(10deg);
// //                   clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
// //                 }
// //                 40% {
// //                   transform: translate(3px, -3px);
// //                   filter: brightness(0.8) hue-rotate(-10deg);
// //                   clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
// //                 }
// //                 60% {
// //                   transform: translate(-2px, 2px);
// //                   filter: brightness(1.1);
// //                   clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
// //                 }
// //                 80% {
// //                   transform: translate(2px, -2px);
// //                   filter: brightness(0.9) hue-rotate(5deg);
// //                 }
// //                 100% {
// //                   transform: translate(0);
// //                   filter: brightness(1);
// //                   clip-path: none;
// //                 }
// //               }
// //               .animate-quantum-glitch {
// //                 animation: quantum-glitch 0.4s linear infinite;
// //               }
// //             `}</style>
// //           </div>
// //           <div className="relative w-full h-64 mt-8">
// //             {skills.map((skill, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="skill-node absolute px-6 py-2 bg-black/50 backdrop-blur-md text-cyan-100 text-sm font-extrabold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
// //                 style={{
// //                   left: "50%",
// //                   top: "50%",
// //                 }}
// //                 animate={{
// //                   x: 130 * Math.cos((2 * Math.PI * index) / skills.length + Date.now() * 0.0008),
// //                   y: 130 * Math.sin((2 * Math.PI * index) / skills.length + Date.now() * 0.0008),
// //                   scale: [1, 1.25, 1],
// //                   opacity: [0.6, 1, 0.6],
// //                 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 7,
// //                   ease: "easeInOut",
// //                   delay: index * 0.35,
// //                 }}
// //               >
// //                 {skill}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// // import { useGesture } from "@use-gesture/react";
// // import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// // const Hero = () => {
// //   const skills = ["React", "Next.js", "WebGL", "TypeScript", "GraphQL", "AI"];
// //   const canvasRef = useRef(null);
// //   const [holoPanelOpen, setHoloPanelOpen] = useState(false);
// //   const [chatPrompt, setChatPrompt] = useState("");
// //   const [chatResponse, setChatResponse] = useState("");
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
// //   const { transcript, listening, resetTranscript } = useSpeechRecognition();
// //   const [suggestions, setSuggestions] = useState([]);

// //   // SSR Safety
// //   useEffect(() => {
// //     setIsMounted(true);
// //     return () => setIsMounted(false);
// //   }, []);

// //   // Fractal Wave Background
// //   useEffect(() => {
// //     if (!isMounted) return;

// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     let time = 0;
// //     const waves = Array(5).fill().map(() => ({
// //       amplitude: Math.random() * 20 + 10,
// //       frequency: Math.random() * 0.02 + 0.01,
// //       phase: Math.random() * Math.PI * 2,
// //       hue: 180 + Math.random() * 60,
// //     }));

// //     function draw() {
// //       if (!ctx) return;
// //       ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       for (let x = 0; x < canvas.width; x += 5) {
// //         let y = canvas.height / 2;
// //         waves.forEach((wave) => {
// //           const distance = Math.hypot(x - cursorPos.x, y - cursorPos.y);
// //           const influence = Math.max(0, 1 - distance / 300);
// //           y += Math.sin(x * wave.frequency + time + wave.phase) * wave.amplitude * (1 + influence);
// //         });

// //         ctx.beginPath();
// //         ctx.moveTo(x, canvas.height);
// //         ctx.lineTo(x, y);
// //         ctx.strokeStyle = `hsla(${waves[0].hue}, 80%, 50%, 0.3)`;
// //         ctx.stroke();
// //       }

// //       time += 0.05;
// //       requestAnimationFrame(draw);
// //     }

// //     const handleMouseMove = (e) => {
// //       setCursorPos({ x: e.clientX, y: e.clientY });
// //     };

// //     const resize = () => {
// //       if (canvas) {
// //         canvas.width = window.innerWidth;
// //         canvas.height = window.innerHeight;
// //       }
// //     };

// //     draw();
// //     window.addEventListener("resize", resize);
// //     window.addEventListener("mousemove", handleMouseMove);

// //     return () => {
// //       window.removeEventListener("resize", resize);
// //       window.removeEventListener("mousemove", handleMouseMove);
// //     };
// //   }, [isMounted, cursorPos]);

// //   // Gesture Controls for Skill Swarm
// //   const bind = useGesture({
// //     onHover: ({ hovering, xy: [x, y] }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node, i) => {
// //         const rect = node.getBoundingClientRect();
// //         const distance = Math.hypot(rect.left + rect.width / 2 - x, rect.top + rect.height / 2 - y);
// //         const scale = hovering && distance < 150 ? 1.4 : 1;
// //         node.style.transform = `scale(${scale}) translate(${Math.cos(i) * 5}px, ${Math.sin(i) * 5}px)`;
// //       });
// //     },
// //     onDrag: ({ movement: [mx, my] }) => {
// //       if (!isMounted) return;
// //       const nodes = document.querySelectorAll(".skill-node");
// //       nodes.forEach((node) => {
// //         node.style.transform = `translate(${mx * 0.08}px, ${my * 0.08}px)`;
// //       });
// //     },
// //   });

// //   // Voice Command and Chat Handling
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     if (transcript.toLowerCase().includes("open panel")) {
// //       setHoloPanelOpen(true);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("download resume")) {
// //       window.location.href = "/resume.pdf";
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("close panel")) {
// //       setHoloPanelOpen(false);
// //       resetTranscript();
// //     } else if (transcript.toLowerCase().includes("chat")) {
// //       setChatResponse("Welcome to my digital realm! Ask about my projects, skills, or vision.");
// //       setSuggestions(["Projects", "Skills", "Vision"]);
// //       resetTranscript();
// //     }
// //   }, [transcript, isMounted]);

// //   const handleChatSubmit = (e) => {
// //     e.preventDefault();
// //     if (chatPrompt.toLowerCase().includes("project")) {
// //       setChatResponse("I build revolutionary web apps with React and Next.js. Explore my projects below!");
// //       setSuggestions(["React Projects", "Next.js Apps"]);
// //     } else if (chatPrompt.toLowerCase().includes("skill")) {
// //       setChatResponse("I master React, Next.js, WebGL, TypeScript, and AI. Want specifics?");
// //       setSuggestions(["WebGL Details", "AI Expertise"]);
// //     } else if (chatPrompt.toLowerCase().includes("vision")) {
// //       setChatResponse("My vision is to fuse art, code, and AI to redefine the web. Curious?");
// //       setSuggestions(["Future of Web", "AI Integration"]);
// //     } else {
// //       setChatResponse("Let's dive deeper! Try asking about my projects, skills, or vision.");
// //       setSuggestions(["Projects", "Skills", "Vision"]);
// //     }
// //     setChatPrompt("");
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setChatPrompt(suggestion);
// //     handleChatSubmit({ preventDefault: () => {} });
// //   };

// //   if (!isMounted) return null;

// //   return (
// //     <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-4 md:p-12" {...bind()}>
// //       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-10" />
// //       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
// //         {/* Left: Holographic Interface */}
// //         <motion.div
// //           className="md:w-3/5 text-center md:text-left space-y-6 bg-black/25 backdrop-blur-2xl p-12 rounded-3xl border border-cyan-600/15 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
// //           initial={{ x: -200, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.4, ease: "easeOut" }}
// //         >
// //           <h1 className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-50 to-blue-300 tracking-tighter">
// //             Chirag Bang
// //           </h1>
// //           <div className="text-cyan-50 text-lg md:text-3xl font-extrabold min-h-[3.5rem]">
// //             <TypeAnimation
// //               sequence={[
// //                 "Quantum Code Alchemist",
// //                 2000,
// //                 "Weaving Digital Cosmos",
// //                 2000,
// //                 "Engineering Future Realms",
// //                 2000,
// //                 "Fusing Art & Innovation",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={25}
// //               repeat={Infinity}
// //             />
// //           </div>
// //           <p className="text-neutral-50 max-w-md mx-auto md:mx-0 text-base md:text-xl leading-relaxed">
// //             From Gurugram, I craft transcendent web experiences with React, Next.js, and WebGL, blending quantum aesthetics with AI-driven innovation.
// //           </p>
// //           <motion.div
// //             className="flex justify-center md:justify-start gap-4"
// //             animate={{ y: holoPanelOpen ? 0 : -30, opacity: holoPanelOpen ? 1 : 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
// //               <Link
// //                 href="/resume.pdf"
// //                 download
// //                 className="inline-block px-12 py-4 text-lg font-extrabold text-black bg-gradient-to-r from-cyan-200 to-blue-400 rounded-xl hover:from-cyan-300 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300"
// //               >
// //                 Download Resume
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
// //               <Link
// //                 href="/#projects"
// //                 className="inline-block px-12 py-4 text-lg font-extrabold text-cyan-100 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/15 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
// //               >
// //                 Discover Projects
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //           <motion.div className="flex flex-col gap-3">
// //             <motion.button
// //               onClick={() => SpeechRecognition.startListening()}
// //               className={`inline-block px-6 py-3 text-sm font-bold text-cyan-50 rounded-xl border ${listening ? "border-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.7)]" : "border-cyan-500/20"} hover:bg-cyan-500/25 transition-all duration-300`}
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {listening ? "Listening..." : "Voice Control (Say 'Open Panel' or 'Chat')"}
// //             </motion.button>
// //             {chatResponse && (
// //               <motion.div
// //                 className="text-cyan-100 text-sm bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 {chatResponse}
// //               </motion.div>
// //             )}
// //             <form onSubmit={handleChatSubmit} className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={chatPrompt}
// //                 onChange={(e) => setChatPrompt(e.target.value)}
// //                 placeholder="Ask about my work..."
// //                 className="px-4 py-2 bg-black/50 text-cyan-100 rounded-xl border border-cyan-500/20 focus:outline-none focus:border-cyan-500"
// //               />
// //               <motion.button
// //                 type="submit"
// //                 className="px-4 py-2 text-sm font-bold text-cyan-50 bg-cyan-600/20 rounded-xl hover:bg-cyan-600/30"
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Send
// //               </motion.button>
// //             </form>
// //             {suggestions.length > 0 && (
// //               <motion.div
// //                 className="flex flex-wrap gap-2 mt-2"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.4 }}
// //               >
// //                 {suggestions.map((suggestion, index) => (
// //                   <motion.button
// //                     key={index}
// //                     onClick={() => handleSuggestionClick(suggestion)}
// //                     className="px-3 py-1 text-xs font-medium text-cyan-200 bg-black/30 rounded-full hover:bg-cyan-500/20"
// //                     whileHover={{ scale: 1.05 }}
// //                   >
// //                     {suggestion}
// //                   </motion.button>
// //                 ))}
// //               </motion.div>
// //             )}
// //           </motion.div>
// //           <div className="flex justify-center md:justify-start gap-6 mt-6">
// //             <motion.a
// //               href="https://github.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaGithub size={34} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaLinkedin size={34} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ y: -8, rotate: 12, scale: 1.3 }}
// //               className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
// //             >
// //               <FaTwitter size={34} />
// //             </motion.a>
// //           </div>
// //         </motion.div>

// //         {/* Right: Quantum Glitch Avatar and Skill Swarm */}
// //         <motion.div
// //           className="md:w-2/5 flex flex-col items-center relative"
// //           initial={{ x: 200, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ duration: 1.4, ease: "easeOut" }}
// //         >
// //           <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden group">
// //             <Image
// //               src="/profile3.jpg"
// //               alt="Chirag Bang Avatar"
// //               width={320}
// //               height={320}
// //               className="object-cover rounded-full border-2 border-cyan-600/30 shadow-[0_0_40px_rgba(34,211,238,0.6)] group-hover:animate-quantum-glitch"
// //             />
// //             <style jsx>{`
// //               @keyframes quantum-glitch {
// //                 0% {
// //                   transform: translate(0);
// //                   filter: brightness(1);
// //                 }
// //                 20% {
// //                   transform: translate(-3px, 3px);
// //                   filter: brightness(1.2) hue-rotate(10deg);
// //                   clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
// //                 }
// //                 40% {
// //                   transform: translate(3px, -3px);
// //                   filter: brightness(0.8) hue-rotate(-10deg);
// //                   clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
// //                 }
// //                 60% {
// //                   transform: translate(-2px, 2px);
// //                   filter: brightness(1.1);
// //                   clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
// //                 }
// //                 80% {
// //                   transform: translate(2px, -2px);
// //                   filter: brightness(0.9) hue-rotate(5deg);
// //                 }
// //                 100% {
// //                   transform: translate(0);
// //                   filter: brightness(1);
// //                   clip-path: none;
// //                 }
// //               }
// //               .animate-quantum-glitch {
// //                 animation: quantum-glitch 0.4s linear infinite;
// //               }
// //             `}</style>
// //           </div>
// //           <div className="relative w-full h-64 mt-8">
// //             {skills.map((skill, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="skill-node absolute px-6 py-2 bg-black/50 backdrop-blur-md text-cyan-100 text-sm font-extrabold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
// //                 style={{
// //                   left: "50%",
// //                   top: "50%",
// //                 }}
// //                 animate={{
// //                   x: 130 * Math.cos((2 * Math.PI * index) / skills.length + Date.now() * 0.0008),
// //                   y: 130 * Math.sin((2 * Math.PI * index) / skills.length + Date.now() * 0.0008),
// //                   scale: [1, 1.25, 1],
// //                   opacity: [0.6, 1, 0.6],
// //                 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 7,
// //                   ease: "easeInOut",
// //                   delay: index * 0.35,
// //                 }}
// //               >
// //                 {skill}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { useGesture } from "@use-gesture/react";
// import  { useSpeechRecognition } from "react-speech-recognition";

// const Hero: React.FC = () => {
//   const skills = ["React", "Next.js", "WebGL", "TypeScript", "GraphQL", "AI"];

//   // Type canvasRef to HTMLCanvasElement | null
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   const [holoPanelOpen, setHoloPanelOpen] = useState(false);
//   const [chatPrompt, setChatPrompt] = useState("");
//   const [chatResponse, setChatResponse] = useState("");
//   const [isMounted, setIsMounted] = useState(false);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   useEffect(() => {
//     setIsMounted(true);
//     return () => setIsMounted(false);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let time = 0;
//     const waves = Array(5).fill(null).map(() => ({
//       amplitude: Math.random() * 20 + 10,
//       frequency: Math.random() * 0.02 + 0.01,
//       phase: Math.random() * Math.PI * 2,
//       hue: 180 + Math.random() * 60,
//     }));



//     function draw() {
//   if (!canvas || !ctx) return;

//   ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   for (let x = 0; x < canvas.width; x += 5) {
//     let y = canvas.height / 2;
//     waves.forEach((wave) => {
//       const distance = Math.hypot(x - cursorPos.x, y - cursorPos.y);
//       const influence = Math.max(0, 1 - distance / 300);
//       y += Math.sin(x * wave.frequency + time + wave.phase) * wave.amplitude * (1 + influence);
//     });

//     ctx.beginPath();
//     ctx.moveTo(x, canvas.height);
//     ctx.lineTo(x, y);
//     ctx.strokeStyle = `hsla(${waves[0].hue}, 80%, 50%, 0.3)`;
//     ctx.stroke();
//   }

//   time += 0.05;
//   requestAnimationFrame(draw);
// }


//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };

//     const resize = () => {
//       if (canvas) {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       }
//     };

//     draw();
//     window.addEventListener("resize", resize);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [isMounted, cursorPos]);

//   // Gesture Controls for Skill Swarm
//   const bind = useGesture({
//     onHover: ({ hovering, xy: [x, y] }) => {
//       if (!isMounted) return;
//       const nodes = document.querySelectorAll<HTMLDivElement>(".skill-node");
//       nodes.forEach((node, i) => {
//         const rect = node.getBoundingClientRect();
//         const distance = Math.hypot(rect.left + rect.width / 2 - x, rect.top + rect.height / 2 - y);
//         const scale = hovering && distance < 150 ? 1.4 : 1;
//         node.style.transform = `scale(${scale}) translate(${Math.cos(i) * 5}px, ${Math.sin(i) * 5}px)`;
//       });
//     },
//     onDrag: ({ movement: [mx, my] }) => {
//       if (!isMounted) return;
//       const nodes = document.querySelectorAll<HTMLDivElement>(".skill-node");
//       nodes.forEach((node) => {
//         node.style.transform = `translate(${mx * 0.08}px, ${my * 0.08}px)`;
//       });
//     },
//   });

//   // Voice Command and Chat Handling
//   useEffect(() => {
//     if (!isMounted) return;
//     if (transcript.toLowerCase().includes("open panel")) {
//       setHoloPanelOpen(true);
//       resetTranscript();
//     } else if (transcript.toLowerCase().includes("download resume")) {
//       window.location.href = "/resume.pdf";
//       resetTranscript();
//     } else if (transcript.toLowerCase().includes("close panel")) {
//       setHoloPanelOpen(false);
//       resetTranscript();
//     } else if (transcript.toLowerCase().includes("chat")) {
//       setChatResponse("Welcome to my digital realm! Ask about my projects, skills, or vision.");
//       setSuggestions(["Projects", "Skills", "Vision"]);
//       resetTranscript();
//     }
//   }, [transcript, isMounted, resetTranscript]);

//   // Fix typing for event handler
//   const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const lowerPrompt = chatPrompt.toLowerCase();

//     if (lowerPrompt.includes("project")) {
//       setChatResponse("I build revolutionary web apps with React and Next.js. Explore my projects below!");
//       setSuggestions(["React Projects", "Next.js Apps"]);
//     } else if (lowerPrompt.includes("skill")) {
//       setChatResponse("I master React, Next.js, WebGL, TypeScript, and AI. Want specifics?");
//       setSuggestions(["WebGL Details", "AI Expertise"]);
//     } else if (lowerPrompt.includes("vision")) {
//       setChatResponse("My vision is to fuse art, code, and AI to redefine the web. Curious?");
//       setSuggestions(["Future of Web", "AI Integration"]);
//     } else {
//       setChatResponse("Let's dive deeper! Try asking about my projects, skills, or vision.");
//       setSuggestions(["Projects", "Skills", "Vision"]);
//     }
//     setChatPrompt("");
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setChatPrompt(suggestion);
//     // Call handleChatSubmit with dummy event, since it requires event.preventDefault
//     handleChatSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
//   };

//   if (!isMounted) return null;

//   return (
//     <div
//       className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-4 md:p-12"
//       {...bind()}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-10" />
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
//         {/* Left: Holographic Interface */}
//         <motion.div
//           className="md:w-3/5 text-center md:text-left space-y-6 bg-black/25 backdrop-blur-2xl p-12 rounded-3xl border border-cyan-600/15 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
//           initial={{ x: -200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-50 to-blue-300 tracking-tighter">
//             Chirag Bang
//           </h1>
//           <div className="text-cyan-50 text-lg md:text-3xl font-extrabold min-h-[3.5rem]">
//             <TypeAnimation
//               sequence={[
//                 "Quantum Code Alchemist",
//                 2000,
//                 "Weaving Digital Cosmos",
//                 2000,
//                 "Engineering Future Realms",
//                 2000,
//                 "Fusing Art & Innovation",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={25}
//               repeat={Infinity}
//             />
//           </div>
//           <p className="text-neutral-50 max-w-md mx-auto md:mx-0 text-base md:text-xl leading-relaxed">
//             From Gurugram, I craft transcendent web experiences with React, Next.js, and WebGL, blending quantum aesthetics with AI-driven innovation.
//           </p>
//           <motion.div
//             className="flex justify-center md:justify-start gap-4"
//             animate={{ opacity: 1, scale: 1 }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             <Link href="https://github.com/yourgithub" target="_blank" aria-label="GitHub">
//               <FaGithub className="text-3xl text-cyan-300 hover:text-cyan-600 transition" />
//             </Link>
//             <Link href="https://linkedin.com/in/yourlinkedin" target="_blank" aria-label="LinkedIn">
//               <FaLinkedin className="text-3xl text-cyan-300 hover:text-cyan-600 transition" />
//             </Link>
//             <Link href="https://twitter.com/yourtwitter" target="_blank" aria-label="Twitter">
//               <FaTwitter className="text-3xl text-cyan-300 hover:text-cyan-600 transition" />
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Right: Skills and Chat Panel */}
//         <motion.div
//           className="md:w-2/5 flex flex-col items-center bg-black/25 p-8 rounded-3xl border border-cyan-600/15 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.25)]"
//           initial={{ x: 200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.4, ease: "easeOut" }}
//         >
//           <h2 className="text-cyan-400 font-bold text-2xl mb-6">Skills Swarm</h2>
//           <div className="flex flex-wrap gap-4 justify-center mb-6">
//             {skills.map((skill) => (
//               <motion.div
//                 key={skill}
//                 className="skill-node cursor-pointer rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-white font-semibold select-none"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>
//           <button
//             className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white font-semibold mb-4"
//             onClick={() => setHoloPanelOpen((open) => !open)}
//           >
//             {holoPanelOpen ? "Close Holo Panel" : "Open Holo Panel"}
//           </button>
//           {holoPanelOpen && (
//             <div className="w-full bg-black/50 p-6 rounded-xl border border-cyan-500 text-cyan-200">
//               <form onSubmit={handleChatSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Ask about my projects, skills, or vision..."
//                   value={chatPrompt}
//                   onChange={(e) => setChatPrompt(e.target.value)}
//                   className="px-4 py-2 rounded-md border border-cyan-300 bg-black text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!chatPrompt.trim()}
//                   className="bg-cyan-600 hover:bg-cyan-700 rounded-md py-2 font-semibold text-white disabled:opacity-50"
//                 >
//                   Ask
//                 </button>
//               </form>
//               {chatResponse && (
//                 <div className="mt-4 text-white whitespace-pre-wrap">{chatResponse}</div>
//               )}
//               {suggestions.length > 0 && (
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {suggestions.map((sug) => (
//                     <button
//                       key={sug}
//                       className="bg-cyan-700 hover:bg-cyan-800 px-3 py-1 rounded-full text-sm font-semibold"
//                       onClick={() => handleSuggestionClick(sug)}
//                     >
//                       {sug}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

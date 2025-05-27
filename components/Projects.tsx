// "use client";
// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Button } from "@heroui/react";

// const Projects = () => {
//   const projectData = [
//     {
//       name: "Recruitment Portal",
//       image: "/recruitment.png",
//       description: "The Recruitment Portal is a modern, full-stack web application designed for seamless hiring management. Built with Next.js, React.js, Node.js, Express.js, and MongoDB, it supports three user roles: candidates can apply for jobs and manage profiles, clients can post jobs and review applicants, and admins oversee platform operations. Featuring a responsive UI with MUI, the portal delivers an efficient and scalable solution for real-world recruitment workflows.",
//       demoLink: "https://vestaff.com/",
//     },
//     {
//       name: "PrepPilot - AI Interviewer",
//       image: "/preppilot.png",
//       description: "PrepPilot is an AI-powered mock interview platform that helps users prepare for behavioral, technical, or mixed interviews tailored to their role, experience, and tech stack. It features voice-enabled interviews via Vapi, smart question generation using Google Gemini, and personalized feedback reports. Built with Next.js, TypeScript, and Firebase, PrepPilot enhances interview readiness with real-time voice AI and insightful performance analytics.",
//       demoLink: "https://pixelcraft.app",
//     },
//     {
//       name: "Caption Maker",
//       image: "/captionmaker.png",
//       description: "Caption Maker is a web app that lets users add captions to YouTube videos by linking the video and assigning text to timestamps. Built with Next.js and MUI, it offers a fast, user-friendly interface for enhancing video accessibility and viewer engagement.",
//       demoLink: "https://caption-maker.vercel.app/",
//     },
//     {
//       name: "Ecommerce Store",
//       image: "/shoes.png",
//       description: "Shoe Marketplace is a modern eCommerce platform for buying and selling shoes. Users can browse, filter, and purchase a wide range of footwear. Built with Next.js and MUI, it features a responsive UI, dynamic product listings, secure checkout, and real-time inventory management for a seamless shopping experience.",
//       demoLink: "https://github.com/chiragbang/shoes-website",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
//         Projects
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {projectData.map((project, index) => (
//           <Card
//             key={index}
//             className="max-w-[600px] bg-white/10 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1"
//           >
//             <CardHeader className="p-4">
//               <Image
//                 alt={`${project.name} logo`}
//                 height={300}
//                 width={600}
//                 radius="md"
//                 src={project.image}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             </CardHeader>
//             <Divider className="bg-gray-600/50" />
//             <CardBody className="p-6">
//               <h2 className="text-2xl font-semibold mb-3 text-gray-100">{project.name}</h2>
//               <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
//             </CardBody>
//             <Divider className="bg-gray-600/50" />
//             <CardFooter className="p-4 flex justify-center">
//               <Button
//                 as="a"
//                 href={project.demoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200"
//               >
//                 Live Demo
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// "use client";
// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@heroui/react";
// import Image from "next/image"; // Use Next.js Image component

// const Projects = () => {
//   const projectData = [
//     {
//       name: "Recruitment Portal",
//       image: "/recruitment.png",
//       description: "The Recruitment Portal is a modern, full-stack web application designed for seamless hiring management. Built with Next.js, React.js, Node.js, Express.js, and MongoDB, it supports three user roles: candidates can apply for jobs and manage profiles, clients can post jobs and review applicants, and admins oversee platform operations. Featuring a responsive UI with MUI, the portal delivers an efficient and scalable solution for real-world recruitment workflows.",
//       demoLink: "https://vestaff.com/",
//     },
//     {
//       name: "PrepPilot - AI Interviewer",
//       image: "/preppilot.png",
//       description: "PrepPilot is an AI-powered mock interview platform that helps users prepare for behavioral, technical, or mixed interviews tailored to their role, experience, and tech stack. It features voice-enabled interviews via Vapi, smart question generation using Google Gemini, and personalized feedback reports. Built with Next.js, TypeScript, and Firebase, PrepPilot enhances interview readiness with real-time voice AI and insightful performance analytics.",
//       demoLink: "https://pixelcraft.app",
//     },
//     {
//       name: "Caption Maker",
//       image: "/captionmaker.png",
//       description: "Caption Maker is a web app that lets users add captions to YouTube videos by linking the video and assigning text to timestamps. Built with Next.js and MUI, it offers a fast, user-friendly interface for enhancing video accessibility and viewer engagement.",
//       demoLink: "https://caption-maker.vercel.app/",
//     },
//     {
//       name: "Ecommerce Store",
//       image: "/shoes.png",
//       description: "Shoe Marketplace is a modern eCommerce platform for buying and selling shoes. Users can browse, filter, and purchase a wide range of footwear. Built with Next.js and MUI, it features a responsive UI, dynamic product listings, secure checkout, and real-time inventory management for a seamless shopping experience.",
//       demoLink: "https://github.com/chiragbang/shoes-website",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-neutral-950 text-white py-8 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 tracking-tight">
//         Projects
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
//         {projectData.map((project, index) => (
//           <Card
//             key={index}
//             className="max-w-[600px] bg-white/10 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1"
//           >
//             <CardHeader className="p-4">
//               <Image
//                 alt={`${project.name} logo`}
//                 height={400}
//                 width={600}
//                 src={project.image}
//                 className="w-full h-48 object-cover rounded-md"
//                 priority={index === 0} // Prioritize loading for the first image
//               />
//             </CardHeader>
//             <Divider className="bg-gray-600/50" />
//             <CardBody className="p-4 sm:p-6">
//               <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-100">{project.name}</h2>
//               <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{project.description}</p>
//             </CardBody>
//             <Divider className="bg-gray-600/50" />
//             <CardFooter className="p-4 flex justify-center">
//               <Button
//                 as="a"
//                 href={project.demoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-all duration-200"
//               >
//                 Live Demo
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@heroui/react";
import Image from "next/image";

type ProjectProps = {
  id?: string;
};

const Projects = ({ id }: ProjectProps) => {
  const projectData = [
    {
      name: "Recruitment Portal",
      image: "/recruitment.png",
      description: "The Recruitment Portal is a modern, full-stack web application designed for seamless hiring management. Built with Next.js, React.js, Node.js, Express.js, and MongoDB, it supports three user roles: candidates can apply for jobs and manage profiles, clients can post jobs and review applicants, and admins oversee platform operations. Featuring a responsive UI with MUI, the portal delivers an efficient and scalable solution for real-world recruitment workflows.",
      demoLink: "https://vestaff.com/",
    },
    {
      name: "PrepPilot - AI Interviewer",
      image: "/preppilot.png",
      description: "PrepPilot is an AI-powered mock interview platform that helps users prepare for behavioral, technical, or mixed interviews tailored to their role, experience, and tech stack. It features voice-enabled interviews via Vapi, smart question generation using Google Gemini, and personalized feedback reports. Built with Next.js, TypeScript, and Firebase, PrepPilot enhances interview readiness with real-time voice AI and insightful performance analytics.",
      demoLink: "https://pixelcraft.app",
    },
    {
      name: "Caption Maker",
      image: "/captionmaker.png",
      description: "Caption Maker is a web app that lets users add captions to YouTube videos by linking the video and assigning text to timestamps. Built with Next.js and MUI, it offers a fast, user-friendly interface for enhancing video accessibility and viewer engagement.",
      demoLink: "https://caption-maker.vercel.app/",
    },
    {
      name: "Ecommerce Store",
      image: "/shoes.png",
      description: "Shoe Marketplace is a modern eCommerce platform for buying and selling shoes. Users can browse, filter, and purchase a wide range of footwear. Built with Next.js and MUI, it features a responsive UI, dynamic product listings, secure checkout, and real-time inventory management for a seamless shopping experience.",
      demoLink: "https://github.com/chiragbang/shoes-website",
    },
  ];

  return (
    <div id={id} className="scroll-mt-24 min-h-screen bg-neutral-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 tracking-tight">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className="max-w-[600px] bg-white/10 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <CardHeader className="p-4">
              <div className="relative w-full aspect-[2/1]">
                <Image
                  alt={`${project.name} logo`}
                  height={500} // Matches intrinsic image height
                  width={1000} // Matches intrinsic image width
                  src={project.image}
                  className="rounded-md object-contain" // Use object-contain to prevent cropping
                  priority={index === 0}
                />
              </div>
            </CardHeader>
            <Divider className="bg-gray-600/50" />
            <CardBody className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-100">{project.name}</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{project.description}</p>
            </CardBody>
            <Divider className="bg-gray-600/50" />
            <CardFooter className="p-4 flex justify-center">
              <Button
                as="a"
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-all duration-200"
              >
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
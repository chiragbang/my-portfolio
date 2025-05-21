"use client";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { format } from "date-fns";

type ExperienceProps = {
  id?: string;
};

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

const ExperienceTimeline = ({ id }: ExperienceProps) => {
  const [experiences] = useState<Experience[]>([
    {
      id: 1,
      title: "SDE-1",
      company: "Amlgo Labs",
      location: "Gurugram, India",
      startDate: new Date("2024-04-15"),
      endDate: null,
      description:
        "Engineered and launched high-performance full-stack web applications using modern technologies including React.js, Next.js, Node.js, and MongoDB, resulting in a 40% reduction in page load times. Leveraged advanced SEO strategies by implementing Server-Side Rendering (SSR) and Static Site Generation (SSG) through Next.js, boosting organic traffic by 35%. Improved back-end efficiency by developing and integrating scalable RESTful APIs, ensuring seamless communication across services. Additionally, enhanced deployment workflows using Git, GitHub, and CI/CD pipelines, cutting down release cycle times by 60% and enabling faster, more reliable product delivery.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Illuminate Technologies",
      location: "Remote",
      startDate: new Date("2024-01-03"),
      endDate: new Date("2024-04-12"),
      description:
        "Modernized a legacy WordPress system into a high-performance Next.js-based Single Page Application (SPA), elevating the Lighthouse performance score from 68 to 95. Delivered modular, reusable React components, significantly improving code maintainability and reducing future development time by 30%. Boosted UI responsiveness by 50% through optimized API consumption and seamless GraphQL integration. Worked closely with UI/UX designers to enhance accessibility, ensure cross-browser compatibility, and deliver a consistent user experience across platforms.",
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "AIOEAM Corpglobal",
      location: "Remote",
      startDate: new Date("2023-04-13"),
      endDate: new Date("2023-07-10"),
      description:
        "Built dynamic and responsive frontend interfaces for internal SaaS tools using React.js and Tailwind CSS, ensuring a seamless and modern user experience. Contributed to scalable backend development with Express.js and MongoDB, facilitating efficient data management and robust API integrations. Enhanced code reliability and product stability by performing thorough unit testing and resolving bugs, leading to a 20% reduction in reported issues and smoother deployment cycles.",
    },
    {
      id: 4,
      title: "Web Developer Intern",
      company: "Solar Secure Solutions",
      location: "Remote",
      startDate: new Date("2023-02-24"),
      endDate: new Date("2023-04-24"),
      description:
        "Developed responsive user interfaces and secure login modules using HTML5, CSS3, and vanilla JavaScript, ensuring compatibility across devices and browsers. Enhanced page load speed by 35% through strategic image optimization, lazy loading, and efficient asset delivery. Implemented intuitive user authentication flows and crafted mobile-friendly web pages, contributing to improved user experience and performance.",
    },
  ]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "Present";
    return format(date, "MMM dd, yyyy");
  };

  return (
    <div id={id} className="scroll-mt-24 max-w-7xl mx-auto px-4 py-16 bg-neutral-950">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
        Professional Experience
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-neutral-700"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } md:justify-between items-start mb-16`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-neutral-950 rounded-full border-4 border-white shadow-lg z-10"></div>

            {/* Card */}
            <div
              className={`mt-10 md:mt-0 w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <FaBriefcase className="text-blue-400 mr-2 text-lg" />
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                </div>

                <div className="text-neutral-300 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-neutral-400 text-sm mb-2">{exp.location}</div>

                <div className="text-blue-300 font-medium mb-3">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

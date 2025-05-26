import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Software Development Engineer I",
      content: (
        <div>
          <p className="mb-4 text-lg font-semibold text-white md:text-xl">
            Amlgo Labs Pvt. Ltd., Gurugram, Haryana (April 2024 - Present)
          </p>
          <ul className="mb-8 list-disc pl-5 text-xs font-normal text-white md:text-sm">
            <li>Engineered and launched full-stack web applications using React.js, Next.js, Node.js, and MongoDB, achieving a 40% reduction in page load times.</li>
            <li>Boosted organic traffic by 35% through SEO strategies, implementing SSR and SSG via Next.js.</li>
            <li>Streamlined back-end communication by building and integrating scalable RESTful APIs.</li>
            <li>Enhanced deployment workflows with Git, GitHub, and CI/CD pipelines, reducing release cycle time by 60%.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Frontend Developer",
      content: (
        <div>
          <p className="mb-4 text-lg font-semibold text-white md:text-xl">
            Illuminate Technologies, Remote (January 2024 - April 2024)
          </p>
          <ul className="mb-8 list-disc pl-5 text-xs font-normal text-white md:text-sm">
            <li>Modernized a legacy WordPress system into a Next.js-based SPA, raising Lighthouse performance score from 68 to 95.</li>
            <li>Delivered modular React components and improved maintainability, cutting future dev time by 30%.</li>
            <li>Increased UI responsiveness by 50% through optimized API consumption and GraphQL integration.</li>
            <li>Collaborated with UI/UX designers to enhance accessibility and cross-browser compatibility.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Software Engineer Intern",
      content: (
        <div>
          <p className="mb-4 text-lg font-semibold text-white md:text-xl">
            AIOEAM Corpglobal, Remote (April 2023 - July 2023)
          </p>
          <ul className="mb-8 list-disc pl-5 text-xs font-normal text-white md:text-sm">
            <li>Built dynamic frontend interfaces for internal SaaS tools using React.js and Tailwind CSS.</li>
            <li>Supported scalable backend development and API integrations using Express.js and MongoDB.</li>
            <li>Improved code reliability by conducting unit testing and bug fixes, lowering reported issues by 20%.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Web Developer Intern",
      content: (
        <div>
          <p className="mb-4 text-lg font-semibold text-white md:text-xl">
            Solar Secure Solutions, Remote (February 2023 - April 2023)
          </p>
          <ul className="mb-8 list-disc pl-5 text-xs font-normal text-white md:text-sm">
            <li>Developed responsive interfaces and login modules using HTML5, CSS3, and vanilla JavaScript.</li>
            <li>Enhanced page speed by 35% through image optimization, lazy loading, and efficient asset delivery.</li>
            <li>Created responsive web pages and user authentication flows using HTML5, CSS3, and vanilla JavaScript.</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

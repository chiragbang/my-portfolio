"use client"
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { format } from "date-fns";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

const ExperienceTimeline: React.FC = () => {
  const [experiences] = useState<Experience[]>([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: new Date("2021-01-01"),
      endDate: null,
      description:
        "Leading frontend development team, implementing modern React architectures, and mentoring junior developers.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Lab",
      location: "Seattle, WA",
      startDate: new Date("2019-03-01"),
      endDate: new Date("2020-12-31"),
      description:
        "Developed responsive web applications using React and Next.js, improved performance metrics by 40%.",
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Vision",
      location: "Austin, TX",
      startDate: new Date("2018-01-01"),
      endDate: new Date("2019-02-28"),
      description:
        "Collaborated on frontend projects, implemented UI components, and conducted code reviews.",
    },
  ]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "Present";
    return format(date, "MMM yyyy");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-950">
      <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8 text-center">
        Professional Experience
      </h2>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex md:justify-between items-start mb-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-xl"></div>

            <div
              className={`ml-10 md:ml-0 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              } w-full md:w-5/12`}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.title}
                  </h3>
                </div>

                <div className="text-gray-600 font-medium mb-2">
                  {exp.company}
                </div>
                <div className="text-gray-500 text-sm mb-3">
                  {exp.location}
                </div>

                <div className="text-blue-600 font-medium mb-3">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
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

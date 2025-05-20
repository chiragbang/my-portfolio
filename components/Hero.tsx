"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Image */}
        <div className="relative z-10">
          <Image
            src="/profile3.jpg"
            alt="Chirag Bang Avatar"
            width={400}
            height={400}
            className="rounded-full border-2 border-neutral-200 shadow-lg"
          />
        </div>

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
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;

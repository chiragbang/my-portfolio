"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex items-center gap-6">
        {/* Avatar Image */}
        <div className="relative z-10">
          <Image
            src="/avatar.jpg" // Replace with the actual path to your avatar image
            alt="Chirag Bang Avatar"
            width={120}
            height={120}
            className="rounded-full border-2 border-neutral-200 shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold">
            Chirag Bang
          </h1>
          <p className="text-neutral-500 max-w-lg my-2 text-sm md:text-base text-left relative z-10">
            Full Stack Developer crafting scalable, high-performance web applications with React, Next.js, and Node.js. Passionate about optimizing user experiences, boosting SEO, and streamlining development workflows in Agile environments.
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
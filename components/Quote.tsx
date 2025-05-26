"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Great digital experiences are built with empathy, logic, and precision. As a fullstack developer, I bridge the gap between what users feel and what systems do.
`;

export function Quote() {
  return <TextGenerateEffect words={words} />;
}
            
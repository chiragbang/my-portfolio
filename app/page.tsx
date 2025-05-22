import About from "@/components/About";
import { Experience } from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <About id="about"/>
    {/* <ExperienceTimeline id="experience"/> */}
    <Experience/>
    <SkillsMarquee/>
  </>
  );
}

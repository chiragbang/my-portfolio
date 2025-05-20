import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <About id="about"/>
    <ExperienceTimeline id="experience"/>
  </>
  );
}

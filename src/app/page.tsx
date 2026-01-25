import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import WorkSection from "@/sections/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

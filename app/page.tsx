import Image from "next/image";
import Intro from "@/components/intro";

import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import { SkillsSection } from "@/components/skills";

import Contact from "@/components/contact";
import { EducationTimeline } from "@/components/education";

export default function Home() {
  return (
    <main className="tems-center px-4">
      <Intro />
      <Projects />
      <SkillsSection />
      <EducationTimeline />
      <Contact />
    </main>
  );
}

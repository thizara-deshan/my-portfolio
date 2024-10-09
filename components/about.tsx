"use client";

import { delay, motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className=" mb-28 max-w-[45rem] text-center leading-8  
    sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        As a passionate and driven undergraduate Software Engineer, I am
        dedicated to honing my skills in{" "}
        <span className="font-medium">web development</span> and creating
        innovative solutions that push the boundaries of technology. Currently
        in my <span className="font-medium">second year</span> of studies, I
        have a solid foundation in{" "}
        <span className="font-medium italic underline">
          HTML, CSS, JavaScript, React, and Next.js
        </span>{" "}
        , and I am actively learning and applying concepts in{" "}
        <span className="font-medium">full-stack development.</span>
      </p>

      <p className="mb-3">
        My coursework has not only provided me with technical expertise but also
        instilled in me the importance of{" "}
        <span className="font-medium">
          collaboration, communication, and continuous learning
        </span>{" "}
        in a dynamic industry like
        <span className="italic"> software engineering.</span>
      </p>
    </motion.section>
  );
}

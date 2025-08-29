"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 md:py-10">
      {/* Profile Image */}
      <div className="mb-8">
        <Avatar className="h-32 w-32 md:h-40 md:w-40">
          <AvatarImage
            src="/profile.jpg"
            alt="Profile picture"
            className="object-cover "
          />
          <AvatarFallback className="text-2xl font-semibold bg-muted">
            JD
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Heading */}
      <h1 className="mb-6 text-center items-center text-3xl text-foreground md:text-4xl ">
        <span className="font-bold">Hello, I'm Thizara.</span> I'm a{" "}
        <span className="font-bold">Full-stack developer</span>
        <br />I enjoy building <span className="italic">websites & apps</span>.
      </h1>

      {/* Description */}
      <div className="max-w-2xl text-center">
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Recent university graduate with a robust foundation in
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            full-stack development
          </span>{" "}
          and systems architecture. I specialize in building
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            scalable
          </span>
          ,
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            high-performance{" "}
          </span>
          applications and infrastructure, leveraging expertise in
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            modern frameworks
          </span>
          , server-side technologies,
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            containerization
          </span>
          , and
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            Linux-based environments
          </span>
          . My focus is on delivering
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            clean, maintainable code
          </span>{" "}
          and architecting solutions that solve real-world problems efficiently.
          Committed to technical excellence , I’m prepared to lead complex
          projects and drive meaningful impact . Let’s create something
          exceptional.
        </p>
      </div>
    </section>
  );
}

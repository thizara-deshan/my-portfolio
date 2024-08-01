"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Into() {
  return (
    <section
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src={profilePic}
              alt="hi"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem]
            border-white shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Thizara.</span> I'm a{" "}
        <span className="font-bold">Full-stack developer</span> and{" "}
        <span className="font-bold"> undergraduate</span> IT student. I enjoy
        building <span className="italic">websites & apps</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 
          text-white px-7 py-3 
          flex items-center gap-2 
          rounded-full outline-none 
          focus:scale-110 hover:scale-110 
          hover:bg-gray-950 active:scale-105 
          transition"
          onClick={() => {}}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex 
          items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 
          active:scale-105 
          transition cursor-pointer borderBlack dark:bg-white/15 dark:hover:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 
          hover:text-gray-950 flex items-center gap-2 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 cursor-pointer borderBlack dark:text-white/60 dark:bg-white/15 dark:hover:bg-white/10"
          href="https://www.linkedin.com/in/thisaradeshan/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 
          hover:text-gray-950 flex items-center gap-2 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 cursor-pointer borderBlack dark:text-white/60 dark:bg-white/15 dark:hover:bg-white/10"
          href="https://github.com/thizara-deshan"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

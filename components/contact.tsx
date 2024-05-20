"use client";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] 
    text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/70">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:thizaradeshan@gmail.com">
          thizaradeshan@gmail.com
        </a>{" "}
        or through this form{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          placeholder="Your email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg  borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          required
          maxLength={500}
        />
        <br />

        <textarea
          placeholder="Your Message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
        />
        <br />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] gap-2
           bg-gray-900 items-center 
          justify-center
        text-white rounded-full 
        outline-none 
        transition-all 
        focus:scale-110 
        hover:scale-110 
        active:scale-105
        hover:bg-gray-950 
        dark:bg-white/10
        "
        >
          Submit{" "}
          <FaPaperPlane
            className=" text-xs 
            opacity-70 
          transition-all 
          group-hover:translate-x-1 
          group-hover:-translate-y-1 
          "
          />
        </button>
      </form>
    </motion.section>
  );
}

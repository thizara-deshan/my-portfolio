import React from "react";
import { FaCertificate } from "react-icons/fa";

import { GiDiploma } from "react-icons/gi";

import { FaSchool } from "react-icons/fa";

import corpcommentImg from "@/public/corpcomment.png";
import orderEatsImg from "@/public/ordereats.png";
import tinykiddiesImg from "@/public/tinykiddies.png";
import sasanlee from "@/public/sasanlee.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "GCE A/L",
    location: "Central College Anuradhapura",
    description:
      "I completed my Advanced level studies, achieving a milestone that marked the end of my formal schooling journey.",
    icon: React.createElement(FaSchool),
    date: "2019",
  },
  {
    title: "Foundation Of Information Technology",
    location: "UCSC",
    description:
      "I have completely done FIT program in university of Colombo School of Computing",
    icon: React.createElement(FaCertificate),
    date: "2021-4",
  },
  {
    title: "Diploma in Information Technology",
    location: "UCSC",
    description:
      "I completed my diploma in Information Technology in 2022. Now, in my Final year as an undergraduate, I continue to deepen my knowledge and skills in this dynamic field.",
    icon: React.createElement(GiDiploma),
    date: "2022-8",
  },
] as const;

export const projectsData = [
  {
    title: "OrderEats",
    description:
      "online food ordering platform built with React, Tailwind CSS, and MongoDB, offering a stylish and efficient user experience for browsing and ordering meals.",
    tags: ["React", "MongoDB", "Tailwind", "Node.js", "Express"],
    imageUrl: orderEatsImg,
    projectUrl: "https://food-ordering-app-frontend-lwtc.onrender.com/",
  },
  {
    title: "TinyKiddies",
    description:
      "e-commerce website made using WordPress. The site is designed to provide a seamless shopping experience for parents looking for high-quality and adorable outfits for their little ones.",
    tags: ["WordPress", "WooCommerce"],
    imageUrl: tinykiddiesImg,
    projectUrl: "https://tinykiddies.com/",
  },
  {
    title: "Sasanlee",
    description:
      "Travel agencywebsite built with Next.js, Typescript, and Tailwind CSS, offering a visually appealing and user-friendly platform for booking tours and exploring destinations.",
    tags: ["Next.js", "TypeScript", "Tailwind", "AWS Lambda", "AWS SES"],
    imageUrl: sasanlee,
    projectUrl: "https://sasanleetravels.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Framer Motion",
  "WordPress",
  "MongoDB",
  "AWS",
  "Docker",
  "PostgreSQL",
] as const;

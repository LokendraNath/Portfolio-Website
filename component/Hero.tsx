"use client";

import lokendraImage from "@/public/assets/img/lokendra-img.png";
import { motion } from "framer-motion";
import {
  ContactRoundIcon,
  Download,
  DownloadCloud,
  GithubIcon,
  LayoutDashboard,
  LayoutGridIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // Icons Array
  const skillIcons = [
    "/assets/skills/javascript.svg",
    "/assets/skills/typescript.svg",
    "/assets/skills/react.svg",
    "/assets/skills/nextjs.svg",
    "/assets/skills/tailwindcss.svg",
    "/assets/skills/frammer-motion.svg",
    "/assets/skills/zustand.svg",
    "/assets/skills/redux.svg",
    "/assets/skills/nodejs.svg",
    "/assets/skills/expressjs.svg",
    "/assets/skills/postgresql.svg",
    "/assets/skills/mongodb.svg",
  ];
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-3xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-30 px-4 pb-8 overflow-hidden">
        {/* Profile Image */}
        <div>
          <Image
            src="/assets/img/lokendra.png"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full mb-4 shadow-lg"
            priority
          />
        </div>
        {/* Name */}
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          I'm Lokendra Nath <span className="inline-block">👨‍💻</span>
        </h3>
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-semibold mt-2">
          Full Stack Developer
        </h1>
        {/* Icon Swipe */}
        <div className="relative my-5 md:my-7 w-full mask-r-from-50% mask-l-from-50% overflow-hidden">
          <motion.div
            className="flex gap-7 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {/* Icon Loop */}
            {skillIcons.concat(skillIcons).map((icon, index) => (
              <Image
                key={index}
                src={icon}
                width={40}
                height={40}
                alt="Icons"
                className="md:w-[50px] md:h-[50px]"
              />
            ))}
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto">
          <a
            href="#projects"
            className="bg-linear-to-br from-teal-400 to-cyan-600 w-full md:w-auto py-2 px-8 text-white rounded-full font-semibold flex text-lg items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
          >
            Works <LayoutDashboard className="w-4" />
          </a>
          <a
            href="#/assets/resume.pdf"
            className="w-full md:w-auto py-2 px-6 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            download
          >
            Resume <DownloadCloud className="w-4" />
          </a>
        </div>
        {/* Social Icons */}
        <div className="mt-10 md:mt-5 flex gap-10">
          <Link href="https://x.com/iamlokendranath" target="_blank">
            <Image
              src="/assets/social/x.png"
              width={100}
              height={100}
              alt="X Logo"
              className="w-7"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lokendranath/"
            target="_blank"
          >
            <Image
              src="/assets/social/linkedIn.png"
              width={100}
              height={100}
              alt="LinkedIn Logo"
              className="w-7"
            />
          </Link>
          <Link href="https://github.com/LokendraNath" target="_blank">
            <Image
              src="/assets/social/github.png"
              width={100}
              height={100}
              alt="Github Logo"
              className="w-7"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;

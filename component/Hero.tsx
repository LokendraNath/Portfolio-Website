"use client";

import lokendraImage from "@/public/assets/img/lokendra-img.png";

import {
  ContactRoundIcon,
  Download,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  // Icons Array
  const icons = [
    "/assets/skills/nodejs.svg",
    "/assets/skills/expressjs.svg",
    "/assets/skills/frammer-motion.svg",
    "/assets/skills/javascript.svg",
    "/assets/skills/mongodb.svg",
    "/assets/skills/nextjs.svg",
    "/assets/skills/postgresql.svg",
    "/assets/skills/redux.svg",
    "/assets/skills/tailwindcss.svg",
    "/assets/skills/zustand.svg",
    "/assets/skills/react.svg",
    "/assets/skills/typescript.svg",
  ];

  return (
    <section>
      <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-30 px-4 md:px-0 pb-8 overflow-hidden">
        {/* Profile Image */}
        <div>
          <Image
            src="/assets/img/lokendra.png"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full mb-4"
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
      </div>
    </section>
  );
};
export default Hero;

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
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  px-2 w-full lg:py-30 mt-30 sm:mt-10"
    >
      <div className="about-container flex flex-col lg:flex-row items-center lg:flex-rowitems-center justify-center gap-x-22 gap-y-15">
        <div className="info-box flex flex-col text-center items-center lg:items-start gap-6 lg:gap-4">
          <div className="text mb-5 lg:mb-3 items-center lg:items-start flex flex-col">
            <h3 className="text-4xl sm:text-4xl lg:text-3xl mb-3 font-semibold opacity-70 ">
              Hi, I'm
            </h3>
            <h1 className="text-5xl sm:text-7xl lg:text-6xl font-bold mb-2">
              Lokendra Nath
            </h1>
            <span className="bg-linear-to-r from-primary to-[#ff00ff] bg-clip-text sm:text-3xl text-transparent text-[22px] tracking-wider">
              Software Developer
            </span>
          </div>

          <div className="flex gap-4 space-x-2 sm:space-x-10 lg:space-x-3">
            <Link
              href="/resume.pdf"
              download="Lokendra_Nath_Resume.pdf"
              className="flex gap-4 border py-2 px-4 rounded-full"
            >
              Resume <Download className="w-5" />
            </Link>

            <Link
              href="#contact"
              className="flex gap-4 border py-2 px-4 rounded-full"
            >
              Contact <ContactRoundIcon className="w-5" />
            </Link>
          </div>

          <div className="social space-x-10 sm:space-x-20 lg:space-x-10 mt-4 sm:mt-6 flex lg:pl-3">
            <Link href="https://github.com/LokendraNath" target="_blank">
              <GithubIcon className="text-3xl lg:text-4xl sm:text-5xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lokendranath/"
              target="_blank"
            >
              <LinkedinIcon className="text-3xl lg:text-4xl sm:text-5xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 " />
            </Link>
            <a href="https://x.com/iamlokendranath" target="_blank">
              <TwitterIcon className="text-3xl lg:text-4xl sm:text-5xl cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 " />
            </a>
          </div>
        </div>
        <div className="sm:block w-50 sm:w-72 object-cover lg:w-95 lg:h-95 rounded-[50%] bg-black shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]">
          <Image
            className="object-contain rounded-full"
            src={lokendraImage}
            alt="Lokendra Nath"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
export default About;

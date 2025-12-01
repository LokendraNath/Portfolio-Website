"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-5 mt-20 flex flex-col items-center justify-center border-t border-primary/20 backdrop-blur-sm">
      {/* Navigation */}
      <ul className="flex gap-6 sm:gap-10 mb-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="font-medium text-content-alter transition-colors duration-300 hover:text-primary"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Links (Added Here) */}
      <div className="flex gap-8 mb-6">
        <Link
          href="https://x.com/iamlokendranath"
          target="_blank"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/x.png"
            width={100}
            height={100}
            alt="X Logo"
            className="w-5 h-5 object-contain"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lokendranath/"
          target="_blank"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/linkedIn.png"
            width={100}
            height={100}
            alt="LinkedIn Logo"
            className="w-5 h-5 object-contain"
          />
        </Link>
        <Link
          href="https://github.com/LokendraNath"
          target="_blank"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/github.png"
            width={100}
            height={100}
            alt="Github Logo"
            className="w-5 h-5 object-contain"
          />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-content-alter text-xs sm:text-sm tracking-widest font-medium text-center">
        © {new Date().getFullYear()} All Rights Reserved |{" "}
        <span className="text-primary font-semibold">Lokendra Nath</span>
      </p>
    </footer>
  );
};

export default Footer;

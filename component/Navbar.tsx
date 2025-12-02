"use client";
import { firaCode, newRocker } from "@/app/fonts";
import { Github, Menu, TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out shadow-sm ${
        scrolled
          ? "bg-white/30 backdrop-blur-md dark:bg-dark-base/90"
          : "bg-base dark:bg-dark-base"
      }`}
    >
      <nav className="flex items-center justify-between mx-auto w-[90%] py-3">
        <Link
          href={"#"}
          className={`text-2xl md:text-3xl font-bold mr-6 dark:text-white tracking-widest ${newRocker.className}`}
        >
          Lokendra<span className="text-primary text-3xl ml-1">.</span>
        </Link>

        <div className="hidden min-[825px]:flex items-center gap-7  py-1 rounded-full px-3 ">
          {navLinks.map((nav, index) => (
            <a
              href={nav.href}
              key={index}
              className={`text-content dark:text-white tracking-wider text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out dark:hover:text-primary ${firaCode.className}`}
            >
              {nav.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle"
        >
          {isMenuOpen ? (
            <X className="w-5 dark:text-white" />
          ) : (
            <TextAlignEnd className="w-5 dark:text-white" />
          )}
        </button>

        {isMenuOpen && (
          <div className="fixed min-[825px]:hidden top-10 left-0 w-full z-50">
            <div className="bg-base shadow-lg rounded-2xl mt-2 mx-auto w-full p-6 dark:bg-dark-base ">
              <div className="flex flex-col items-center gap-4">
                {navLinks.map((nav, index) => (
                  <a
                    href={nav.href}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    key={index}
                    className="text-content tracking-wider text-[18px] font-bold hover:text-content-alter py-3 border-b border-gray-100 transition-all duration-300 ease-in-out dark:text-white"
                  >
                    {nav.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;

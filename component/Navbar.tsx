"use client";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [click]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        <Link href={"#"} className="text-2xl md:text-3xl font-bold mr-6">
          Lokendra <span className="">.</span>
        </Link>
        {/* For Large Screens */}
        <ul className="gap-6 hidden md:flex  px-3 rounded-xl sm:text-xl">
          <li>
            <a href="#about" className="navbar-a">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="navbar-a">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="navbar-a">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-a">
              Contact
            </a>
          </li>
        </ul>

        <ul
          className={`absolute bg-base backdrop-blur-md top-15 w-[90%] flex flex-col items-center py-5 gap-6 md:hidden  px-3 rounded-xl space-y-3 ${
            click ? "flex" : "hidden"
          }`}
        >
          <li onClick={() => setClick(false)}>
            <a href="#about" className="navbar-a">
              About
            </a>
          </li>
          <li onClick={() => setClick(false)}>
            <a href="#skill" className="navbar-a">
              Skills
            </a>
          </li>
          <li onClick={() => setClick(false)}>
            <a href="#project" className="navbar-a">
              Project
            </a>
          </li>
          <li onClick={() => setClick(false)}>
            <a href="#contact" className="navbar-a">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setClick(!click)}
        >
          {click ? <X className="w-5" /> : <Menu className="w-5" />}
          <i
            className={`fa-solid ${click ? "fa-xmark" : "fa-bars"} text-2xl`}
          ></i>
        </button>
      </nav>
    </header>
  );
};
export default Header;

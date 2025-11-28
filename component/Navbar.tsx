"use client";
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
          className={`absolute bg-[rgba(0,0,0,0.8)] backdrop-blur-md top-15 w-[90%] flex flex-col items-center py-5 gap-6 md:hidden  px-3 rounded-xl space-y-3 ${
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
          <i
            className={`fa-solid ${click ? "fa-xmark" : "fa-bars"} text-2xl`}
          ></i>
        </button>
        <div className="lg:flex items-center gap-3 hidden">
          <button
            className=" px-4 py-2 rounded-lg font-medium
         bg-linear-to-r from-[#0077ff] to-[#f001f0]
         hover:opacity-90 transition space-x-3 flex items-center"
          >
            <i className="fa-brands fa-github"></i>
            <a
              href="https://github.com/LokendraNath"
              target="_blank"
              className=""
            >
              GitHub
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;

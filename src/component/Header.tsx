import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="fixed top-3 lg:top-2 left-[50%] transform w-[80%] lg:w-[90%] translate-x-[-50%] flex items-center gap-4 md:py-3 px-6 rounded-2xl z-50 shadow-lg justify-between bg-[rgba(0,0,0,0.671)] backdrop-blur-md py-2">
      <h1 className="text-3xl font-lobstar text-white">Lokendra</h1>
      {/* For Large Screens */}
      <ul className="font-gothic gap-6 hidden md:flex  text-white px-3 rounded-xl sm:text-xl">
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

      {/* For Small Screens */}
      <ul
        className={`absolute bg-[rgba(0,0,0,0.8)] backdrop-blur-md top-15 w-[90%] flex flex-col items-center py-5 font-gothic gap-6 md:hidden  text-white px-3 rounded-xl space-y-3 ${
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
        className="md:hidden text-white cursor-pointer"
        onClick={() => setClick(!click)}
      >
        <i
          className={`fa-solid ${click ? "fa-xmark" : "fa-bars"} text-2xl`}
        ></i>
      </button>
      <div className="lg:flex items-center gap-3 hidden">
        <button
          className=" px-4 py-2 rounded-lg text-white font-medium 
         bg-gradient-to-r from-[#0077ff] to-[#f001f0] 
         hover:opacity-90 transition space-x-3 flex items-center"
        >
          <i className="fa-brands fa-github"></i>
          <a
            href="https://github.com/LokendraNath"
            target="_blank"
            className="font-gothic"
          >
            GitHub
          </a>
        </button>
        <button>
          <i className="fa-solid fa-moon  fa-sun"></i>
        </button>
      </div>
    </header>
  );
};
export default Header;

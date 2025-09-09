import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="fixed top-3 lg:top-2 left-[50%] transform w-[80%] lg:w-[90%] translate-x-[-50%] flex items-center gap-4 md:py-3 px-6 rounded-2xl z-50 shadow-lg justify-between bg-[rgba(0,0,0,0.671)] backdrop-blur-md py-2">
      <h1 className="text-3xl font-lobstar text-white">Lokendra</h1>
      {/* For Large Screens */}
      <ul className="font-gothic gap-6 hidden lg:flex  text-white px-3 rounded-xl sm:text-xl">
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
        className={`absolute bg-[rgba(0,0,0,0.8)] backdrop-blur-md top-15 w-[90%] flex flex-col items-center py-5 font-gothic gap-6 sm:hidden  text-white px-3 rounded-xl space-y-3 ${
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
      <button
        className="hidden md:block px-4 py-2 rounded-lg text-white font-medium 
         bg-gradient-to-r from-[#0077ff] to-[#f001f0] 
         hover:opacity-90 transition"
      >
        <svg
          className="inline-block w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.06 1.83 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.23-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.76.84 1.23 1.92 1.23 3.24 0 4.64-2.8 5.67-5.48 5.97.42.36.8 1.06.8 2.14v3.17c0 .32.22.68.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"
            clip-rule="evenodd"
          />
        </svg>
        <a
          href="https://github.com/LokendraNath"
          target="_blank"
          className="font-gothic"
        >
          GitHub
        </a>
      </button>
    </header>
  );
};
export default Header;

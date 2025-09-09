import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  px-2 lg:px-15 w-full lg:py-30 font-gothic py-40 sm:mt-5"
    >
      <div className="about-container flex flex-col lg:flex-row items-center lg:flex-rowitems-center justify-center gap-22">
        <motion.div
          className="info-box flex flex-col text-center items-center lg:items-start gap-6 lg:gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="text mb-5 lg:mb-3 items-center lg:items-start flex flex-col">
            <h3 className="text-4xl sm:text-4xl lg:text-3xl mb-3 font-semibold opacity-70 ">
              Hi, I'm
            </h3>
            <h1 className="text-5xl sm:text-7xl lg:text-6xl font-bold mb-2">
              Lokendra Nath
            </h1>
            <span className="bg-gradient-to-r from-[#009dff] to-[#ff00ff] bg-clip-text sm:text-3xl text-transparent text-[22px] font-gothic tracking-wider">
              Software Developer
            </span>
          </div>

          <div className="flex gap-4 space-x-2 sm:space-x-10 lg:space-x-3">
            <a
              href="/resume.pdf"
              download="Lokendra_Nath_Resume.pdf"
              className="btn"
            >
              Resume <i className="fa-solid fa-download ml-2"></i>
            </a>

            <a href="#contact" className="btn">
              Contact
            </a>
          </div>

          <div className="social space-x-10 sm:space-x-20 lg:space-x-10 mt-4 sm:mt-6 flex lg:pl-3">
            <a href="https://github.com/LokendraNath" target="_blank">
              <i className="text-3xl lg:text-4xl sm:text-5xl cursor-pointer fa-brands fa-github transition duration-300 ease-in-out hover:translate-y-[-4px]"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="text-3xl sm:text-5xl lg:text-4xl cursor-pointer fa-brands fa-linkedin transition duration-300 ease-in-out hover:translate-y-[-4px]"></i>
            </a>
            <a href="https://x.com/iamlokendranath" target="_blank">
              <i className="text-3xl sm:text-5xl lg:text-4xl cursor-pointer fa-brands fa-square-x-twitter transition duration-300 ease-in-out hover:translate-y-[-4px]"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="sm:block w-50 sm:w-72 object-cover lg:w-95 lg:h-95 rounded-[50%] bg-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <img
            className="object-contain rounded-full"
            src="/assets/img/lokendra-img.png"
            alt="Lokendra Nath"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default About;

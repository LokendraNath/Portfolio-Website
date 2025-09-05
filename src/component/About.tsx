const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  px-2 lg:px-15 w-full lg:py-30"
    >
      <div className="about-container flex sm:flex-col lg:flex-row items-center justify-center gap-28">
        <img
          className="img hidden sm:block object-cover w-85 h-85 rotate-[-15deg] rounded-[50%]"
          src="/src/assets/img/main-op.jpg"
          alt=""
        />

        <div className="info-box flex flex-col text-center items-center gap-6 lg:gap-4">
          <div className="text mb-5 lg:mb-3">
            <h3 className="text-4xl sm:text-4xl lg:text-3xl mb-3 font-semibold opacity-70 ">
              Hi, I'm
            </h3>
            <h1 className="text-5xl sm:text-7xl lg:text-6xl font-bold mb-2">
              Lokendra Nath
            </h1>
            <span className="bg-gradient-to-r from-[#009dff] to-[#ff00ff] bg-clip-text sm:text-3xl text-transparent text-[22px] font-gothic tracking-wider">
              Frontend Developer
            </span>
          </div>

          <div className="btn-group flex gap-4 space-x-2 sm:space-x-10 lg:space-x-5">
            <div className="btn">Resume</div>
            <div className="btn">Contact</div>
          </div>

          <div className="social space-x-10 sm:space-x-20 lg:space-x-10 mt-4 sm:mt-6 flex">
            <a href="https://github.com/LokendraNath" target="_blank">
              <i className="text-3xl lg:text-4xl sm:text-5xl cursor-pointer fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="text-3xl sm:text-5xl lg:text-4xl cursor-pointer fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="text-3xl sm:text-5xl lg:text-4xl cursor-pointer fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

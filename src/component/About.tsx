const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  px-2 lg:px-15 w-full"
    >
      <div className="about-container flex items-center justify-center gap-28">
        <img
          className="img hidden lg:block object-cover w-96 h-96 rotate-[-15deg] rounded-[50%]"
          src="/src/assets/img/main-op.jpg"
          alt=""
        />

        <div className="info-box flex flex-col text-center items-center gap-6">
          <div className="text mb-5">
            <h3 className="text-4xl mb-3 font-semibold opacity-70 ">Hi, I'm</h3>
            <h1 className="text-5xl lg:text-6xl font-bold mb-2">
              Lokendra Nath
            </h1>
            <span className="bg-gradient-to-r from-[#009dff] to-[#ff00ff] bg-clip-text text-transparent text-[22px] font-gothic tracking-wider">
              Frontend Developer
            </span>
          </div>

          <div className="btn-group flex gap-4">
            <div className="btn">Resume</div>
            <div className="btn">Contact</div>
          </div>

          <div className="social space-x-10 lg:space-x-5 mt-4 flex">
            <a href="https://github.com/LokendraNath" target="_blank">
              <i className="text-3xl cursor-pointer transition duration-200 ease-in-out fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="text-3xl cursor-pointer transition duration-200 ease-in-out fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="text-3xl cursor-pointer transition duration-200 ease-in-out fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

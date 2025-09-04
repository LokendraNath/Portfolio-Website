const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img className="img" src="img/main-op.jpg" alt="" />

        <div className="info-box">
          <div className="text">
            <h3>Hi, I'm</h3>
            <h1>Lokendra Nath</h1>
            <span>Full Stack Developer</span>
          </div>

          <div className="btn-group">
            <div className="btn">Resume</div>
            <div className="btn">Contact</div>
          </div>

          <div className="social">
            <a href="https://github.com/LokendraNath" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendranath/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

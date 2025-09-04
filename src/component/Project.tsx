const Project = () => {
  return (
    <section
      id="project"
      className="projects min-h-screen py-32 px-[12%] w-full relative"
    >
      <h2 className="section-title">Recent Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img src="img/to-do.png" alt="" />
          <h3>To Do List</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Unde, quas.
          </p>
          <div className="btn-group">
            <div className="btn">
              <a href="https://lokendra-todolist.netlify.app/" target="_blank">
                Live Demo
              </a>
            </div>
            <div className="btn">
              <a
                href="https://github.com/LokendraNath/To-Do-List"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="img/weath.png" alt="" />
          <h3>Live Weather</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Unde, quas.
          </p>
          <div className="btn-group">
            <div className="btn">
              <a href="https://lokendra-weather.netlify.app/" target="_blank">
                Live Demo
              </a>
            </div>
            <div className="btn">
              <a
                href="https://github.com/LokendraNath/Weather-App"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="img/travel.png" alt="" />
          <h3>Travel Website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Unde, quas.
          </p>
          <div className="btn-group">
            <div className="btn">
              <a
                href="https://lokendra-travel-web.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
            <div className="btn">
              <a
                href="https://github.com/LokendraNath/Travel-Website"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;

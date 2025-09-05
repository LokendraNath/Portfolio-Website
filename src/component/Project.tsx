import project1 from "../assets/Project Image/project1.png";

const portfolioProjects = [
  {
    title: "Fireboard Admin Page",
    image: project1,
    live: "https://www.google.com/",
    repo: "https://www.google.com/",
  },
  {
    title: "Fireboard Admin Page",
    image: project1,
    live: "https://www.google.com/",
    repo: "https://www.google.com/",
  },
];

const Project = () => {
  return (
    <section id="project" className="container min-h-screen py-20">
      <h2 className="section-title tracking-widest">Projects</h2>

      <div className="flex flex-col mb-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-stone-200 py-3 px-3 text-center rounded-3xl space-y-3 mb-3"
          >
            <h3 className="text-2xl">{project.title}</h3>

            <img
              className="rounded-3xl"
              src={project.image}
              alt={project.title}
            />
            <div className="space-x-5 mt-5">
              <a
                href={project.live}
                target="__blank"
                className="border py-1 px-4 rounded-lg transition hover:-translate-y-3 duration-150"
              >
                <button>Live</button>
              </a>
              <a
                href={project.repo}
                target="__blank"
                className="py-1 border px-4 rounded-lg hover:-translate-y-3 duration-150"
              >
                <button>Repo</button>
              </a>
            </div>
          </div>
        ))}

        {/* <div className="project-card">
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
        </div> */}
      </div>
    </section>
  );
};
export default Project;

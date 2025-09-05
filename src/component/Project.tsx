import project1 from "../assets/Project Image/project1.png";
import ProjectCard from "./ProjectCard";

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
    <section id="project" className="container min-h-screen py-20 px-10">
      <h2 className="section-title tracking-widest mt-10 lg:mb-20">Projects</h2>

      <div className="mb-10 grid gap-x-7 gap-y-10 grid-cols-1 lg:grid-cols-2">
        {portfolioProjects.map(({ title, image, live, repo }) => (
          <ProjectCard
            key={title}
            title={title}
            image={image}
            live={live}
            repo={repo}
          />
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

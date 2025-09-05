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
    <section
      id="project"
      className=" flex items-center justify-center flex-col min-h-screen pt-20"
    >
      <h2 className="section-title tracking-widest lg:mb-10">Projects</h2>

      <div className="mb-10 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {portfolioProjects.map(({ title, image, live, repo }) => (
          <ProjectCard
            key={title}
            title={title}
            image={image}
            live={live}
            repo={repo}
          />
        ))}
      </div>
    </section>
  );
};
export default Project;

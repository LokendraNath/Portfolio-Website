interface ProjectCardProp {
  title: string;
  image: string;
  live: string;
  repo: string;
}

const ProjectCard = ({ title, image, live, repo }: ProjectCardProp) => {
  return (
    <div
      key={title}
      className="bg-stone-100 text-center rounded-2xl mb-7 sm:mb-15 lg:mb-7 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] transition duration-300 hover:-translate-y-4 hover:shadow-[0px_14px_33px_4px_rgba(0,_0,_0,_0.1)]"
    >
      <img className="rounded-2xl" src={image} alt={title} />
      <div className="px-3 py-3 sm:py-8 lg:pt-4 ">
        <h3 className="text-xl sm:text-3xl lg:text-2xl tracking-wider font-semibold">
          {title}
        </h3>
        <div className="space-x-5 mt-3 sm:space-x-10 sm:mt-7 lg:space-x-5">
          <a href={live} target="__blank" className="project-icon">
            <button>Live</button>
          </a>
          <a href={repo} target="__blank" className="project-icon">
            <button>Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

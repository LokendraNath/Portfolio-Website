"use client";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "CapitalEdge",
    desc: "Financial Admin Page For  Analysis P/L",
    image: "/assets/ProjectImage/FinanceAdmin.png",
    techStack: ["React,TS,TailwindCSS,Zustand,Router"],
    live: "https://admin-dashboard-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Admin-Dashboard",
  },
  {
    title: "QuickBasket",
    desc: "Shopping Cart App Simple UI",
    image: "/assets/ProjectImage/ShoppingCard.png",
    techStack: ["React,TS,Tailwind"],
    live: "https://shopping-cart-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Shopping-Cart-Odin",
  },
  {
    title: "Noteboard",
    desc: "Create And Manage Notes",
    image: "/assets/ProjectImage/FireBoard.png",
    techStack: ["React,MongoDB,Tailwind,Node.js,ExpressJs"],
    live: "https://noteboard-zvav.onrender.com/",
    repo: "https://github.com/LokendraNath/NoteBoard",
  },
  {
    title: "Travel App",
    desc: "Book Chhattishgadh Best Place Destination In On Site",
    image: "/assets/ProjectImage/TravelPage.png",
    techStack: ["HTML,CSS,Javascript"],
    live: "https://lokendra-travel-web.netlify.app/",
    repo: "https://github.com/LokendraNath/Travel-Website",
  },
  {
    title: "Expense Tracker",
    desc: "Track Your Daily Expenses",
    image: "/assets/ProjectImage/ExpenseTracker.png",
    techStack: ["HTML,CSS,Javascript"],
    live: "https://lokendra-expense-tracker.netlify.app/",
    repo: "#",
  },
];
const parentVarientMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      staggerDirection: 1,
    },
  },
};

const Project = () => {
  return (
    <section
      id="project"
      className=" flex items-center justify-center flex-col min-h-screen pt-20"
    >
      <h2 className="section-title tracking-widest lg:mb-10">Projects</h2>

      <div className="mb-10 px-2 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-stone-100 text-center rounded-2xl mb-7 sm:mb-15 lg:mb-7 transition duration-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-4 hover:shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]"
          >
            <img
              className="rounded-t-2xl"
              src={project.image}
              alt={project.title}
            />
            <div className="px-3 py-3 sm:py-8 lg:pt-4 flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl lg:text-2xl tracking-wider mb-1 font-bold bg-linear-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <h3 className="text-sm mb-4">{project.desc}</h3>
              <p className="text-[13px] font-gothic max-w-[80%] bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-3">
                {project.techStack.join(", ")}
              </p>
              <div className="flex gap-4">
                {/* GitHub Button */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold overflow-hidden transition-all duration-300"
                  style={{ background: "#181717", color: "#fff" }}
                >
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
                  <i className="fab fa-github relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </a>

                {/* Live Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 bg-green-600 hover:bg-green-700"
                >
                  {/* Gradient hover effect */}
                  <span className="absolute inset-0 bg-linear-to-r from-green-400 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <i className="fas fa-external-link-alt relative z-10" />
                  <span className="relative z-10">Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;

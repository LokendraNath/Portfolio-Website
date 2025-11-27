"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "TheraLink AI",
    desc: "AI Powered Therapy Booking Platform",
    image: "/assets/ProjectImage/theralink.png",
    techStack: ["Next.js, TypeScript, PostgresSQL, "],
    live: "https://theralinkai.vercel.app/",
    repo: "https://github.com/LokendraNath/TheraLink",
  },
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
      <h2 className="section-title tracking-widest lg:mb-20">Projects</h2>

      <div className="mb-10 px-2 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="bg-stone-100 text-center rounded-2xl mb-7 sm:mb-15 lg:mb-7 transition duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-5"
          >
            <Image
              className="rounded-t-2xl h-45 w-full object-cover"
              height={1000}
              width={1000}
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
                <Link
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
                </Link>

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

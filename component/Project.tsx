"use client";
import { motion } from "framer-motion";
import CapitalEdge from "@/public/assets/ProjectImage/FinanceAdmin.png";
import ShoppingCart from "@/public/assets/ProjectImage/ShoppingCard.png";
import Noteboard from "@/public/assets/ProjectImage/NodeBoard.png";
import TravelPage from "@/public/assets/ProjectImage/TravelPage.png";
import expanceTracker from "@/public/assets/ProjectImage/ExpenseTracker.png";
import ProjectCard from "@/component/ProjectCard";

const portfolioProjects = [
  {
    title: "CapitalEdge",
    desc: "Financial Admin Page For  Analysis P/L",
    image: CapitalEdge,
    techStack: ["React,TS,TailwindCSS,Zustand,Router"],
    live: "https://admin-dashboard-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Admin-Dashboard",
  },
  {
    title: "QuickBasket",
    desc: "Shopping Cart App Simple UI",
    image: ShoppingCart,
    techStack: ["React,TS,Tailwind"],
    live: "https://shopping-cart-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Shopping-Cart-Odin",
  },
  {
    title: "Noteboard",
    desc: "Create And Manage Notes",
    image: Noteboard,
    techStack: ["React,MongoDB,Tailwind,Node.js,ExpressJs"],
    live: "https://noteboard-zvav.onrender.com/",
    repo: "https://github.com/LokendraNath/NoteBoard",
  },
  {
    title: "Travel App",
    desc: "Book Chhattishgadh Best Place Destination In On Site",
    image: TravelPage,
    techStack: ["HTML,CSS,Javascript"],
    live: "https://lokendra-travel-web.netlify.app/",
    repo: "https://github.com/LokendraNath/Travel-Website",
  },
  {
    title: "Expense Tracker",
    desc: "Track Your Daily Expenses",
    image: expanceTracker,
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
  // Define Varients

  // Define Text animation
  const text = "Projects";
  const letters = text.split("");

  return (
    <section
      id="project"
      className=" flex items-center justify-center flex-col min-h-screen pt-20"
    >
      <h2 className="section-title tracking-widest lg:mb-10">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <motion.div
        className="mb-10 px-2 grid gap-x-7 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-10"
        variants={parentVarientMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
};
export default Project;

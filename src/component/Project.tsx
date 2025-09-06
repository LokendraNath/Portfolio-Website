import financeAdmin from "../../public/assets/Project Image/finance-admin.png";
import ShoppingCart from "../../public/assets/Project Image/shoppingCart.png";
import TravelPage from "../../public/assets/Project Image/travel-page.png";
import expanceTracker from "../../public/assets/Project Image/Expense Tracker.png";
import ProjectCard from "./ProjectCard";

const portfolioProjects = [
  {
    title: "Finance Admin Page",
    image: financeAdmin,
    live: "https://admin-dashboard-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Admin-Dashboard",
  },
  {
    title: "Shopping Cart",
    image: ShoppingCart,
    live: "https://shopping-cart-lokendra.vercel.app/",
    repo: "https://github.com/LokendraNath/Shopping-Cart-Odin",
  },
  {
    title: "Travel App",
    image: TravelPage,
    live: "https://lokendra-travel-web.netlify.app/",
    repo: "https://github.com/LokendraNath/Travel-Website",
  },
  {
    title: "Expense Tracker",
    image: expanceTracker,
    live: "https://lokendra-expense-tracker.netlify.app/",
    repo: "#",
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

import ScrollToTopButton from "@/component/ScrollToTop";
import About from "@/component/About";
import Header from "@/component/Header";
import Skills from "@/component/Skills";
import Project from "@/component/Project";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

const Home = () => {
  return (
    <div className="px-3 bg-white">
      <Header />
      <div className="font-gothic">
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
      {/* Scroll To Top */}
      <ScrollToTopButton />
    </div>
  );
};
export default Home;

import { useEffect, useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import Skills from "./component/Skills";
import ScrollToTopButton from "./component/ScrollToTop";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

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
export default App;

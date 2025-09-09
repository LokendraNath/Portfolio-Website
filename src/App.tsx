import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import Skills from "./component/Skills";
import ScrollToTopButton from "./component/ScrollToTop";

const App = () => {
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

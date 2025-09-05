import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import Skills from "./component/Skills";

const App = () => {
  return (
    <div className="px-3">
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;

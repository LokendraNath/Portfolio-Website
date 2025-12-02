"use client";
import ScrollToTopButton from "@/component/ScrollToTop";
import Hero from "@/component/Hero";
import Header from "@/component/Navbar";
import Project from "@/component/Project";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import About from "@/component/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
export default Home;

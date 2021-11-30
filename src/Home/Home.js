import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Project from "../Components/Projects/Project";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Project></Project>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;

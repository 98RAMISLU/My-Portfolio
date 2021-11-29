import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Project></Project>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/home">
    //       <Header></Header>
    //     </Route>
    //     <Route path="/about">
    //       <AboutMe></AboutMe>
    //     </Route>
    //     <Route path="/contact">
    //       <ContactMe></ContactMe>
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;

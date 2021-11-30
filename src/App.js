import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import Home from "./Home/Home";
import DetailsTwo from "./Components/DetailsTwo/DetailsTwo";
import DetailsThree from "./Components/DetailsThree/DetailsThree";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/details1">
            <Details></Details>
          </Route>
          <Route path="/details2">
            <DetailsTwo></DetailsTwo>
          </Route>
          <Route path="/details3">
            <DetailsThree></DetailsThree>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
        </Switch>
      </Router>
    </div>
    //   <Router>
    //     <Routes>
    //       <Route path="/#home">
    //         <Header></Header>
    //       </Route>
    //       <Route path="/#about">
    //         <AboutMe></AboutMe>
    //       </Route>
    //       <Route path="/#contact">
    //         <ContactMe></ContactMe>
    //       </Route>
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;

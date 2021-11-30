import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a class="navbar-brand name" href="#">
          R A Mislu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a
                className="nav-link active all-menu"
                aria-current="page"
                onClick={() => window.location.replace("/#home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link all-menu"
                onClick={() => window.location.replace("/#about")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link all-menu"
                onClick={() => window.location.replace("/#projects")}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link all-menu"
                onClick={() => window.location.replace("/#contact")}
              >
                Conatct Me
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link all-menu" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

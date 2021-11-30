import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
const Header = () => {
  return (
    <div className="banner" id="home">
      <Navigation></Navigation>
      <div className="container">
        <div className="row head-part">
          <div className="col-md-6 header-intro">
            <h1>
              Hi! I'm <span className="mislu">R A Mislu</span>.
            </h1>
            <p>Creative Designer & Developer located in Sylhet.</p>
          </div>
          <div className="col-md-6 header-resume">
            <a
              className="btn btn-outline-secondary px-5"
              href="https://drive.google.com/file/d/1eU_Q7bYhe9nPwUzgXIPTM2kx8zaeJirS/view"
              target="_blank"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

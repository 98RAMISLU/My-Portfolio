import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="foot">
      <h3>R A Mislu</h3>
      <ul className="my-4">
        <li>
          <a href="https://www.facebook.com/ra.mislu.7" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/r-a-mislu-0762a11b0/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/r_a_mislu/" target="_blank">
            <i class="fab fa-instagram-square"></i>
          </a>
        </li>
      </ul>
      <p>© 2021 R A Mislu | All rights reserved.</p>
    </div>
  );
};

export default Footer;

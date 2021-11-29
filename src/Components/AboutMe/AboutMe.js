import React from "react";
import me from "../../Images/me.JPG";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-5">
          <img src={me} alt="" className="img-fluid my-image" />
        </div>
        <div className="col-md-7 text-start about-me">
          <h3>About ME</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            perspiciatis nobis dicta recusandae modi quam sit voluptate id
            repudiandae, consequuntur cumque vitae aut minus beatae quas autem
            dolore laudantium necessitatibus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aperiam perspiciatis nobis dicta
            recusandae modi quam sit voluptate id repudiandae, consequuntur
            cumque vitae aut minus beatae quas autem dolore laudantium
            necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

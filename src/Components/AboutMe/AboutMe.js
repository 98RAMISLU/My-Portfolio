import React from "react";
import me from "../../Images/me.JPG";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="bg-set">
      <div className="container" id="about">
        <div className="row py-5">
          <div className="col-md-5">
            <img src={me} alt="" className="img-fluid my-image" />
          </div>
          <div className="col-md-7 text-start about-me">
            <h3 className="mislu">About ME</h3>
            <p>
              My name is Ruman Ahmed Mislu.I am a student and a dedicated and
              efficient full stack developer with experience building responsive
              user interfaces with complete backend work and proper
              authentication and my code is also well formatted that can be
              understandable by any other coder.I am studying at North East
              University Bangladesh where my program is B.Sc.(Engg.) in Computer
              Science & Engineering.Recently I just finished a couse with
              Programming Hero,the course was about web development.In that
              course more then 5000 students participated and I was one of
              them.After I completed my course with 58.17 avg assignment mark,I
              got chance in a special batch call SCIC.So now I am looking
              forword about it and I am also Seeking to further improve with
              upcoming technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

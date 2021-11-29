import React from "react";
import "./Project.css";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
const Project = () => {
  return (
    <div className="my-5 work py-5 ">
      <div className="container">
        <div className=" row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 rounded-3 ">
              <img
                src={one}
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Healthcare website (Medinova)</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col  rounded-3">
            <div className="card h-100 ">
              <img
                src={two}
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">AirTicket Booking Website</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3">
              <img
                src={three}
                className="card-img-top"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce Website (RamShoes)</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

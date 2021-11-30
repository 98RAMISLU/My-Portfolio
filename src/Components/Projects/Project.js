import React from "react";
import "./Project.css";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="py-5 work py-3" id="projects">
      <h2 className="my-4 mislu">Projects</h2>
      <div className="container">
        <div className=" row row-cols-1 row-cols-md-3 g-4 my-4">
          <div className="col ">
            <div className="card h-100 rounded-3 ">
              <img
                src={one}
                className="card-img-top rounded-3"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Healthcare website (Medinova)</h5>
                <p className="card-text">
                  This is a healthcare website Medinoba & it has login
                  registration and also google sign in.This website shows our
                  services where a patient can get our service.A user can donate
                  using our website if he or she wants.
                </p>
                <Link className="details" to="/details1">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3">
              <img
                src={two}
                className="card-img-top rounded-3"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">AirTicket Booking Website</h5>
                <p className="card-text">
                  It's an air ticket booking service website.Here a user can
                  book a ticket for travel from one country to another or one
                  city to another city.On this website a user must have to login
                  to book a ticket.
                </p>
                <Link className="details" to="/details2">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3">
              <img
                src={three}
                className="card-img-top rounded-3"
                height="300px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce Website (RamShoes)</h5>
                <p className="card-text">
                  It is a shoes online shop where a user can buy shoes. If any
                  user faces any trouble using this website then user can
                  contact the admin and admin will solve their problem.Our
                  website has simple payment system.
                </p>
                <Link className="details" to="/details3">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

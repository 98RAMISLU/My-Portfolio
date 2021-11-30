import React from "react";
import health1 from "../../Images/h1.png";
import health2 from "../../Images/h2.png";
import health3 from "../../Images/h3.png";
import Navigation from "../Navigation/Navigation";

import "./Details.css";
const Details = () => {
  return (
    <div className=" detail">
      <Navigation></Navigation>

      <div className="container mt-3">
        <div classNameName="card mb-3">
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-100 mx-auto"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner rounded-3">
              <div className="carousel-item active">
                <img
                  src={health1}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={health2}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={health3}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body my-2">
            <h5 className="card-title text-warning">
              Healthcare website (Medinova)
            </h5>
            <p className="card-text">
              This is a healthcare website Medinoba.It has login registration
              and also google sign in.This website shows our services where a
              patient can get our service.A user can donate using our website if
              he or she want.A user can also contact with us.
            </p>
            <p className="card-text">
              <a
                className="btn btn-outline-success detail-btn me-3"
                href="https://github.com/98RAMISLU/medinoba-healthcare"
                target="_blank"
              >
                Github
              </a>
              <a
                className="btn btn-outline-success  detail-btn px-5"
                href="https://react-assign10.web.app/home"
                target="_blank"
              >
                Live Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

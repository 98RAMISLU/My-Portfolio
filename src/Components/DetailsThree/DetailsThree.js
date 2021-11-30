import React from "react";
import shoe1 from "../../Images/r1.png";
import shoe2 from "../../Images/r2.png";
import shoe3 from "../../Images/r3.png";
import Navigation from "../Navigation/Navigation";
const DetailsThree = () => {
  return (
    <div className=" detail">
      <Navigation></Navigation>

      <div className="container mt-3">
        <div classNameName="card mb-3">
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-100 mx-auto "
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
            <div className="carousel-inner  rounded-3">
              <div className="carousel-item active">
                <img
                  src={shoe1}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={shoe2}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={shoe3}
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
              E-Commerce Website (RamShoes)
            </h5>
            <p className="card-text">
              We provide best shoes in the country.Our customer service has
              highest quality.Our products will give best comfort to our
              customer.Our website has simple payment system.If any user face
              any trouble using our website then that user can easily contact
              with us and we will solve their problem..
            </p>
            <p className="card-text">
              <a
                className="btn btn-outline-success detail-btn me-3"
                href="https://github.com/programming-hero-web-course-4/niche-website-client-side-98RAMISLU"
                target="_blank"
              >
                Github Client
              </a>
              <a
                className="btn btn-outline-success detail-btn me-3"
                href="https://github.com/programming-hero-web-course-4/niche-website-server-side-98RAMISLU"
                target="_blank"
              >
                Github Srever
              </a>
              <a
                className="btn btn-outline-success  detail-btn px-5"
                href="https://react-assign-12.web.app/"
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

export default DetailsThree;

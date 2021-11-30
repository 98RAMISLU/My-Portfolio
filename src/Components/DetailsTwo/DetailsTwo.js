import React from "react";
import air1 from "../../Images/a1.png";
import air2 from "../../Images/a2.png";
import air3 from "../../Images/a3.png";
import Navigation from "../Navigation/Navigation";
const DetailsTwo = () => {
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
                  src={air1}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={air2}
                  className="d-block w-100 ml-auto"
                  height="500px"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={air3}
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
              AirTicket Booking Website
            </h5>
            <p className="card-text">
              Its air ticket booking service website.In here a user can book a
              ticket for travel from one country to another or one city to
              another city.In this website a user must have to login to book
              ticket.It's a well ditailed website for any user to book
              ticket.User can get best service from here.
            </p>
            <p className="card-text">
              <a
                className="btn btn-outline-success detail-btn me-3"
                href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-98RAMISLU"
              >
                Github Client
              </a>
              <a
                className="btn btn-outline-success detail-btn me-3"
                href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-98RAMISLU"
              >
                Github Server
              </a>
              <a
                className="btn btn-outline-success  detail-btn px-5"
                href="https://react-assign11.web.app/"
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

export default DetailsTwo;

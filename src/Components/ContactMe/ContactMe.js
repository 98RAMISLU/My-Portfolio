import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2yjpb4g",
        "template_7gxfgwg",
        e.target,
        "user_BXQyYMUA9OkkhlopPqSdG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact ">
      <h2 className="mislu mt-4">Contact Me</h2>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 mx-auto my-3">
              <input
                type="submit"
                className="send-btn"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

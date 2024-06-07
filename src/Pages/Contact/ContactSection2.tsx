import React, { useState } from "react";
import "./ContactSection2.css";
import VerticalCenterLineBg from "../../Assets/img/vertical-center-line-bg.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection2 = () => {
 
  const form = useRef<HTMLFormElement | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_lkkrqgh",
          "template_e9rowr8",
          form.current,
          "kJOEIcE3YY2e9E88R"
        )
      
        .then(() => {
          setSuccessMessage("Your message has been sent successfully!");
          if (form.current) {
            form.current.reset();
          }

          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <>
      <section
        className="contact-background-position-center contact-background-repeat position-relative p-0"
        style={{
          backgroundImage: `url(${VerticalCenterLineBg})`,
          marginBottom: "200px",
        }}
      >
        {/* <div className="position-absolute top-0px right-0px w-50 h-100 contact-bg-very-light-gray d-none d-lg-inline-block"></div> */}
        <div className="contact-container position-relative">
          <div className="contact-row g-0">
            <div
              className="col-lg-5 md-mb-50px appear anime-child anime-complete"
              data-anime="{ el: childs, translateY: [0, 0], opacity: [0,1], duration: 1200, delay: 0, staggervalue: 150, easing: easeOutQuad }"
            >
              <span className="d-block text-base-color fw-500 mb-5px">
                Make your stay memorable
              </span>
              <h4 className="alt-font text-dark-gray ls-minus-2px mb-25px">
                Have an inquiry or some feedback for us?
              </h4>
              <form
                ref={form}
                onSubmit={sendEmail}
                method="POST"
                className="contact-form-style-03"
              >
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                >
                  Enter your name*
                </label>
                <div className="position-relative form-group mb-20px">
                  <span className="form-icon">
                    <i className="fas fa-smile"></i>
                  </span>
                  <input
                    className="ps-0 contact-border-radius-0px contact-border-color-dark-gray bg-transparent form-control required"
                    id="exampleInputEmail1"
                    type="text"
                    name="name"
                    placeholder="What's your good name"
                    required
                  />
                </div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                >
                  Email address*
                </label>
                <div className="position-relative form-group mb-20px">
                  <span className="form-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    className="ps-0 contact-border-radius-0px contact-border-color-dark-gray bg-transparent form-control required"
                    id="exampleInputEmail2"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0"
                >
                  Your message
                </label>
                <div className="position-relative form-group form-textarea mb-0">
                  <textarea
                    className="ps-0 contact-border-radius-0px contact-border-color-dark-gray bg-transparent form-control"
                    name="comment"
                    placeholder="Describe about your booking"
                    required
                    // rows="3"
                  ></textarea>
                  <span className="form-icon">
                    <i className="fas fa-comment-dots"></i>
                  </span>
                </div>
                <div className="contact-row mt-25px align-items-center">
                  <div className="col-xl-7 col-lg-12 col-sm-7 lg-mb-30px md-mb-0">
                    <p className="mb-0 fs-14 lh-22 text-center text-sm-start">
                      We will never collect information about you without your
                      explicit consent.
                    </p>
                  </div>
                  <div className="col-xl-5 col-lg-12 col-sm-5 text-center text-sm-end text-lg-start text-xl-end xs-mt-25px">
                    <input
                      id="exampleInputEmail3"
                      type="hidden"
                      name="redirect"
                      value=""
                    />
                    <button
                      className="btn btn-dark-gray btn-small btn-round-edge btn-box-shadow text-uppercase submit"
                      type="submit"
                    >
                      send message
                    </button>
                  </div>
                  <div className="col-12 form-results d-none mt-20px mb-0"></div>
                </div>
              </form>
              {successMessage && (
                <div className="mt-3 text-success text-center">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection2;

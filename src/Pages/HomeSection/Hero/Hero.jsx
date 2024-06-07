import React from "react";
import HeroImage from "../../../Assets/img/vibes-lanka-banner-bg.jpg";
import HighlightSeperator from "../../../Assets/img/highlight-separator.svg";
import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [backgroundPosition, setBackgroundPosition] = useState(28.8);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPosition = 28.8 - scrollPosition / 10;
      setBackgroundPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className="p-0  full-screen md-h-600px sm-h-500px border-top border-4 border-color-base-color position-relative"
        data-parallax-background-ratio="0.3"
        style={{
          backgroundImage: `url(${HeroImage})`,
          marginTop: "96px",
          // height: "700px",
          backgroundPosition: `50% ${backgroundPosition}px`,
        }}
      >
        <div className="opacity-light bg-black"></div>
        <div className="hero-container h-100 position-relative">
          <div className="hero-row align-items-center h-100 justify-content-center">
            <div
              className="col-md-10 position-relative text-white d-flex flex-column justify-content-center text-center h-100 appear anime-child anime-complete"
              data-anime="{ el: childs, translateY: [-15, 0], perspective: [1200,1200], scale: [1.1, 1], rotateX: [50, 0], opacity: [0,1], duration: 600, delay: 100, staggervalue: 300, easing: easeOutQuad }"
            >
              <h5 className="alt-font fw-400 mb-20px text-shadow-double-large">
                Discover Amazing Sri Lanka Travel Deals
              </h5>
              <div className="fs-225 lg-fs-200 md-fs-170 sm-fs-150 xs-fs-110 fw-700 mb-20px ls-minus-8px md-ls-minus-4px xs-ls-minus-2px text-shadow-double-large">
                Journey
              </div>
              <div className="mb-30px">
                <a
                  href="demo-hotel-and-resort-contact.html"
                  className="btn btn-extra-large btn-switch-text btn-white fw-700 btn-round-edge btn-box-shadow"
                >
                  <span>
                    <span
                      className="btn-double-text"
                      data-text="Make your Vibes"
                    >
                      Make your Vibes
                    </span>
                    <span>
                      <i className="fas fa-arrow-right fs-14"></i>
                    </span>
                  </span>
                </a>
              </div>
              <div className="position-absolute sm-position-relative bottom-80px lg-bottom-50px sm-bottom-0px left-0px right-0px d-flex justify-content-center align-items-center">
                <div className="fs-22 fw-500">
                  Perfect place to make your ultimate partner{" "}
                  <div
                    className="highlight-separator shadow-in"
                    data-shadow-animation="true"
                    data-animation-delay="500"
                  >
                    in Sri Lankan Adventures.
                    <span>
                      <img src={HighlightSeperator} alt="HighlightSeperator" data-no-retina="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

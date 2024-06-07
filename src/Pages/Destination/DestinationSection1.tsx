import React from "react";
import "./DestinationSection1.css";
import LineBg from "../../Assets/img/vertical-center-line-bg.svg";

const DestinationSection1 = () => {
  return (
    <>
      <section
        className="background-position-center background-repeat overlap-height"
        style={{ backgroundImage: `url(${LineBg})`, height: "627.562px" }}
      >
        <div className="container overlap-gap-section">
          <div className="row justify-content-center">
            <div
              className="col-xl-8 col-md-9 text-center appear anime-child anime-complete"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="fs-20 mb-15px text-base-color fw-500 d-block">
                The Jewel of the Indian Ocean
              </span>
              <h4 className="alt-font text-dark-gray ls-minus-1px mb-0">
                Whether you're seeking adventure, relaxation, or a glimpse into
                ancient civilizations, Sri Lanka has destinations and activities
                for every traveler.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationSection1;

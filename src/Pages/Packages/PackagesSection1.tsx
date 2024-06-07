import React from "react";
import "./PackagesSection1.css";

const PackagesSection1 = () => {
  return (
    <>
      <section className="bg-very-light-gray pt-35px pb-35px">
        <div className="packages-section-1-container">
          <div
            className="row row-cols-1 row-cols-md-4 row-cols-sm-2 text-center justify-content-center appear anime-child anime-complete"
            data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <div className="col border-end xs-border-end-0 xs-border-bottom border-color-transparent-base-color sm-mb-25px xs-mb-20px xs-pb-20px">
              <a
                href="/honeymoon"
                
                className="alt-font fs-22 text-dark-gray section-link"
              >
                Honeymoon Vibes
              </a>
            </div>
            <div className="col border-end sm-border-end-0 xs-border-bottom border-color-transparent-base-color sm-mb-25px xs-mb-20px xs-pb-20px">
              <a
                href="#Romantic"
                className="alt-font fs-22 text-dark-gray section-link"
              >
                Romantic Vibes
              </a>
            </div>
            <div className="col border-end xs-border-end-0 xs-border-bottom border-color-transparent-base-color xs-mb-20px xs-pb-20px">
              <a
                href="#Family"
                className="alt-font fs-22 text-dark-gray section-link"
              >
                Family Vibes
              </a>
            </div>
            <div className="col">
              <a
                href="#Spiritual"
                className="alt-font fs-22 text-dark-gray section-link"
              >
                Spiritual Vibes
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesSection1;

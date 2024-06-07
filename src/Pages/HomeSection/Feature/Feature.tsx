import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <section className="bg-very-light-gray half-section ps-6 pe-6">
        <div className="feature-container-fluid">
          <div
            className="feature-row feature-row-cols-1 feature-row-cols-lg-4 feature-row-cols-md-2 justify-content-center appear anime-child anime-complete"
            data-anime="{ el: childs, translateX: [-15, 0],opacity: [0,1], duration: 600, delay: 0, staggervalue: 300, easing: easeOutQuad }"
          >
            <div className="col icon-with-text-style-10 border-end border-1 sm-border-end-0 border-color-transparent-base-color md-mb-50px">
              <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                <div className="feature-box-icon feature-box-icon-rounded w-120px h-120px rounded-circle mb-20px">
                  <i className="fas fa-shuttle-van  icon-extra-large text-base-color"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font text-dark-gray fs-22 ls-0px">
                    Luxury Vehicles
                  </span>
                  <p>Drive in Ultimate Luxury and Style</p>
                </div>
              </div>
            </div>

            <div className="col icon-with-text-style-10 border-end border-1 md-border-end-0 border-color-transparent-base-color md-mb-50px">
              <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                <div className="feature-box-icon feature-box-icon-rounded w-120px h-120px rounded-circle mb-20px">
                  <i className="fas fa-map-marked-alt icon-extra-large text-base-color"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font text-dark-gray fs-22 ls-0px">
                    Luxury Travels
                  </span>
                  <p>Embark on a Luxurious and Personalized Journey</p>
                </div>
              </div>
            </div>

            <div className="col icon-with-text-style-10 border-end border-1 sm-border-end-0 border-color-transparent-base-color sm-mb-50px">
              <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                <div className="feature-box-icon feature-box-icon-rounded w-120px h-120px rounded-circle mb-20px">
                  <i className="fas fa-hotel icon-extra-large text-base-color"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font text-dark-gray fs-22 ls-0px">
                    Luxury Apartments
                  </span>
                  <p>Experience a Unique Stay</p>
                </div>
              </div>
            </div>

            <div className="col icon-with-text-style-10">
              <div className="feature-box ps-8 pe-8 xl-ps-5 xl-pe-5">
                <div className="feature-box-icon feature-box-icon-rounded w-120px h-120px rounded-circle mb-20px">
                  <i className="fas fa-spa icon-extra-large text-base-color"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font text-dark-gray fs-22 ls-0px">
                    Wellness Retreats
                  </span>
                  <p> Rejuvenate Your Soul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;

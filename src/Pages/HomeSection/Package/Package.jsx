import React from 'react'
import LineBg from "../../../Assets/img/vertical-center-line-bg.svg";
import Image9 from "../../../Assets/img/demo-hotel-and-resort-home-09.png";
import Image10 from "../../../Assets/img/demo-hotel-and-resort-home-10.png";
import Image11 from "../../../Assets/img/demo-hotel-and-resort-home-11.jpg";
import Image12 from "../../../Assets/img/demo-hotel-and-resort-home-12.jpg";
import Image13 from "../../../Assets/img/demo-hotel-and-resort-home-13.jpg";
import Client01 from "../../../Assets/img/demo-hotel-and-resort-client-01.svg";
import Client02 from "../../../Assets/img/demo-hotel-and-resort-client-02.svg";
import Client03 from "../../../Assets/img/demo-hotel-and-resort-client-03.svg";
import Client04 from "../../../Assets/img/demo-hotel-and-resort-client-04.svg";
import "./Package.css";


const Package = () => {
  return (
    <>
    <section
        className="background-position-center background-repeat"
        style={{ backgroundImage: `url(${LineBg})` }}
      >
        <div
          className="package-container overlap-section"
          style={{ marginTop: "-176.797px" }}
        >
          <div className="package-row bg-white box-shadow-extra-large border-radius-6px ps-5 pe-5 pt-3 pb-3 g-0 sm-p-6 sm-ps-19 align-items-center mb-8 overflow-hidden position-relative">
            <div className="col-lg-2 col-md-3 text-center sm-mb-25px">
              <img src={Image9} alt="" data-no-retina="" />
            </div>
            <div className="col-md-6 text-center text-md-start sm-mb-25px">
              <div className="fs-26 alt-font fw-500 text-dark-gray ls-minus-05px">
                Life is shaped by a series of interconnected experiences{" "}
                <span className="text-decoration-line-bottom fw-600">
                  our environments.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 text-center">
              <img
                className="md-w-85 sm-w-auto"
                src={Image10}
                alt=""
                data-no-retina=""
              />
            </div>
            <div className="vertical-title-center align-items-center position-absolute top-0px left-0px bg-base-color p-10px w-50px h-100 w-10px z-index-9">
              <div className="title fs-15 ls-1px text-white fw-600 text-uppercase">
                Testimonial
              </div>
            </div>
          </div>
        </div>
        <div className="package-container">
          <div className="package-row justify-content-center mb-5 xs-mb-7">
            <div
              className="col-md-8 text-center appear anime-child anime-complete"
              data-anime="{ el: childs, translateY: [30, 0], opacity: [0,1], duration: 600, delay: 0, staggervalue: 300, easing: easeOutQuad }"
            >
              <h2 className="alt-font mb-5px text-dark-gray ls-minus-2px">
                Exclusive offers
              </h2>
              <span className="d-inline-block">
                Enjoy in resorts and awesome facilities.
              </span>
            </div>
          </div>
          <div
            className="package-row package-row-cols-1 package-row-cols-lg-3 package-row-cols-md-2 justify-content-center mb-9 appear anime-child anime-complete"
            data-anime="{ el: childs, translateY: [-30, 0], opacity: [0,1], duration: 600, delay: 0, staggervalue: 300, easing: easeOutQuad }"
          >
            <div className="col interactive-banner-style-07 md-mb-30px xs-mb-15px">
              <figure className="mb-0 border-radius-6px overflow-hidden box-shadow-quadruple-large-hover box-shadow-quadruple-large">
                <img src={Image11} alt="" data-no-retina="" />
                <div className="overlay-bg bg-dark-gray opacity-extra-medium"></div>
                <figcaption>
                  <div className="hover-content align-items-center d-flex flex-column justify-content-center h-100 p-50px text-center">
                    <div className="w-65 lg-w-90 mt-auto mb-auto">
                      <span className="fs-14 fw-500 ls-2px text-white text-uppercase">
                        Exclusive
                      </span>
                      <div className="divider-style-03 divider-style-03-01 border-color-transparent-white-very-light pt-15px mt-10px"></div>
                      <h6 className="alt-font text-white mb-0">
                        Spice
                        <br />
                        Garden Experience
                      </h6>
                    </div>
                    <div className="hover-show-content text-center">
                      <a
                        href="demo-hotel-and-resort-rooms.html"
                        className="bg-base-color w-55px h-55px rounded-circle position-relative mx-auto d-block"
                      >
                        <i className="fas fa-arrow-right icon-extra-medium absolute-middle-center text-white"></i>
                      </a>
                    </div>
                    <div className="hover-hide-content">
                      <span className="fs-13 lh-34 text-dark-gray text-uppercase bg-white ps-20px pe-20px d-inline-block border-radius-4px fw-700">
                        Free
                      </span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col interactive-banner-style-07 md-mb-30px xs-mb-15px">
              <figure className="mb-0 border-radius-6px overflow-hidden box-shadow-quadruple-large-hover box-shadow-quadruple-large">
                <img src={Image12} alt="" data-no-retina="" />
                <div className="overlay-bg bg-dark-gray opacity-extra-medium"></div>
                <figcaption>
                  <div className="hover-content align-items-center d-flex flex-column justify-content-center h-100 p-60px text-center">
                    <div className="w-65 lg-w-90 mt-auto mb-auto">
                      <span className="fs-14 fw-500 ls-2px text-white text-uppercase">
                        Unbundled
                      </span>
                      <div className="divider-style-03 divider-style-03-01 border-color-transparent-white-very-light pt-15px mt-10px"></div>
                      <h6 className="alt-font text-white mb-0">
                        Cocktail
                        <br />
                        package
                      </h6>
                    </div>
                    <div className="hover-show-content text-center">
                      <a
                        href="demo-hotel-and-resort-amenities.html"
                        className="bg-base-color w-55px h-55px rounded-circle position-relative mx-auto d-block"
                      >
                        <i className="fas fa-arrow-right icon-extra-medium absolute-middle-center text-white"></i>
                      </a>
                    </div>
                    <div className="hover-hide-content">
                      <span className="fs-13 lh-34 text-dark-gray text-uppercase bg-white ps-20px pe-20px d-inline-block border-radius-4px fw-700">
                        Get 30% off
                      </span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col interactive-banner-style-07">
              <figure className="mb-0 border-radius-6px overflow-hidden box-shadow-quadruple-large-hover box-shadow-quadruple-large">
                <img src={Image13} alt="" data-no-retina="" />
                <div className="overlay-bg bg-dark-gray opacity-extra-medium"></div>
                <figcaption>
                  <div className="hover-content align-items-center d-flex flex-column justify-content-center h-100 p-60px text-center">
                    <div className="w-65 lg-w-90 mt-auto mb-auto">
                      <span className="fs-14 fw-500 ls-2px text-white text-uppercase">
                        Wellness
                      </span>
                      <div className="divider-style-03 divider-style-03-01 border-color-transparent-white-very-light pt-15px mt-10px"></div>
                      <h6 className="alt-font text-white mb-0">
                        Massage
                        <br />
                        package
                      </h6>
                    </div>
                    <div className="hover-show-content text-center">
                      <a
                        href="demo-hotel-and-resort-bistro.html"
                        className="bg-base-color w-55px h-55px rounded-circle position-relative mx-auto d-block"
                      >
                        <i className="fas fa-arrow-right icon-extra-medium absolute-middle-center text-white"></i>
                      </a>
                    </div>
                    <div className="hover-hide-content">
                      <span className="fs-13 lh-34 text-dark-gray text-uppercase bg-white ps-20px pe-20px d-inline-block border-radius-4px fw-700">
                        Get 20% off
                      </span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div
            className="package-row package-row-cols-1 package-row-cols-md-4 package-row-cols-sm-2 text-center justify-content-center clients-style-05 mb-4 sm-mb-7"
            data-anime="{ el: childs, opacity: [0,1], duration: 500, delay: 0, staggervalue: 200, easing: easeOutQuad }"
          >
            <div className="col sm-mb-30px">
              <div className="client-box">
                <a href="d.html">
                  <img
                    src={Client01}
                    className="h-55px"
                    alt=""
                    data-no-retina=""
                  />
                </a>
              </div>
            </div>

            <div className="col sm-mb-30px">
              <div className="client-box">
                <a href="d.html">
                  <img
                    src={Client02}
                    className="h-55px"
                    alt=""
                    data-no-retina=""
                  />
                </a>
              </div>
            </div>

            <div className="col xs-mb-30px">
              <div className="client-box">
                <a href="d.html">
                  <img
                    src={Client03}
                    className="h-55px"
                    alt=""
                    data-no-retina=""
                  />
                </a>
              </div>
            </div>

            <div className="col">
              <div className="client-box">
                <a href="d.html">
                  <img
                    src={Client04}
                    className="h-55px"
                    alt=""
                    data-no-retina=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="package-row justify-content-center align-items-center">
            <div
              className="col-12 text-center last-paragraph-no-margin"
              data-anime="{ el: childs, translateY: [0, 0], opacity: [0,1], duration: 1200, delay: 0, staggervalue: 150, easing: easeOutQuad }"
            >
              <div className="d-inline-block align-middle bg-dark-gray fw-600 text-white text-uppercase border-radius-4px ps-15px pe-15px fs-12 me-10px md-m-5px">
                Awesome
              </div>
              <div className="d-inline-block align-middle text-dark-gray fs-20 fw-500">
                <span className="text-decoration-line-bottom fw-600">
                  Get 20% discount
                </span>{" "}
                on hotels booking with above websites.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Package
import React from "react";
import "./About.css";
import AboutImage01 from "../../../Assets/img/vibes-lanka-about-us-01.png";
import AboutImage02 from "../../../Assets/img/vibes-lanka-about-us-02.png";
import LineBgDark from "../../../Assets/img/vertical-center-line-bg-dark.svg";

const About = () => {
  return (
    <>
      <section
        className="background-position-center background-repeat"
        style={{ backgroundImage: `url(${LineBgDark})` }}
      >
        <div className="container">
          <div className="row align-items-center mb-12 md-mb-17 xs-mb-25">
            <div
              className="col-lg-5 md-mb-50px appear anime-child anime-complete"
              data-anime={{
                el: "childs",
                opacity: "[0, 1]",
                rotateY: "[-90, 0]",
                rotateZ: "[-10, 0]",
                translateY: "[80, 0]",
                translateZ: "[50, 0]",
                staggervalue: "200",
                duration: "800",
                delay: "200",
                easing: "easeOutCirc",
              }}
            >
              <span
                className="mb-10px text-base-color fw-500 d-block"
                data-text="About Vibes Lanka"
              >
                About Vibes Lanka
              </span>
              <h2 className="alt-font text-dark-gray ls-minus-2px">
                Your Gateway to Unforgettable Journeys.
              </h2>
              <p className="w-80 xl-w-100 mb-35px xs-mb-10px">
                At Vibes Lanka Travels & Tours, we bring your travel dreams to
                life. Our expert team crafts personalized itineraries, ensuring
                unforgettable adventures and seamless journeys. Discover new
                destinations, immerse in diverse cultures, and travel with peace
                of mind, knowing every detail is handled with care.
              </p>
              <div className="d-inline-block w-100">
                <a
                  href="/"
                  className="btn btn-extra-large btn-switch-text btn-dark-gray btn-box-shadow btn-round-edge d-inline-block align-middle me-30px xs-me-10px xs-mt-20px"
                >
                  <span>
                    <span
                      className="btn-double-text"
                      data-text="About Vibes Lanka"
                    >
                      About Vibes Lanka
                    </span>
                  </span>
                </a>
                <div className="fs-20 fw-600 d-inline-block align-middle text-dark-gray xs-mt-20px">
                  <br></br>
                  <a href="https://wa.me/94767085151">
                    <i className="fas fa-phone text-medium-gray icon-small me-10px"></i>
                    076 708 51 51
                  </a>
                  {/* <br></br>
                  <a href="https://wa.me/94769936670">
                    <i className="fas fa-phone text-medium-gray icon-small me-10px"></i>
                    076 993 66 70
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 position-relative offset-lg-1">
              <span
                className="fs-90 position-absolute left-60px md-left-100px sm-left-70px xs-left-10px top-90px xs-top-50px text-dark-gray fw-700 z-index-1 skrollable appear anime-complete skrollable-between"
                data-bottom-top="transform: translateY(50px) scale(1,1)"
                data-top-bottom="transform: translateY(-50px) scale(1,1)"
                data-anime="{ opacity: [0,1], duration: 600, delay: 1500, staggervalue: 300, easing: easeOutQuad }"
                // style={{ transform: "translateY(40.2299px) scale(1, 1)" }}
              >
                <span className="fs-15 fw-600 d-table lh-16 text-uppercase text-medium-gray">
                  Started in
                </span>
                1996
              </span>
              <div
                className="w-75 overflow-hidden position-relative xs-w-80 border-radius-4px float-end  skrollable appear anime-complete skrollable-between"
                data-bottom-top="transform: translateY(50px) scale(1,1)"
                data-top-bottom="transform: translateY(-50px) scale(1,1)" 
                style={{ position: "relative" }}
              >
                <img
                  className="w-100"
                  data-cfsrc={AboutImage01}
                  alt="AboutImage01"
                  src={AboutImage01}
                  style={{ opacity: 1 }}
                  data-no-retina=""
                />
              </div>
              <div
                className="position-absolute left-minus-70px md-left-15px bottom-minus-50px w-55 overflow-hidden skrollable appear skrollable-between"
                data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)"
                data-anime="{ effect: slide, color: #ffffff, direction:lr, easing: easeOutQuad, duration: 600, delay:500}"
                style={{
                 
                  position: "relative",
                }}
              >
                <img
                  className="w-100 border-radius-4px"
                  data-cfsrc={AboutImage02}
                  alt="AboutImage02"
                  src={AboutImage02}
                  data-no-retina=""
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row position-relative">
            <div
              className="col swiper swiper-width-auto feather-shadow text-center swiper-initialized swiper-horizontal swiper-backface-hidden"
              data-slider-options="{ slidesPerView: auto, spaceBetween:0, centeredSlides: true, speed: 10000, loop: true, pagination: { el: .slider-four-slide-pagination-2, clickable: false }, allowTouchMove: false, autoplay: { delay:1, disableOnInteraction: false }, navigation: { nextEl: .slider-four-slide-next-2, prevEl: .slider-four-slide-prev-2 }, keyboard: { enabled: true, onlyInViewport: true }, effect: slide }"
            >
              <div
                className="swiper-wrapper marquee-slide"
                style={
                  {
                    // transitionDuration: "100000ms",
                    // transform: "translate3d(-3673.13px, 0px, 0px)",
                  }
                }
                id="swiper-wrapper-2dd69b11944009e7"
                aria-live="off"
              >
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 8"
                  data-swiper-slide-index="4"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Your dreams, our mission—a symphony of joy
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 8"
                  data-swiper-slide-index="5"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Unforgettable journeys, timeless memories
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="7 / 8"
                  data-swiper-slide-index="6"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Accessible luxury, revealing Sri Lanka's wonders
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="8 / 8"
                  data-swiper-slide-index="7"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Preserving beauty, forging legacies
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="1 / 8"
                  data-swiper-slide-index="0"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Your dreams, our mission—a symphony of joy
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  role="group"
                  aria-label="2 / 8"
                  data-swiper-slide-index="1"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Unforgettable journeys, timeless memories
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="3 / 8"
                  data-swiper-slide-index="2"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Accessible luxury, revealing Sri Lanka's wonders
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="4 / 8"
                  data-swiper-slide-index="3"
                >
                  <div className="fs-28 sm-fs-22 alt-font ls-minus-05px text-dark-gray">
                    <span className="w-10px h-10px border border-radius-100 border-color-base-color d-inline-block ms-50px me-50px md-ms-30px md-me-30px"></span>
                    Preserving beauty, forging legacies
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

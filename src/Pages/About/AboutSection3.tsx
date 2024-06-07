import React from "react";
import { Row, Col } from "antd";
import VerticalCenterLineBg from "../../Assets/img/vertical-center-line-bg.svg";
import AboutUsImg01 from "../../Assets/img/vibes-lanka-about-section-3-img-1.png";
import AboutUsImg02 from "../../Assets/img/vibes-lanka-about-section-3-img-2.png";
import AboutUsImg03 from "../../Assets/img/vibes-lanka-about-section-3-img-3.png";
import AboutUsImg04 from "../../Assets/img/vibes-lanka-about-section-3-img-4.png";

import "./AboutSection3.css";

const AboutSection3 = () => {
  return (
    <section
      className="background-position-center background-repeat"
      style={{ backgroundImage: `url(${VerticalCenterLineBg})` }}
    >
      <div className="about-section-3-container">
        <Row
          justify="center"
          className="about-section-3-row justify-content-center mb-6 xs-mb-9"
        >
          <Col
            md={24}
            className="col-md-8 text-center appear anime-child anime-complete"
          >
            <h2 className="alt-font mb-5px text-dark-gray ls-minus-2px">
              Why choose us
            </h2>
            <span className="d-inline-block fs-20">
              Many incredible reasons to stay with us
            </span>
          </Col>
        </Row>

        <Row
          gutter={[16, 16]}
          justify="center"
          className="about-section-3-row about-section-3-row-cols-1 about-section-3-row-cols-lg-3 about-section-3-row-cols-md-2 justify-content-center mb-5 xs-mb-8"
        >
          <Col
            xs={24}
            md={12}
            lg={8}
            xl={8}
            className="appear skrollable appear skrollable-between"
            data-bottom-top="transform: translateY(50px)"
            data-top-bottom="transform: translateY(-50px)"
          >
            <div className="services-box-style-01 hover-box md-mb-30px">
              <div className="position-relative box-image border-radius-6px">
                <img
                  className="w-100"
                  src={AboutUsImg01}
                  alt="Luxury Vehicles"
                />
              </div>
              <div className="p-30px last-paragraph-no-margin text-center">
                <span className="d-inline-block fs-22 alt-font ls-minus-05px text-dark-gray">
                  Luxury Vehicles
                </span>
                <p className="fs-17">
                  Travel in style and comfort with our fleet of premium
                  vehicles.{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col
            xs={24}
            md={12}
            lg={8}
            xl={8}
            // className="skrollable skrollable-before"
            data-bottom-top="transform: translateY(-40px)"
            data-top-bottom="transform: translateY(40px)"
          >
            <div className="services-box-style-01 hover-box md-mb-30px">
              <div className="position-relative box-image border-radius-6px">
                <img
                  className="w-100"
                  src={AboutUsImg02}
                  alt="Luxury Apartments"
                />
              </div>
              <div className="p-30px last-paragraph-no-margin text-center">
                <span className="d-inline-block fs-22 alt-font ls-minus-05px text-dark-gray">
                  Luxury Apartments
                </span>
                <p className="fs-17">
                  Enjoy the comfort of home with our exquisite apartments
                  located in Colombo 06.
                </p>
              </div>
            </div>
          </Col>

          <Col
            xs={24}
            md={12}
            lg={8}
            xl={8}
            // className="skrollable skrollable-before"
            data-bottom-top="transform: translateY(-40px)"
            data-top-bottom="transform: translateY(40px)"
          >
            <div className="services-box-style-01 hover-box md-mb-30px">
              <div className="position-relative box-image border-radius-6px">
                <img
                  className="w-100"
                  src={AboutUsImg03}
                  alt="Luxury Apartments"
                />
              </div>
              <div className="p-30px last-paragraph-no-margin text-center">
                <span className="d-inline-block fs-22 alt-font ls-minus-05px text-dark-gray">
                  Travel Packages
                </span>
                <p className="fs-17">
                  We offer a variety of travel packages to suit different
                  interests and budgets.
                </p>
              </div>
            </div>
          </Col>

          <Col
            xs={24}
            md={12}
            lg={8}
            xl={8}
            // className="skrollable skrollable-before"
            data-bottom-top="transform: translateY(-40px)"
            data-top-bottom="transform: translateY(40px)"
          >
            <div className="services-box-style-01 hover-box md-mb-30px">
              <div className="position-relative box-image border-radius-6px">
                <img
                  className="w-100"
                  src={AboutUsImg04}
                  alt="Luxuru Travels"
                />
              </div>
              <div className="p-30px last-paragraph-no-margin text-center">
                <span className="d-inline-block fs-22 alt-font ls-minus-05px text-dark-gray">
                  Luxuru Travels
                </span>
                <p className="fs-17">
                  Experience the best of Sri Lanka with our meticulously crafted
                  travel packages.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row gutter={[16, 16]} justify="center" className="text-center">
          <Col xs={12} sm={6}>
            <div className="client-box">
              <a href="d.html">
                <img
                  src={AboutUsClientImg01}
                  className="h-55px"
                  alt="Client 1"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="client-box">
              <a href="d.html">
                <img
                  src={AboutUsClientImg02}
                  className="h-55px"
                  alt="Client 2"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="client-box">
              <a href="d.html">
                <img
                  src={AboutUsClientImg03}
                  className="h-55px"
                  alt="Client 3"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="client-box">
              <a href="d.html">
                <img
                  src={AboutUsClientImg04}
                  className="h-55px"
                  alt="Client 4"
                />
              </a>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
};

export default AboutSection3;

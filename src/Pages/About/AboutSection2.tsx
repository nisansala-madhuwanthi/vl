import React from "react";
import AboutUsCoverImg from "../../Assets/img/demo-hotel-and-resort-about-us-04.jpg";

import "./AboutSection2.css";
import { Row, Col, Carousel } from "antd";

const images = [
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-1.jpg"),
    alt: "Image 1",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-2.jpg"),
    alt: "Image 2",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-3.jpg"),
    alt: "Image 3",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-11.jpg"),
    alt: "Image 4",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-5.jpg"),
    alt: "Image 5",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-6.jpg"),
    alt: "Image 6",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-12.jpg"),
    alt: "Image 7",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-8.jpg"),
    alt: "Image 8",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-9.jpg"),
    alt: "Image 9",
  },
  {
    img: require("../../Assets/img/vibes-lanka-about-section-2-img-10.jpg"),
    alt: "Image 10",
  },
];

const AboutSection2 = () => {
  return (
    <>
      <section
        className="cover-background position-relative overflow-visible"
        style={{
          backgroundImage: `url(${AboutUsCoverImg})`,
          // marginTop: '100px'
        }}
      >
        <div className="container">
          <Row
            justify="center"
            className="row align-items-center overlap-section mb-1"
            // style={{ marginTop: "-287px" }}
          >
            <Col xl={22} className="appear anime-complete">
              <Carousel autoplay>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.img}
                      alt={image.alt}
                      style={{
                        height: "auto",
                        width: "100%",
                        borderRadius: "4px",
                      }}
                      className="border-radius-6px md-h-350px sm-h-250px"
                    />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>

          <Row justify="center">
            <Col md={24} lg={24} xl={24} className="text-center">
              <div className="appear anime-child anime-complete">
                <h2 className="alt-font mt-4 text-dark-gray mb-4 xs-mb-30px w-90 xl-w-100 mx-auto">
                  With our extensive local knowledge and personalized service,
                  we ensure that every aspect of your trip is seamless and
                  memorable.
                </h2>
                {/* <Row gutter={[16, 16]} justify="center">
                  <Col xs={24} sm={8} className="xs-mb-30px">
                    <div className="fs-65 text-dark-gray mb-0 fw-700">248</div>
                    <span className="fs-19 fw-500 text-dark-gray">
                      Our room
                    </span>
                  </Col>
                  <Col xs={24} sm={8} className="xs-mb-30px">
                    <div className="fs-65 text-dark-gray mb-0 fw-700">146</div>
                    <span className="fs-19 fw-500 text-dark-gray">
                      Trained staff
                    </span>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className="fs-65 text-dark-gray mb-0 fw-700">89%</div>
                    <span className="fs-19 fw-500 text-dark-gray">
                      Good feedbacks
                    </span>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutSection2;

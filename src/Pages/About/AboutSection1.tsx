import React from "react";
import VerticalCenterLineBg from "../../Assets/img/vertical-center-line-bg.svg";
import { Row, Col } from "antd";
import "./About.css";

const AboutSection1 = () => {
  return (
    <>
      <section
        className="background-position-center background-repeat overlap-height pb-5"
        style={{
          backgroundImage: `url(${VerticalCenterLineBg})`,
          // height: "420.172px",
        }}
      >
        <div className="container overlap-gap-section">
          <Row gutter={[16, 16]} className="row">
            <Col
              md={24}
              sm={24}
              className="col-md-6 sm-mb-25px appear anime-child anime-complete"
            >
              <h4 className="mb-15px text-base-color fw-500 d-block">
                Fabulous experience
              </h4>
              <h3 className="alt-font text-dark-gray ls-minus-2px w-90 sm-w-100 mb-0">
                The best people to take care of our most valuable asset is you.
              </h3>
            </Col>
            <Col
              xl={5}
              md={24}
              className="col-xl-5 col-md-6 offset-xl-1 last-paragraph-no-margin appear anime-child anime-complete"
            >
              <h6 className="alt-font fs-24 text-dark-gray mb-10px">
                Embark on a Journey of Classic Elegance with a Modern Twist!
              </h6>
              <p className="fs-17 w-90 lg-w-100">
                At Vibes Lanka Travels and Tours, we offer the perfect fusion of
                timeless tradition and sumptuous contemporary taste. Delight in
                opulent leisure, entertainment, and rejuvenation for you and
                your family.
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutSection1;

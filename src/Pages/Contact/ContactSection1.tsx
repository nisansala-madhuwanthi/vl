import React from "react";
import "./ContactSection1.css";
import VerticalCenterLineBg from "../../Assets/img/vertical-center-line-bg.svg";
import { Col, Row } from "antd";

const ContactSection1 = () => {
  return (
    <>
      <section
        className="contact-background-position-center contact-background-repeat"
        style={{ backgroundImage: `url(${VerticalCenterLineBg})` }}
      >
        <div className="contact-container">
          <Row
            gutter={[16, 32]}
            justify="center"
            align="middle"
            className=" row-cols-1 row-cols-md-3 appear anime-child anime-complete"
            data-anime="{ el: childs, translateX: [30, 0], opacity: [0,1], duration: 600, delay: 0, staggervalue: 300, easing: easeOutQuad }"
          >
            <Col
              xs={24}
              md={8}
              className="col contact-last-paragraph-no-margin sm-mb-30px"
            >
              <span className="d-block text-dark-gray fs-19 fw-600 contact-border-bottom contact-border-2 contact-border-color-dark-gray pb-10px mb-15px w-80 sm-w-100">
                In the day area
              </span>
              {/* <Divider className="contact-divider" /> */}
              <p className="w-100 primary-font">
                No 126, Galle Road
                <br />
                Colombo 06, Sri Lanka
              </p>
            </Col>
            <Col xs={24} md={8} className="col sm-mb-30px">
              <span className="d-block text-dark-gray fs-19 fw-600 contact-border-bottom contact-border-2 contact-border-color-dark-gray pb-10px mb-15px w-80 sm-w-100">
                Send a message
              </span>
              <div className="primary-font">
                <a href="mailto:info@vibeslanka.com">info@vibeslanka.com</a>
              </div>
              <div className="primary-font">
                <a href="mailto:vibeslankaofficial@gmail.com">
                  vibeslankaofficial@gmail.com
                </a>
              </div>
            </Col>
            <Col xs={24} md={8} className="col">
              <span className="d-block text-dark-gray fs-19 fw-600 contact-border-bottom contact-border-2 contact-border-color-dark-gray pb-10px mb-15px w-80 sm-w-100">
                Booking on call
              </span>
              <span className="d-block primary-font">
                Phone: <a href="https://wa.me/94767085151">+94 76 708 5151</a>
              </span>
              <span className="d-block primary-font">
                Phone: <a href="https://wa.me/94769936596">+94 76 993 6596</a>
              </span>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactSection1;

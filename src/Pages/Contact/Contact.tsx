import React from "react";
import "./Contact.css";
import ContactTitleImg from "../../Assets/img/vibes-lanka-contact-us-bg.jpg";
import { Row, Col, Typography } from "antd";
import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2";

const { Title } = Typography;

const Contact = () => {
  return (
    <>
      <section
        className="page-title-separate-breadcrumbs contact-cover-background contact-border-top contact-border-4 contact-border-color-base-color contact-top-space-margin magic-cursor round-cursor"
        style={{
          backgroundImage: `url(${ContactTitleImg})`,
          marginTop: "96px",
        }}
      >
        <div className="contact-opacity-full-dark contact-bg-gradient-dark-transparent"></div>
        <div className="contact-container position-relative">
          <Row
            align="bottom"
            justify="space-between"
            className="extra-small-screen appear anime-child anime-complete"
          >
            <Col
              xs={24}
              lg={12}
              className="contact-page-title-large position-relative md-mb-15px xs-mb-5px"
            >
              <Title
                level={1}
                className="text-white alt-font fw-500 ls-minus-2px mb-0"
                // style={{ color: 'white', marginBottom: 0, fontWeight: 500 }}
              >
                Contact Us
              </Title>
            </Col>
            <Col xs={24} lg={12} className="contact-last-paragraph-no-margin">
              <p
                className="fs-20 text-white opacity-7 md-w-80 sm-w-100"
                // style={{ color: 'white', opacity: 0.7, fontSize: 20 }}
              >
                Ready to start planning your dream vacation? Reach out to our
                friendly and knowledgeable team at Vibes Lanka Travels and Tours
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <ContactSection1 />
      <ContactSection2 />
    </>
  );
};

export default Contact;

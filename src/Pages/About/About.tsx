import React from "react";
import "./About.css";
import AboutUsTitleImg from "../../Assets/img/vibes-lanka-about-us.png";
import Review from "../HomeSection/Review/Review";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const About = () => {
  return (
    <>
      <section
        className="page-title-separate-breadcrumbs about-cover-background about-border-top about-border-4 about-border-color-base-color top-space-margin magic-cursor round-cursor"
        style={{
          backgroundImage: `url(${AboutUsTitleImg})`,
          marginTop: "96px",
        }}
      >
        <div className="about-opacity-full-dark about-bg-gradient-dark-transparent"></div>
        <div className="about-container position-relative">
          <Row
            align="bottom"
            justify="space-between"
            className="extra-small-screen appear anime-child anime-complete"
          >
            <Col
              xs={24}
              lg={12}
              className="about-page-title-large position-relative md-mb-15px xs-mb-5px"
            >
              <Title
                level={1}
                className="text-white alt-font fw-500 ls-minus-2px mb-0"
                // style={{ color: 'white', marginBottom: 0, fontWeight: 500 }}
              >
                About us
              </Title>
            </Col>
            <Col xs={24} lg={12} className="about-last-paragraph-no-margin">
              <p
                className="fs-20 text-white opacity-7 md-w-80 sm-w-100"
                // style={{ color: 'white', opacity: 0.7, fontSize: 20 }}
              >
                At Vibes Lanka, we are dedicated to offering our guests an
                unparalleled experience, combining relaxation with unforgettable
                memories.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <AboutSection1 />

      <AboutSection2 />

      <AboutSection3 />

      <Review />
    </>
  );
};

export default About;

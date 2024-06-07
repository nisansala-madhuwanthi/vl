import { Row, Col, Typography } from "antd";
import React from "react";
import "./Destination.css";
import DestinationTitleImg from "../../Assets/img/vibes-lanka-wander-vibes.png";
import DestinationSection1 from "./DestinationSection1";
import DestinationSection2 from "./DestinationSection2";
import DestinationSection3 from "./DestinationSection3";

const { Title } = Typography;

const Destination = () => {
  return (
    <>
      <section
        className="page-title-separate-breadcrumbs destination-cover-background destination-border-top destination-border-4 destination-border-color-base-color destination-top-space-margin magic-cursor round-cursor"
        style={{
          backgroundImage: `url(${DestinationTitleImg})`,
          marginTop: "96px",
        }}
      >
        <div className="destination-opacity-full-dark destination-bg-gradient-dark-transparent"></div>
        <div className="destination-container position-relative">
          <Row
            align="bottom"
            justify="space-between"
            className="extra-small-screen appear anime-child anime-complete"
          >
            <Col
              xs={24}
              lg={12}
              className="destination-page-title-large position-relative md-mb-15px xs-mb-5px"
            >
              <Title
                level={1}
                className="text-white alt-font fw-500 ls-minus-2px mb-0"
                // style={{ color: 'white', marginBottom: 0, fontWeight: 500 }}
              >
                Wander Vibes
              </Title>
            </Col>
            <Col
              xs={24}
              lg={12}
              className="destination-last-paragraph-no-margin"
            >
              <p
                className="fs-20 text-white opacity-7 md-w-80 sm-w-100"
                // style={{ color: 'white', opacity: 0.7, fontSize: 20 }}
              >
                Explore breathtaking destinations, immerse yourself in diverse
                cultures, and create unforgettable memories.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <DestinationSection1 />
      <DestinationSection2 />
      <DestinationSection3 />
    </>
  );
};

export default Destination;

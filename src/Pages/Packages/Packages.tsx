import React from "react";
import "./Packages.css";
import PackagesTitleImg from "../../Assets/img/vibes-lanka-packages.png";
import { Row, Col, Typography } from "antd";
import PackagesSection1 from "./PackagesSection1";
import Packagessection2 from "./Packagessection2";

const { Title } = Typography;

const Packages = () => {
  return (
    <>
      <section
        className="page-title-separate-breadcrumbs packages-cover-background packages-border-top packages-border-4 packages-border-color-base-color top-space-margin magic-cursor round-cursor"
        style={{
          backgroundImage: `url(${PackagesTitleImg})`,
          marginTop: "96px",
        }}
      >
        <div className="packages-opacity-full-dark packages-bg-gradient-dark-transparent"></div>
        <div className="packages-container position-relative">
          <Row
            align="bottom"
            justify="space-between"
            className="extra-small-screen appear anime-child anime-complete"
          >
            <Col
              xs={24}
              lg={12}
              className="packages-page-title-large position-relative md-mb-15px xs-mb-5px"
            >
              <Title
                level={1}
                className="text-white alt-font fw-500 ls-minus-2px mb-0"
                // style={{ color: 'white', marginBottom: 0, fontWeight: 500 }}
              >
                Vibe Packages
              </Title>
            </Col>
            <Col xs={24} lg={12} className="packages-last-paragraph-no-margin">
              <p
                className="fs-20 text-white opacity-7 md-w-80 sm-w-100"
                // style={{ color: 'white', opacity: 0.7, fontSize: 20 }}
              >
                We are happy to offer our guests a truly fabulous experience of
                a relaxing and memorable.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <PackagesSection1 />
      <Packagessection2 />
    </>
  );
};

export default Packages;

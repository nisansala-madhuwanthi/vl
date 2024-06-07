import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Image } from "antd";
import LineBgDark from "../../../Assets/img/vertical-center-line-bg-dark.svg";
import FacilityImage1 from "../../../Assets/img/vibes-lanka-personalized service.png";
import FacilityImage3 from "../../../Assets/img/vibes-lanka-modern-amenties.jpg";
import FacilityImage5 from "../../../Assets/img/vibes-lanka-diverse-travel-packages.png";
import FacilityImage2 from "../../../Assets/img/vibes-lanka-comfort-vehicles.jpg";
import FacilityImage4 from "../../../Assets/img/vibes-lanka-wellness-retreat.png";
import FacilityImage6 from "../../../Assets/img/vibes-lanka-customer-support.png";
import "./Facility.css";
import skrollr from "skrollr";

const { Paragraph } = Typography;

const Facility = () => {
  const [isSkrollable, setIsSkrollable] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    if (isSkrollable) {
      const skrollrInstance = skrollr.init();
      return () => skrollrInstance.destroy();
    }
  }, [isSkrollable]);

  useEffect(() => {
    const handleResize = () => {
      setIsSkrollable(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="bg-very-light-gray overlap-height position-relative background-position-center background-repeat"
      style={{ backgroundImage: `url(${LineBgDark})`, height: "auto" }}
    >
      <div className=" overlap-gap-section">
        <Row justify="center" className="justify-content-center mb-5 xs-mb-7">
          <Col span={24} className="col-md-8 text-center">
            <h2 className="alt-font mb-5px text-dark-gray ls-minus-2px">
              Awesome facilities
            </h2>
            <span className="d-inline-block fs-20">
              Our company has been present for over 28 years.
            </span>
          </Col>
        </Row>

        <Row
          gutter={[4, 4]}
          justify="center"
          className="facility-row-cols-lg-3 facility-row-cols-md-2 justify-content-center"
        >
          {facilityData.map((facility, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={8}
              className={`text-center rotate-box-style-01 lg-mb-45px ${
                isSkrollable ? "skrollable" : ""
              }`}
              data-bottom-top="transform: translateY(40px)"
              data-top-bottom="transform: translateY(-40px)"
            >
              <FacilityCard {...facility} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

const FacilityCard = ({ image, alt, title, content, icon }) => {
  return (
    <div className="rm-rotate-box text-center">
      <div className="flipper to-left">
        <div className="thumb-wrap">
          <Image
            className="front overflow-hidden h-250px md-h-250px border-radius-4px overflow-hidden"
            src={image}
            alt={alt}
            preview={false}
          />
          <div className="back border-radius-4px overflow-hidden">
            <div className="box-overlay bg-base-color"></div>
            <div className="content-wrap p-40px xs-p-30px last-paragraph-no-margin">
              <i
                className={`${icon}  align-middle icon-extra-large text-white mb-20px`}
              ></i>
              <Paragraph className="text-white primary-font fs-17 opacity-7 lh-30 sm-w-70 xs-w-100 mx-auto">
                {content}
              </Paragraph>
            </div>
          </div>
        </div>
        <span className="fs-20 d-inline-block mt-30px fw-600 text-dark-gray">
          {title}
        </span>
      </div>
    </div>
  );
};

const facilityData = [
  {
    image: FacilityImage1,
    alt: "FacilityImage1",
    title: "Personalized Services",
    content: "Enjoy unmatched luxury and comfort in every journey.",
    icon: "fas fa-plane-arrival",
  },
  {
    image: FacilityImage2,
    alt: "FacilityImage2",
    title: "Comfort Vehicles",
    content: "Travel smoothly in our premium vehicles.",
    icon: "fas fa-taxi",
  },
  {
    image: FacilityImage3,
    alt: "FacilityImage3",
    title: "Modern Amenties",
    content: "Experience top-tier modern conveniences.",
    icon: "fas fa-hotel",
  },
  {
    image: FacilityImage4,
    alt: "FacilityImage4",
    title: "Wellness Retreats",
    content: "Rejuvenate with our serene wellness retreats.",
    icon: "fas fa-spa",
  },
  {
    image: FacilityImage5,
    alt: "FacilityImage5",
    title: "Diverse Travel Packages",
    content: "Find the perfect trip with our varied packages.",
    icon: "fas fa-globe",
  },
  {
    image: FacilityImage6,
    alt: "FacilityImage6",
    title: "24/7 Customer Support",
    content: "Get help anytime with our round-the-clock support.",
    icon: "fas fa-headset",
  },
];

export default Facility;

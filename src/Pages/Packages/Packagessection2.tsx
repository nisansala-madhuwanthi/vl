import React from "react";
import "./PackagesSection2.css";
import VerticalCenterLineBg from "../../Assets/img/vertical-center-line-bg.svg";
import PackagesImg01 from "../../Assets/img/honeymoon-1.png";
import PackagesImg02 from "../../Assets/img/honeymoon-2.png";
import PackagesImg03 from "../../Assets/img/honeymoon-3.png";
import PackagesImg04 from "../../Assets/img/romantic-1.png";
import PackagesImg05 from "../../Assets/img/romantic-2.png";
import PackagesImg06 from "../../Assets/img/romantic-3.png";
import PackagesImg07 from "../../Assets/img/family-1.png";
import PackagesImg08 from "../../Assets/img/family-2.png";
import PackagesImg09 from "../../Assets/img/family-3.png";
import PackagesImg10 from "../../Assets/img/spiritual-1.png";
import PackagesImg11 from "../../Assets/img/spiritual-2.png";
import PackagesImg12 from "../../Assets/img/spiritual-3.png";
import PackagesImg13 from "../../Assets/img/customize-2.png";
import PackagesImg14 from "../../Assets/img/customize-1.png";
import PackagesImg15 from "../../Assets/img/customize-3.png";
import { Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const PackagesSection2 = () => {
  const packagesData = [
    {
      id: "Honeymoon",
      title: "Honeymoon Vibes",
      subtitle: "Phenomenal vibe",
      description:
        "Celebrate your love with a romantic journey through Sri Lanka. This 7-day honeymoon package offers an enchanting blend of natural beauty, cultural heritage, and intimate experiences, designed to create unforgettable memories for newlyweds.",
      price: 1450,
      images: [PackagesImg01, PackagesImg02, PackagesImg03],
      days: "6N & 7D",
    },
    {
      id: "Romantic",
      title: "Romantic Vibes",
      subtitle: "Unforgettable experience",
      description:
        "Immerse in the romance of Sri Lanka with a carefully curated 7-day tour. This package blends adventure, culture, and relaxation, making it perfect for couples seeking a memorable getaway filled with unique experiences and intimate moments.",
      price: 2700,
      images: [PackagesImg04, PackagesImg05, PackagesImg06],
      days: "6N & 7D",
    },
    {
      id: "Family",
      title: "Family Vibes",
      subtitle: "Fun for all ages",
      description:
        "Join us for a 13-day family adventure in Sri Lanka, packed with activities for all ages. Explore serene beaches, historic sites, and cultural landmarks, offering a perfect blend of excitement, learning, and relaxation for the whole family.",
      price: 6400,
      images: [PackagesImg07, PackagesImg08, PackagesImg09],
      days: "12N & 13D",
    },
    {
      id: "Spiritual",
      title: "Spiritual Vibes",
      subtitle: "Soulful journey",
      description:
        "Experience the spiritual essence of Sri Lanka with this 7-day tour, designed to take you through the country’s most sacred and serene locations. From ancient temples to serene beaches, this package offers a perfect blend of spirituality, culture, and natural beauty.",
      price: 1050,
      images: [PackagesImg10, PackagesImg11, PackagesImg12],
      days: "6N & 7D",
    },
    {
      id: "Customized",
      title: "Customized Vibes",
      subtitle: "Your unique adventure",
      description:
        "Tailor your perfect getaway with our Customized Vibes package. Enjoy the flexibility to create a unique itinerary that suits your preferences and interests, ensuring an unforgettable journey tailored just for you.",
      price: "XXXX",
      images: [PackagesImg13, PackagesImg14, PackagesImg15],
      days: "Flexible Duration",
    },
  ];

  return (
    <section
      className="background-position-center background-repeat"
      style={{ backgroundImage: `url(${VerticalCenterLineBg})` }}
    >
      <div className="container pb-5">
        {packagesData.map((pkg, index) => (
          <Row
            key={pkg.id}
            className={` g-0 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            } mb-8 justify-content-center border-radius-6px overflow-hidden mb-8`}
            justify="center"
          >
            <Col
              xs={24}
              lg={12}
              xl={12}
              className="col-xl-7 col-lg-7 md-h-400px sm-h-300px text-center "
            >
              <Carousel
                autoplay
                arrows
                prevArrow={<LeftOutlined className="text-white" />}
                nextArrow={<RightOutlined className="text-white" />}
              >
                {pkg.images.map((image, idx) => (
                  <div key={idx} className="carousel-image">
                    <img src={image} alt="carousel" />
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col
              xs={24}
              lg={12}
              xl={12}
              className="col-xl-5 col-lg-5 bg-very-light-gray"
            >
              <div className="pt-13 pb-12 ps-15 pe-15 lg-p-8 last-paragraph-no-margin">
                <span className="text-base-color fw-500 d-block">
                  {pkg.subtitle}
                </span>
                {/* <a href="/"> */}
                <h4 className="alt-font text-dark-gray mb-20px ls-minus-1px d-inline-block">
                  {pkg.title}
                </h4>
                {/* </a> */}
                <p className="fs-17 pb-2">{pkg.description}</p>
                <div className="pt-0 pb-0 lg-ps-8 lg-pe-8 border-top border-color-transparent-dark-very-light align-items-center d-flex">
                  {/* <h4 className="mb-0 fw-700 text-dark-gray">${pkg.price}</h4> */}
                  <h5 className="mb-2 fw-700 text-dark-gray">{pkg.days}</h5>
                  <h5 className="fs-16 fw-500 ps-8">${pkg.price}</h5>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection2;

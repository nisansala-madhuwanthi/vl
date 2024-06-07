import React, { useEffect } from "react";
import { Carousel, Row, Col, Typography, Image, Rate, Divider } from "antd";
import LineBgDark from "../../../Assets/img/vertical-center-line-bg-dark.svg";
import ReviewAvatar1 from "../../../Assets/img/vibes-lanka-avatar-1.jpg";
import ReviewAvatar2 from "../../../Assets/img/avtar-27.jpg";
import ReviewAvatar3 from "../../../Assets/img/avtar-29.jpg";
import ImageClient from "../../../Assets/img/demo-hotel-and-resort-client-01.svg";

const { Title, Text } = Typography;

const reviews = [
  {
    avatar: ReviewAvatar1,
    name: "Kajany",
    review:
      "The Vibes Sri Lanka trip and experience was totally amazing!! My family and I thoroughly enjoyed each and every day of this trip thanks to Vibes Sri Lanka. The long drives in the comfortable and relaxing seats make it worth it and the service is 10/10. I definitely recommend anyone looking to go with a tour guide, planner and driver to book Vibes Sri Lanka. You will not be disappointed 🤩😎☀️🚐🔥",
  },
  {
    avatar: ReviewAvatar3,
    name: "Pradheepan Manohara",
    review:
      "During my recent Srilanka visit my entire trip was taken care by Vibes Srilanka (Sudha and Ruben)! The entire stay, the travel was simply awesome!! Excellent tour operators and I strongly recommend them. They cost less and the service is excellent!! They managed and co-ordinated 25+ our family members. Made this trip super memorable for all of us",
  },
  {
    avatar: ReviewAvatar2,
    name: "Laura Ghirardelli",
    review:
      "During my trip in Sri Lanka I used this agency for a transfer. Agency people were very kind, helpful and the service was wonderful with a big and very confortable van.",
  },
];

const Review = () => {
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleSlidesOnly"
    );
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 10000,
        ride: "carousel",
        pause: "hover",
        wrap: true,
      });
    }
  }, []);

  return (
    <section
      className="background-position-center background-repeat overlap-height position-relative"
      style={{
        backgroundImage: `url(${LineBgDark})`,
        // padding: '50px 100px',
        marginBottom: "150px",
      }}
    >
      <div className="container">
        <Row justify="center" style={{ marginBottom: "50px" }}>
          <Col md={16} style={{ textAlign: "center" }}>
            <h2 className="alt-font mb-5px text-dark-gray ls-minus-2px">
              Exclusive ratings
            </h2>
            <span className="d-inline-block fs-20">
              Enjoy in vibe tours and awesome ratings.
            </span>
          </Col>
        </Row>

        <Carousel autoplay>
          {reviews.map((review, index) => (
            <div key={index}>
              <Row justify="center" style={{ marginBottom: "50px" }}>
                <Col
                  md={24}
                  style={{
                    background: "#F5F5F5",
                    borderRadius: "6px",
                    boxShadow: "0px 3px 0px rgba(0,0,0,0.3)",
                    padding: "40px 50px",
                    textAlign: "center",
                    width: "500px",
                    height: "auto",
                    margin: "5px",
                  }}
                >
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      marginBottom: "20px",
                    }}
                    preview={false}
                  />

                  <Text
                    style={{ display: "block", marginBottom: "30px" }}
                    className="primary-font fs-17 text-medium-gray"
                  >
                    {review.review}
                  </Text>
                  <Divider />
                  <Title level={5} style={{ marginBottom: "10px" }}>
                    {review.name}
                  </Title>
                  <Rate disabled defaultValue={5} />
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>

        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <div style={{ textAlign: "center" }}>
              <Text
                className="fw-500"
                style={{ fontSize: "24px", color: "#333" }}
              >
                Check all <strong> </strong>exclusive visitor reviews on
              </Text>
              <a
                href="https://www.tripadvisor.com/"
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                <Image
                  src={ImageClient}
                  style={{ height: "60px", verticalAlign: "middle" }}
                  alt="Client Reviews"
                  preview={false}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Review;

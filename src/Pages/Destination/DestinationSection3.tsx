import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import DesImg01 from "../../Assets/img/DesImg01.jpg";
import DesImg02 from "../../Assets/img/DesImg02.jpg";
import DesImg03 from "../../Assets/img/DesImg03.jpg";
import DesImg04 from "../../Assets/img/DesImg04.jpg";
import DesImg05 from "../../Assets/img/DesImg05.jpg";
import DesImg06 from "../../Assets/img/DesImg06.png";
import DesImg07 from "../../Assets/img/DesImg07.jpg";
import DesImg08 from "../../Assets/img/DesImg08.jpg";
import DesImg09 from "../../Assets/img/DesImg09.jpg";
import DesImg10 from "../../Assets/img/DesImg10.jpg";
import DesImg11 from "../../Assets/img/DesImg11.jpg";
import DesImg12 from "../../Assets/img/DesImg12.jpg";
import DesImg13 from "../../Assets/img/DesImg13.jpg";
import DesImg14 from "../../Assets/img/DesImg14.jpg";
import DesImg15 from "../../Assets/img/DesImg15.jpg";
import DesImg16 from "../../Assets/img/DesImg16.jpg";
import DesImg17 from "../../Assets/img/DesImg17.jpg";
import DesImg18 from "../../Assets/img/DesImg18.jpg";
import DesImg19 from "../../Assets/img/DesImg19.jpg";
import DesImg20 from "../../Assets/img/DesImg20.jpg";
import DesImg21 from "../../Assets/img/DesImg21.jpg";
import DesImg22 from "../../Assets/img/DesImg22.jpg";
import DesImg23 from "../../Assets/img/DesImg23.jpg";
import DesImg24 from "../../Assets/img/DesImg24.jpg";
import DesImg25 from "../../Assets/img/DesImg25.jpg";
import DesImg26 from "../../Assets/img/DesImg26.jpg";
import DesImg27 from "../../Assets/img/DesImg27.jpg";
import DesImg28 from "../../Assets/img/DesImg28.jpg";
import DesImg29 from "../../Assets/img/DesImg29.jpg";
import DesImg30 from "../../Assets/img/DesImg30.jpg";
import DesImg31 from "../../Assets/img/DesImg31.jpg";
import DesImg32 from "../../Assets/img/DesImg32.jpg";
import DesImg33 from "../../Assets/img/DesImg33.jpg";
import DesImg34 from "../../Assets/img/DesImg34.jpg";
import DesImg35 from "../../Assets/img/DesImg35.jpg";
import DesImg36 from "../../Assets/img/DesImg36.jpg";

import "./DestinationSection3.css";

interface Activity {
  title: string;
  img: string;
  alt: string;
}

const activities: Activity[] = [
  {
    title: "Attend a traditional dance performance in Kandy",
    img: DesImg01,
    alt: "Attend a traditional dance performance in Kandy",
  },
  {
    title: "Climb Adam's Peak for a stunning sunrise",
    img: DesImg02,
    alt: "Climb Adam's Peak for a stunning sunrise",
  },
  {
    title: "Discover the ancient ruins of Polonnaruwa and Anuradhapura",
    img: DesImg03,
    alt: "Discover the ancient ruins of Polonnaruwa and Anuradhapura",
  },
  {
    title: "Discover the beauty of Pigeon Island National Park in Trincomalee",
    img: DesImg04,
    alt: "Discover the beauty of Pigeon Island National Park in Trincomalee",
  },
  {
    title: "Discover the colonial architecture in Nuwara Eliya",
    img: DesImg05,
    alt: "Discover the colonial architecture in Nuwara Eliya",
  },
  {
    title: "Discover the Dhowa Rock Temple near Bandarawela",
    img: DesImg06,
    alt: "Discover the Dhowa Rock Temple near Bandarawela",
  },
  {
    title: "Discover the mysterious caves in Belilena",
    img: DesImg07,
    alt: "Discover the mysterious caves in Belilena",
  },
  {
    title: "Explore the bird sanctuary in Kumana National Park",
    img: DesImg08,
    alt: "Explore the bird sanctuary in Kumana National Park",
  },
  {
    title: "Engage in water activities at Arugam Bay, a surfer's paradise",
    img: DesImg09,
    alt: "Engage in water activities at Arugam Bay, a surfer's paradise",
  },
  {
    title: "Engage in water sports in Bentota",
    img: DesImg10,
    alt: "Engage in water sports in Bentota",
  },
  {
    title: "Enjoy a relaxing Ayurvedic spa treatment",
    img: DesImg11,
    alt: "Enjoy a relaxing Ayurvedic spa treatment",
  },
  {
    title: "Enjoy a scenic train ride through the hills",
    img: DesImg12,
    alt: "Enjoy a scenic train ride through the hills",
  },
  {
    title: "Experience the cultural richness of Jaffna",
    img: DesImg13,
    alt: "Experience the cultural richness of Jaffna",
  },
  {
    title: "Experience the cultural show in Kandy",
    img: DesImg14,
    alt: "Experience the cultural show in Kandy",
  },
  {
    title: "Explore the ancient city of Sigiriya",
    img: DesImg15,
    alt: "Explore the ancient city of Sigiriya",
  },
  {
    title: "Engage in bird watching at Bundala National Park",
    img: DesImg16,
    alt: "Engage in bird watching at Bundala National Park",
  },
  {
    title: "Explore the rural countryside on a bike tour in Habarana",
    img: DesImg17,
    alt: "Explore the rural countryside on a bike tour in Habarana",
  },
  {
    title: "Explore the traditional fishing village of Negombo",
    img: DesImg18,
    alt: "Explore the traditional fishing village of Negombo",
  },
  {
    title: "Explore the vibrant markets of Colombo",
    img: DesImg19,
    alt: "Explore the vibrant markets of Colombo",
  },
  {
    title: "Go on a pilgrimage to the sacred city of Kataragama",
    img: DesImg20,
    alt: "Go on a pilgrimage to the sacred city of Kataragama",
  },
  {
    title: "Go on a tea plantation tour in Ella",
    img: DesImg21,
    alt: "Go on a tea plantation tour in Ella",
  },
  {
    title: "Hike to World's End in Horton Plains",
    img: DesImg22,
    alt: "Hike to World's End in Horton Plains",
  },
  {
    title: "Relax on the beautiful beaches of Mirissa and Unawatuna",
    img: DesImg23,
    alt: "Relax on the beautiful beaches of Mirissa and Unawatuna",
  },
  {
    title: "Take a boat ride in Madu River",
    img: DesImg24,
    alt: "Take a boat ride in Madu River",
  },
  {
    title: "Take a boat safari on the Kalu Ganga",
    img: DesImg25,
    alt: "Take a boat safari on the Kalu Ganga",
  },
  {
    title: "Take a boat tour in the scenic Koggala Lake",
    img: DesImg26,
    alt: "Take a boat tour in the scenic Koggala Lake",
  },
  {
    title: "Take a dip in the natural pools of Bambarakanda Falls",
    img: DesImg27,
    alt: "Take a dip in the natural pools of Bambarakanda Falls",
  },
  {
    title: "Take a safari in Yala National Park",
    img: DesImg28,
    alt: "Take a safari in Yala National Park",
  },
  {
    title: "Take a ZipLine ride in Ella",
    img: DesImg29,
    alt: "Take a ZipLine ride in Ella",
  },
  {
    title: "Visit the ancient stupa of Mihintale for panoramic views",
    img: DesImg30,
    alt: "Visit the ancient stupa of Mihintale for panoramic views",
  },
  {
    title: "Visit the Dambulla Cave Temple",
    img: DesImg31,
    alt: "Visit the Dambulla Cave Temple",
  },
  {
    title: "Visit the historic Dutch Fort in Matara",
    img: DesImg32,
    alt: "Visit the historic Dutch Fort in Matara",
  },
  {
    title: "Visit the Royal Botanical Gardens in Peradeniya",
    img: DesImg33,
    alt: "Visit the Royal Botanical Gardens in Peradeniya",
  },
  {
    title: "Visit the Temple of the Tooth in Kandy",
    img: DesImg34,
    alt: "Visit the Temple of the Tooth in Kandy",
  },
  {
    title: "Wander through the historic city of Galle",
    img: DesImg35,
    alt: "Wander through the historic city of Galle",
  },
  {
    title: "Whale watching in Mirissa",
    img: DesImg36,
    alt: "Whale watching in Mirissa",
  },
];

const DestinationSection3 = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number): void => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  return (
    <section className="bg-very-light-gray" style={{ marginBottom: "150px" }}>
      <div className="container">
        <h2
          className="alt-font mb-5px text-center mb-40px text-dark-gray ls-minus-2px"
          // style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          Things to do in Sri Lanka
        </h2>

        <Row gutter={[16, 16]}>
          {activities.map((activity, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <div
                className="card-container"
                onClick={() => handleCardClick(index)}
              >
                <Card
                  hoverable
                  style={{
                    cursor: "pointer",
                    height: selectedCard === index ? "300px" : "100px",
                    position: "relative",
                    overflow: "hidden",
                    transform:
                      selectedCard === index ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                >
                  <span className="primary-font text-medium-gray fs-15">
                    {activity.title}
                    <ArrowRightOutlined
                      style={{ marginLeft: "10px" }}
                      className="fs-12"
                    />
                  </span>
                  {selectedCard === index && (
                    <div className="overlay">
                      <img
                        src={activity.img}
                        alt={activity.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          borderRadius: "10px",
                          opacity: 1,
                          padding: "20px",
                        }}
                      />
                    </div>
                  )}
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default DestinationSection3;

import React from "react";
import LineBg from "../../Assets/img/vertical-center-line-bg.svg";

import DestinationImg01 from "../../Assets/img/colombo.png";
import DestinationImg02 from "../../Assets/img/kandy.png";
import DestinationImg03 from "../../Assets/img/galle.png";
import DestinationImg04 from "../../Assets/img/nuwara-eliya.png";
import DestinationImg05 from "../../Assets/img/sigiriya.png";
import DestinationImg06 from "../../Assets/img/dambulla.png";
import DestinationImg07 from "../../Assets/img/ella.png";
import DestinationImg08 from "../../Assets/img/mirissa.png";
import DestinationImg09 from "../../Assets/img/hikkaduwa.png";
import DestinationImg10 from "../../Assets/img/trincomalee.png";
import DestinationImg11 from "../../Assets/img/anuradhapura.png";
import DestinationImg12 from "../../Assets/img/polonnaruwa.png";
import DestinationImg13 from "../../Assets/img/jaffna.png";
import DestinationImg14 from "../../Assets/img/yala.png";
import DestinationImg15 from "../../Assets/img/udawalawa.png";
import DestinationImg16 from "../../Assets/img/bentota.png";
import DestinationImg17 from "../../Assets/img/negombo.png";
import DestinationImg18 from "../../Assets/img/matara.png";
import DestinationImg19 from "../../Assets/img/potuwil.png";
import DestinationImg20 from "../../Assets/img/badulla.png";
import DestinationImg21 from "../../Assets/img/ratnapura.png";
import DestinationImg22 from "../../Assets/img/kalpitiya.png";
import DestinationImg23 from "../../Assets/img/tangalle.png";
import DestinationImg24 from "../../Assets/img/pinnwala.png";
import DestinationImg25 from "../../Assets/img/beruwala.png";
import DestinationImg26 from "../../Assets/img/weligama.png";
import DestinationImg27 from "../../Assets/img/haputale.png";
import DestinationImg28 from "../../Assets/img/hambantota.png";
import DestinationImg29 from "../../Assets/img/ambalangoda.png";
import DestinationImg30 from "../../Assets/img/kalutara.png";
import DestinationImg31 from "../../Assets/img/batticaloa.png";
import DestinationImg32 from "../../Assets/img/kitulgala.png";
import DestinationImg33 from "../../Assets/img/pasikuda.png";
import DestinationImg34 from "../../Assets/img/ampara.png";
import DestinationImg35 from "../../Assets/img/mannar.png";
import DestinationImg36 from "../../Assets/img/puttalam.png";
import DestinationImg37 from "../../Assets/img/vavuniya.png";
import DestinationImg38 from "../../Assets/img/matale.png";
import DestinationImg39 from "../../Assets/img/hatton.png";

import "./DestinationSection2.css";

const destinations = [
  {
    name: "Colombo",
    description:
      "The bustling commercial capital of Sri Lanka, known for its vibrant markets, colonial architecture, and lively nightlife.",
    image: DestinationImg01,
    alt: "Colombo",
  },
  {
    name: "Kandy",
    description:
      "Nestled in the hills, Kandy is famous for the Temple of the Tooth Relic and its scenic beauty.",
    image: DestinationImg02,
    alt: "Kandy",
  },
  {
    name: "Galle",
    description:
      "A historic city with a well-preserved colonial fort, offering picturesque views and a rich cultural heritage.",
    image: DestinationImg03,
    alt: "Galle",
  },
  {
    name: "Nuwara Eliya",
    description:
      "Often referred to as 'Little England,' this town is known for its cool climate, tea plantations, and beautiful landscapes.",
    image: DestinationImg04,
    alt: "Nuwara Eliya",
  },
  {
    name: "Sigiriya",
    description:
      "Home to the ancient rock fortress, Sigiriya is a UNESCO World Heritage site with stunning views and historical significance.",
    image: DestinationImg05,
    alt: "Sigiriya",
  },
  {
    name: "Dambulla",
    description:
      "Famous for its cave temple complex, Dambulla offers a glimpse into the rich Buddhist heritage of Sri Lanka.",
    image: DestinationImg06,
    alt: "Dambulla",
  },
  {
    name: "Ella",
    description:
      "A serene hill station known for its breathtaking scenery, hiking trails, and the iconic Nine Arches Bridge.",
    image: DestinationImg07,
    alt: "Ella",
  },
  {
    name: "Mirissa",
    description:
      "A coastal paradise popular for whale watching, pristine beaches, and vibrant nightlife.",
    image: DestinationImg08,
    alt: "Mirissa",
  },
  {
    name: "Hikkaduwa",
    description:
      "A beach town famous for its coral reefs, surfing spots, and lively atmosphere.",
    image: DestinationImg09,
    alt: "Hikkaduwa",
  },
  {
    name: "Trincomalee",
    description:
      "Known for its beautiful beaches, historic temples, and as a prime location for snorkeling and diving.",
    image: DestinationImg10,
    alt: "Trincomalee",
  },
  {
    name: "Anuradhapura",
    description:
      "An ancient city with well-preserved ruins, sacred sites, and historical monuments.",
    image: DestinationImg11,
    alt: "Anuradhapura",
  },
  {
    name: "Polonnaruwa",
    description:
      "A UNESCO World Heritage site, Polonnaruwa is renowned for its ancient ruins and historical significance.",
    image: DestinationImg12,
    alt: "Polonnaruwa",
  },
  {
    name: "Jaffna",
    description:
      "A cultural hub in the northern region, Jaffna is known for its unique Tamil culture, historic sites, and delicious cuisine.",
    image: DestinationImg13,
    alt: "Jaffna",
  },
  {
    name: "Yala",
    description:
      "Home to Sri Lanka's most famous national park, Yala is known for its wildlife, including leopards and elephants.",
    image: DestinationImg14,
    alt: "Yala",
  },
  {
    name: "Udawalawe",
    description:
      "A haven for wildlife enthusiasts, Udawalawe National Park is renowned for its elephant population and scenic landscapes.",
    image: DestinationImg15,
    alt: "Udawalawe",
  },
  {
    name: "Bentota",
    description:
      "A popular beach destination known for its water sports, luxury resorts, and tranquil atmosphere.",
    image: DestinationImg16,
    alt: "Bentota",
  },
  {
    name: "Negombo",
    description:
      "A coastal city close to Colombo, famous for its sandy beaches, lagoon, and vibrant fishing community.",
    image: DestinationImg17,
    alt: "Negombo",
  },
  {
    name: "Matara",
    description:
      "A historic city with beautiful beaches, colonial architecture, and a relaxed vibe.",
    image: DestinationImg18,
    alt: "Matara",
  },
  {
    name: "Pottuvil",
    description:
      "A laid-back town known for its proximity to Arugam Bay, a world-renowned surfing destination.",
    image: DestinationImg19,
    alt: "Pottuvil",
  },
  {
    name: "Badulla",
    description:
      "A charming town surrounded by tea plantations, waterfalls, and scenic train journeys.",
    image: DestinationImg20,
    alt: "Badulla",
  },
  {
    name: "Ratnapura",
    description:
      "Known as the 'City of Gems,' Ratnapura is famous for its gem mining and lush landscapes.",
    image: DestinationImg21,
    alt: "Ratnapura",
  },
  {
    name: "Kalpitiya",
    description:
      "A coastal town known for its dolphin and whale watching, kitesurfing, and natural beauty.",
    image: DestinationImg22,
    alt: "Kalpitiya",
  },
  {
    name: "Tangalle",
    description:
      "A tranquil beach destination with palm-fringed shores, lagoons, and serene ambiance.",
    image: DestinationImg23,
    alt: "Tangalle",
  },
  {
    name: "Pinnawala",
    description:
      "Home to the Pinnawala Elephant Orphanage, where visitors can see and interact with elephants.",
    image: DestinationImg24,
    alt: "Pinnawala",
  },
  {
    name: "Beruwala",
    description:
      "A coastal town known for its beautiful beaches, coral reefs, and vibrant fishing community.",
    image: DestinationImg25,
    alt: "Beruwala",
  },
  {
    name: "Weligama",
    description:
      "A surfing hotspot with sandy beaches, a relaxed atmosphere, and scenic coastal views.",
    image: DestinationImg26,
    alt: "Weligama",
  },
  {
    name: "Haputale",
    description:
      "A hill town with breathtaking views, tea plantations, and cool climate.",
    image: DestinationImg27,
    alt: "Haputale",
  },
  {
    name: "Hambantota",
    description:
      "A developing city with beautiful beaches, national parks, and historical sites.",
    image: DestinationImg28,
    alt: "Hambantota",
  },
  {
    name: "Ambalangoda",
    description:
      "Known for its traditional mask-making, vibrant culture, and pristine beaches.",
    image: DestinationImg29,
    alt: "Ambalangoda",
  },
  {
    name: "Kalutara",
    description:
      "A coastal town with beautiful beaches, historical sites, and lush landscapes.",
    image: DestinationImg30,
    alt: "Kalutara",
  },
  {
    name: "Batticaloa",
    description:
      "A city on the east coast known for its lagoon, historic fort, and cultural diversity.",
    image: DestinationImg31,
    alt: "Batticaloa",
  },
  {
    name: "Kitulgala",
    description:
      "An adventure sports hub, Kitulgala is famous for white-water rafting, lush rainforests, and scenic beauty.",
    image: DestinationImg32,
    alt: "Kitulgala",
  },
  {
    name: "Pasikuda",
    description:
      "A beach destination with shallow waters, white sandy beaches, and luxury resorts.",
    image: DestinationImg33,
    alt: "Pasikuda",
  },
  {
    name: "Ampara",
    description:
      "A town with rich cultural heritage, beautiful beaches, and wildlife reserves.",
    image: DestinationImg34,
    alt: "Ampara",
  },
  {
    name: "Mannar",
    description:
      "An island town with historical significance, beautiful beaches, and a unique cultural mix.",
    image: DestinationImg35,
    alt: "Mannar",
  },
  {
    name: "Puttalam",
    description:
      "Known for its diverse ecosystems, salt flats, and vibrant fishing industry.",
    image: DestinationImg36,
    alt: "Puttalam",
  },
  {
    name: "Vavuniya",
    description:
      "A town with historical significance and a gateway to the northern region.",
    image: DestinationImg37,
    alt: "Vavuniya",
  },
  {
    name: "Matale",
    description:
      "A town surrounded by spice plantations, historical sites, and beautiful landscapes.",
    image: DestinationImg38,
    alt: "Matale",
  },
  {
    name: "Hatton",
    description:
      "A town in the hill country known for its tea estates, scenic views, and cool climate.",
    image: DestinationImg39,
    alt: "Hatton",
  },
];

const DestinationSection2 = () => {
  const handleNextClick = () => {
    const slide = document.querySelector(".slide");
    const items = document.querySelectorAll(".item");
    if (slide && items.length > 0) {
      slide.appendChild(items[0]);
    }
  };

  const handlePrevClick = () => {
    const slide = document.querySelector(".slide");
    const items = document.querySelectorAll(".item");
    if (slide && items.length > 0) {
      slide.prepend(items[items.length - 1]);
    }
  };
  return (
    <>
      <section
        className="container-box background-position-center background-repeat overlap-height position-relative "
        style={{
          backgroundImage: `url(${LineBg})`,
          marginTop: "-200px",
          //   marginBottom: "100px"
        }}
      >
        <div className="section-box">
          <div className="container-card ">
            <div className="slide">
              {destinations.map((destination, index) => (
                <div
                  className="item"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="overlay"></div>
                  <div className="content">
                    <div className="name">{destination.name}</div>
                    <div className="des">{destination.description}</div>

                    {/* <button>See More</button> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-content">
              <div className="button">
                <button className="prev" onClick={handlePrevClick}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="next" onClick={handleNextClick}>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationSection2;

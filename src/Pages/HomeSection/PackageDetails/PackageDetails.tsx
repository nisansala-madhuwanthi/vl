
import React,{ useState } from "react";
import "./PackageDetails.css";
import { Tabs } from "antd";
import { Row, Col, Typography, Card } from "antd";


const { TabPane } = Tabs;
const { Title, Text } = Typography;

const packages = [
  {
    key: "1",
    title: "Family Package",
    subtitle: "Unforgettable Memories",
    img: require("../../../Assets/img/vibes-lanka-family-package.png"),
    content:
      "Create unforgettable memories with your loved ones through our Family Package. Enjoy exciting activities for all ages, cultural experiences, and bonding moments that will strengthen family ties.",
    features: [
      { icon: "fas fa-car", text: "Transportation Included" },
      { icon: "fas fa-hotel", text: "Luxury Accommodation" },
      { icon: "fas fa-shield-alt", text: "Passenger Insurance" },
      { icon: "fas fa-headset", text: "24/7 Assistance" },
    ],
  },
  {
    key: "2",
    title: "Romantic Package",
    subtitle: "Unforgettable Memories",
    img: require("../../../Assets/img/vibes-lanka-romantic-package.png"),
    content:
      "Ignite the flames of passion with our Romantic Package. Indulge in intimate getaways, sunset cruises, and luxurious accommodations tailored for couples seeking romance and relaxation.",
    features: [
      { icon: "fas fa-car", text: "Transportation Included" },
      { icon: "fas fa-hotel", text: "Luxury Accommodation" },
      { icon: "fas fa-shield-alt", text: "Passenger Insurance" },
      { icon: "fas fa-headset", text: "24/7 Assistance" },
    ],
  },
  {
    key: "3",
    title: "Honeymoon Package",
    subtitle: "Unforgettable Memories",
    img: require("../../../Assets/img/vibes-lanka-honeymoon-package.png"),
    content:
      "Begin your journey as a married couple in paradise with our Honeymoon Package. Experience secluded retreats, candlelit dinners, and enchanting experiences that will mark the beginning of your marital bliss.",
    features: [
      { icon: "fas fa-car", text: "Transportation Included" },
      { icon: "fas fa-hotel", text: "Luxury Accommodation" },
      { icon: "fas fa-shield-alt", text: "Passenger Insurance" },
      { icon: "fas fa-headset", text: "24/7 Assistance" },
    ],
  },
  {
    key: "4",
    title: "Spiritual Package",
    subtitle: "Unforgettable Memories",
    img: require("../../../Assets/img/vibes-lanka-spiritual-package.png"),
    content:
      "Delve into the spiritual heart of Sri Lanka with our Spiritual Package. Visit ancient temples, participate in traditional ceremonies, and find inner peace amidst the serene landscapes.",
    features: [
      { icon: "fas fa-car", text: "Transportation included" },
      { icon: "fas fa-hotel", text: "Luxury accommodation" },
      { icon: "fas fa-shield-alt", text: "Passenger Insurance" },
      { icon: "fas fa-headset", text: "24/7 Assistance" },
    ],
  },
  {
    key: "5",
    title: "Customized Package",
    subtitle: "Unforgettable Memories",
    img: require("../../../Assets/img/vibes-lanka-customized-package.png"),
    content:
      "Delve into the spiritual heart of Sri Lanka with our Spiritual Package. Visit ancient temples, participate in traditional ceremonies, and find inner peace amidst the serene landscapes.",
    features: [
      { icon: "fas fa-car", text: "Transportation included" },
      { icon: "fas fa-hotel", text: "Luxury accommodation" },
      { icon: "fas fa-shield-alt", text: "Passenger Insurance" },
      { icon: "fas fa-headset", text: "24/7 Assistance" },
    ],
  },
];

const PackageDetails = () => {
  const [activeTab, setActiveTab] = useState(packages[0].key);

  return (
    <>
      <section className="p-0 overflow-hidden">
        <div className="packageDetails-container-fluid p-0">
          <Row className="bg-very-light-gray">
            <Col xs={24} sm={24} md={8} lg={6} xl={4}>
              <Tabs
                tabPosition="left"
                activeKey={activeTab}
                onChange={setActiveTab}
                className="vertical-tabs"
                centered
                tabBarStyle={{ width: "100%", textAlign: "center" }}
                tabBarGutter={0}
                indicator={{ size: (origin) => origin - origin }}
              >
                {packages.map((pkg) => (
                  <TabPane
                    tab={
                      <div>
                        <Title className="m-20px pb-18" level={4}>
                          {pkg.title}
                        </Title>
                      </div>
                    }
                    key={pkg.key}
                  />
                ))}
              </Tabs>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={16}
              lg={18}
              xl={20}
              className="fs-24 alt-font justify-content-center"
            >
              {packages.map(
                (pkg) =>
                  activeTab === pkg.key && (
                    <Row key={pkg.key}>
                      <Col xs={24} sm={12} md={24} xl={12}>
                        <img
                          src={pkg.img}
                          alt={pkg.title}
                          className="cover-background h-100 position-relative"
                        />
                      </Col>
                      <Col xs={24} sm={12} md={24} xl={12}>
                        <Card
                          bordered={false}
                          className="content-card d-flex align-items-center text-center  flex-column justify-content-center h-100"
                        >
                          <span>
                            <Text className="text-base-color fs-17 fw-500">
                              {pkg.subtitle}
                            </Text>
                          </span>

                          <Title
                            level={1}
                            className="text-dark-gray mb-15px primary-font"
                          >
                            {pkg.title}
                          </Title>
                          <Text className="fs-16">{pkg.content}</Text>

                          <Row
                            gutter={[8, 8]}
                            className="mt-3 justify-content-center"
                          >
                            {pkg.features.map((feature, index) => (
                              <Col xs={24} sm={12} md={12} xl={10} key={index}>
                                <Card bordered={false} className="feature-card">
                                  <div className="feature-box-icon">
                                    <i
                                      className={`${feature.icon} icon-large text-base-color mb-15px`}
                                    ></i>
                                  </div>
                                  <Text className="alt-font fs-17 text-medium-gray">
                                    {feature.text}
                                  </Text>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  )
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;

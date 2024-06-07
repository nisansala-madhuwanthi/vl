import React from "react";
import "./Home.css";
import Hero from "../HomeSection/Hero/Hero";
import Feature from "../HomeSection/Feature/Feature";
import About from "../HomeSection/About/About";
import Facility from "../HomeSection/Facility/Facility";
// import Package from '../HomeSection/Package/Package';
import Review from "../HomeSection/Review/Review";
import PackageDetails from "../HomeSection/PackageDetails/PackageDetails";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Facility />
      {/* <Package/> */}
      <PackageDetails />
      <Review />
    </>
  );
};

export default Home;

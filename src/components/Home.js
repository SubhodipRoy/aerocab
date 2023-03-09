import React from "react";
import ChardhamService from "./ChardhamService";
import Hero from "./Hero";
import OtherServices from "./OtherServices";
import Resort from "./Resort";
import RoadPackage from "./RoadPackage";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <ChardhamService />
      <OtherServices />
      <RoadPackage />
      <Resort />
    </>
  );
};

export default Home;

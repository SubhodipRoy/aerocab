import React from "react";
import ChardhamService from "./ChardhamService";
import Hero from "./Hero";
import OtherServices from "./OtherServices";
import Resort from "./Resort";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <ChardhamService />
      <OtherServices />
      <Resort />
    </>
  );
};

export default Home;

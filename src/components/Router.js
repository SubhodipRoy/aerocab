import React from "react";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import ChardhamService from "./ChardhamService";
import OtherServices from "./OtherServices";
import BookingState from "../context/booking/BookingState";
import Footer from "./Footer";
import Resort from "./Resort";
import ContactUs from "./ContactUs";
import About from "./About";
import { UnderConstruction } from "./UnderConstruction";

const fl = 1;
const Router = () => {
  return (
    <BookingState>
      <ChakraProvider>
        <Navbar />
        {fl ? (
          <UnderConstruction />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/packages" element={<ChardhamService />} />
            <Route path="/services" element={<OtherServices />} />
            <Route path="/resort" element={<Resort />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}

        <Footer />
      </ChakraProvider>
    </BookingState>
  );
};

export default Router;

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

const Router = () => {
  return (
    <BookingState>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/packages" element={<ChardhamService />} />
          <Route path="/services" element={<OtherServices />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BookingState>
  );
};

export default Router;

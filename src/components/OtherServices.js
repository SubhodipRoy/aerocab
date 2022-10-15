import React, { useContext } from "react";
import OtherServicesItem from "./OtherServicesItem";

import { Box, Heading } from "@chakra-ui/react";
import "./ChardhamStyles.css";
import BookingContext from "../context/booking/BookingContext";

const OtherServices = () => {
  const details = require("./OtherServices.json");
  const packages = details.packages;

  const bookingContext = useContext(BookingContext);
  const { updateName } = bookingContext;
  return (
    <div>
      <div>
        <Box flex="1" textAlign="left" p={6} mt={20} w={"full"}>
          <Heading as="h2" size="2xl">
            Our Services
          </Heading>
        </Box>
        <div className="chardhamCarousel">
          {packages.map((element) => {
            return (
              <OtherServicesItem
                title={element.name}
                price={element.price}
                url={element.url}
                key={element.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;

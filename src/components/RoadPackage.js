import React, { useContext } from "react";

import { Box, Heading } from "@chakra-ui/react";
import "./ChardhamStyles.css";
import BookingContext from "../context/booking/BookingContext";
import RoadPackageItem from "./RoadPackageItem";

const RoadPackage = () => {
  const details = require("./RoadPackage.json");
  const packages = details.packages;

  const bookingContext = useContext(BookingContext);
  const { updateName } = bookingContext;
  return (
    <div>
      <div>
        <Box flex="1" textAlign="left" p={6} mt={20} w={"full"}>
          <Heading as="h2" size="2xl">
            Road Packages
          </Heading>
          <p>
            <br />
            Starting Form Haridwar/Rishikesh
          </p>
        </Box>
        <div className="chardhamCarousel">
          {packages.map((element) => {
            return (
              <RoadPackageItem
                title={element.name}
                price={element.price}
                url={element.url}
                key={element.url}
                brand={element.brand}
                delPrice={element.delPrice}
                luxPrice={element.luxPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadPackage;

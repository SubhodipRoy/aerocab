import React, { useContext } from "react";
import {
  Box,
  Image,
  Accordion,
  AccordionItem,
  Heading,
  Button,
  AccordionButton,
  Center,
  Icon,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import "./ChardhamStyles.css";
import "./WhyUs.css";
import { useNavigate } from "react-router-dom";

import BookingContext from "../context/booking/BookingContext";

import { BiBook } from "react-icons/bi";

const Resort = () => {
  const details = require("./Resort.json");
  const packages = details.package;

  const bookingContext = useContext(BookingContext);
  const { updateName } = bookingContext;

  let navigate = useNavigate();

  const handleClick = () => {
    updateName("Jyotirlinga Inn Resort");
    navigate("/booking");
  };

  return (
    <div className="container-fluid">
      <Box flex="1" textAlign="left" p={6} mt={20} w={"full"}>
        <Heading as="h2" size="2xl">
          Our Resort
        </Heading>
      </Box>
      <div className="row">
        <div className="col-md-6" id="col-h">
          <div>
            <Box
              role={"group"}
              p={6}
              m={5}
              mt={20}
              bg={"blue.50"}
              //   boxShadow={"2xl"}
              rounded={"50px"}
              pos={"relative"}
              zIndex={1}
              key="element"
            >
              <Box
                className="chardhamCarousel"
                rounded={"30px"}
                pos={"relative"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  // top: 5,
                  // left: 0,
                  // backgroundImage: `url(${IMAGE})`,
                  // filter: "blur(15px)",
                  // zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                {packages.map((element) => {
                  return (
                    <div>
                      <Image
                        rounded={"35px"}
                        height={230}
                        width={282}
                        objectFit={"cover"}
                        src={element}
                      />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </div>
        </div>
        <div className="col-md-5 AccordionButton">
          <Heading as={"h2"} fontSize={"3xl"}>
            Jyotirlinga Inn Resort
          </Heading>
          <Accordion allowMultiple my={12}>
            <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="md">
                      <Icon as={BiBook} w={10} h={10} p={1} my={10} />
                      <span>Aminities And Pricing</span>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <b>MAP: </b>₹5500 &emsp;<b>CP:</b>₹4500
                <br />
                <b>Includes:</b>
                <br />
                <b>MAP:</b>Double Occupancy, Breakfast, Dinner, TV, Gyser,
                Attached Bathroom, Garden
                <br />
                <b>MAP:</b>Double Occupancy, TV, Gyser, Attached Bathroom,
                Garden
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Center>
            <Button
              colorScheme="blue"
              variant="ghost"
              bg="blue.100"
              borderRadius="50px"
              height="50px"
              width="50%"
              onClick={handleClick}
              mb={6}
            >
              Book Now
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default Resort;

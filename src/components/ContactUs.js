import React from "react";
import {
  Container,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  Heading,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <Accordion allowMultiple my={12}>
          <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md">
                    {/* <Icon as={BiBook} w={10} h={10} p={1} my={10} /> */}
                    <span>Address</span>
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
              <b>MAP:</b>Double Occupancy, TV, Gyser, Attached Bathroom, Garden
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple my={12}>
          <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md">
                    {/* <Icon as={BiBook} w={10} h={10} p={1} my={10} /> */}
                    <span>Phone Numbers</span>
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
              <b>MAP:</b>Double Occupancy, TV, Gyser, Attached Bathroom, Garden
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default ContactUs;

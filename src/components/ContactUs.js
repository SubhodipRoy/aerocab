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

import "./ChardhamStyles.css";

import { FiPhoneCall, FiMap } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div>
      <Container className="AccordionButton">
        <Accordion allowMultiple my={12}>
          <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md">
                    <Icon as={FiPhoneCall} w={10} h={10} p={1} my={10} />
                    <span>Phone Number</span>
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <b>Phone 1: </b> <a href="tel:+917248486092">+91 72484 86092</a>
              <br />
              <b>Phone 2: </b> <a href="tel:+919105947108">+91 72484 86092</a>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple my={12}>
          <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md">
                    <Icon as={FiMap} w={10} h={10} p={1} my={10} />
                    <span>Address</span>
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>
                112, Near Welcome Resturant,
                <br />
                Nainital Road <br />
                Pantnagar <br />
                Uttarakhand <br />
                263149
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default ContactUs;

import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  MoveOut,
  batch,
  Fade,
} from "react-scroll-motion";

import "./WhyUs.css";

import { FcBriefcase, FcManager } from "react-icons/fc";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

import { AiOutlineSafety } from "react-icons/ai";

const WhyUs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 whyUsOverflow">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={MoveOut(500, 0)}>
                <img
                  src="/assets/why.png"
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-500px",
                    marginTop: "20vh",
                  }}
                />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>

        <div className="col-md-8 AccordionButton">
          <Heading as="h2" size="2xl" noOfLines={2} p={3}>
            Why Amard
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="md">
                      <Icon as={FcBriefcase} w={10} h={10} p={1} pt={0} />
                      <span>Customized Itenary</span>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Customize & Book Amazing Flight Packages. Amazing Private
                Holiday Flights At Best Price In Uttarakhand for Char Dham
                Yatra.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="md">
                      <Icon as={FcManager} w={10} h={10} p={1} pt={0} />
                      <span>Expert Guidance</span>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We provide expert guidance for hassle free planning of your
                trip. So, feel free to contact our operations team and do
                associate with us.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="md">
                      <Icon
                        as={HiOutlineCurrencyRupee}
                        w={10}
                        h={10}
                        p={1}
                        pt={0}
                        color="orange.500"
                      />
                      <span>Money Safety</span>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Customize & Book Amazing Flight Packages. Amazing Private
                Holiday Flights At Best Price In Uttarakhand for Char Dham
                Yatra.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg="blue.100" borderRadius="50" p={4} m={2}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="md">
                      <Icon as={AiOutlineSafety} w={10} h={10} p={1} pt={0} />
                      <span>Customized Itenary</span>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Customize & Book Amazing Flight Packages. Amazing Private
                Holiday Flights At Best Price In Uttarakhand for Char Dham
                Yatra.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

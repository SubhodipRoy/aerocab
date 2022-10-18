import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  const data = require("./AboutData.json");
  const details = data.details;
  return details.map((elem) => {
    return (
      <Container my={"8"}>
        <Box flex="1" textAlign="left" my={"6"}>
          <Heading as="h2" fontSize={"lg"} my={"1"}>
            {elem.heading}
          </Heading>
          <Text fontSize={"md"}>{elem.text}</Text>
        </Box>
      </Container>
    );
  });
};

export default About;

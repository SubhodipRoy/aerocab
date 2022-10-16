import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  const data = require("./AboutData.json");
  const details = data.details;
  return details.map((elem) => {
    return (
      <Container>
        <Box flex="1" textAlign="left">
          <Heading as="h2" size="2Xl">
            {elem.heading}
          </Heading>
          <Text fontSize={"lg"}>{elem.text}</Text>
        </Box>
      </Container>
    );
  });
};

export default About;

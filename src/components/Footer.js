import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import SocialButton from "./SocialButton";
import { Link } from "react-router-dom";

var logoWidth = "20vw";
if (window.innerWidth < 720) {
  logoWidth = "40vw";
}

const Footer = (props) => {
  const Logo = (props) => {
    return (
      <Box w={logoWidth}>
        <img src="/assets/logo.png" alt="" srcset="" />
      </Box>
    );
  };
  return (
    <Box
      bg={useColorModeValue("blue.50", "blue.900")}
      color={useColorModeValue("blue.700", "blue.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />

        <Text align={"center"}>
          © 2023 Amard Aviation. All rights reserved <br />
          <Link to="/contact">Contact Us</Link>
          <Link to="/About"> &emsp; About Us</Link> <br />
          Created With 💕 by <a href="tel:+918918117064">Subhodip Roy</a>
          <br />
        </Text>

        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

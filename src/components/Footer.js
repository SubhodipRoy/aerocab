import React from "react";
import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

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
          © 2022 Aerocab Aviation. All rights reserved <br />
          Created With 💕 by <a href="tel:+918918117064">Subhodip Roy</a>
          <br />
          <Link to="/contact">Contact Us</Link>
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

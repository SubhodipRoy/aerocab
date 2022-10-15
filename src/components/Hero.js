import React from "react";
import { Box, Highlight, Heading, Text } from "@chakra-ui/react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  MoveOut,
  batch,
  Fade,
} from "react-scroll-motion";

import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-6 p-5">
            <Heading lineHeight="tall">
              <Highlight
                query={["comfortable", "Char Dham"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "blue.100",
                }}
              >
                Most Affordable And Comfortable Helecopter Service for Char Dham
                Yatra
              </Highlight>
            </Heading>
            <Text fontSize="md">
              Aerocab Aviation Pvt. Ltd. has a team of young professional in
              both engineering and operations team who understand client’s
              requirement at best
            </Text>
            {/* </Animator>
              </ScrollPage>
            </ScrollContainer> */}
          </div>
          <div className="col-md-6 overflow">
            <ScrollContainer>
              <ScrollPage>
                <Animator
                  animation={
                    window.innerWidth < 720
                      ? MoveOut(0, -500)
                      : batch(Fade(), MoveOut(-500, 500))
                  }
                >
                  <Box p={3} className="heroImgBox">
                    <img
                      src="/assets/Flight.png"
                      alt="React Logo"
                      className="heroImg"
                    />
                  </Box>
                </Animator>
              </ScrollPage>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

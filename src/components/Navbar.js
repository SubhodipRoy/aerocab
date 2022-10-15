import React, { useContext } from "react";

import { Box, Button } from "@chakra-ui/react";

import "./Navbar.css";

import { Link } from "react-router-dom";

const style = {
  overflowX: "scroll",
};

const Navbar = () => {
  const details = require("./NavbarData.json");
  const packages = details.packages;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 p-2">
          <img className="logoStyle" src="/assets/logo.png" alt="React Logo" />
        </div>
        <div className="col-sm-10 navTabs pt-2" style={style}>
          {packages.map((element) => {
            return (
              <Box as={Link} to={element.path} m={1} key={element.key}>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  bg="blue.100"
                  borderRadius="50px"
                  height="50px"
                >
                  {element.name}
                </Button>
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

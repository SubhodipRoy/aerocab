import React, { Component } from "react";
import ChardhamItems from "./ChardhamItems";

import { Box, Heading } from "@chakra-ui/react";
import "./ChardhamStyles.css";

export default class ChardhamService extends Component {
  constructor() {
    super();
    this.state = {
      packages: [],
    };
  }

  async loadInitial() {
    const details = require("./ChardhamDetails.json");
    console.log(details);
    this.setState({
      packages: details.packages,
    });
  }

  async componentDidMount() {
    this.loadInitial();
  }

  render() {
    return (
      <div>
        <Box flex="1" textAlign="left" p={6} mt={20} w={"full"}>
          <Heading as="h2" size="2xl">
            Char Dham Service
          </Heading>
        </Box>
        <div className="chardhamCarousel">
          {this.state.packages.map((element) => {
            return (
              <ChardhamItems
                title={element.name}
                price={element.price}
                url={element.url}
                key={element.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

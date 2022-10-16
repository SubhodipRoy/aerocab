import React, { useContext } from "react";

import {
  Box,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import "./ChardhamStyles.css";
import { useNavigate } from "react-router-dom";
import BookingContext from "../context/booking/BookingContext";

const ChardhamItems = (props) => {
  const bookingContext = useContext(BookingContext);
  const { updateName } = bookingContext;

  let { title, price, url, brand } = props;
  let navigate = useNavigate();

  const handleClick = () => {
    updateName({ title });
    navigate("/booking");
  };

  return (
    <div>
      <Box
        role={"group"}
        p={6}
        m={5}
        mt={20}
        w={"330px"}
        bg={"blue.50"}
        //   boxShadow={"2xl"}
        rounded={"50px"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"50px"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            // backgroundImage: `url(${IMAGE})`,
            // filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"35px"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={url}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {brand}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₹{price}
            </Text>
          </Stack>
        </Stack>
        <Center>
          <Button
            colorScheme="blue"
            variant="ghost"
            bg="blue.100"
            borderRadius="50px"
            height="50px"
            width="50%"
            onClick={handleClick}
          >
            Book Now
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default ChardhamItems;

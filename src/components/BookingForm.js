import React, { useContext, useState, useRef } from "react";
import { Container, Stack, Input, Button, Center } from "@chakra-ui/react";
import BookingContext from "../context/booking/BookingContext";

import emailjs from "@emailjs/browser";

const focusBorderColor = "blue.200";
const BookingForm = (props) => {
  const bookingContext = useContext(BookingContext);
  const { packageName } = bookingContext;

  const [pName, setPName] = useState({
    packName: packageName.name.title,
    customerName: "",
    email: "",
    phone: "",
  });

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72noaff",
        "template_ymuhqdu",
        form.current,
        "TbfFhahysbzZJo9f8"
      )
      .then(
        emailjs
          .sendForm(
            "service_72noaff",
            "template_hzb06p5",
            form.current,
            "TbfFhahysbzZJo9f8"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          )
      );
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(pName.packName, pName.customerName, pName.email, pName.phone);
  //   sendMail(pName.packName, pName.customerName, pName.email, pName.phone);
  // };

  const onChange = (e) => {
    setPName({ ...pName, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={sendMail} className="container-fluid mt-5" ref={form}>
      <Container bg="blue.50" borderRadius="20" p="5">
        <Stack direction={["column", "row"]} spacing={5} p="2">
          <Input
            variant="filled"
            placeholder="Package Name"
            bg="blue.100"
            borderRadius="20"
            h="60px"
            focusBorderColor={focusBorderColor}
            value={packageName.name.title}
            onChange={onChange}
            name="packName"
          />
          <Input
            variant="filled"
            placeholder="Name"
            bg="blue.100"
            borderRadius="20"
            h="60px"
            focusBorderColor={focusBorderColor}
            onChange={onChange}
            name="customerName"
          />
        </Stack>
        <Stack direction={["column", "row"]} spacing={5} p="2">
          <Input
            variant="filled"
            placeholder="Email"
            bg="blue.100"
            borderRadius="20"
            h="60px"
            focusBorderColor={focusBorderColor}
            onChange={onChange}
            name="email"
          />
          <Input
            variant="filled"
            placeholder="Phone"
            bg="blue.100"
            borderRadius="20"
            h="60px"
            focusBorderColor={focusBorderColor}
            onChange={onChange}
            name="phone"
          />
        </Stack>
        <Center>
          <Button
            colorScheme="blue"
            variant="ghost"
            bg="blue.100"
            borderRadius="50px"
            height="50px"
            width="50%"
            type="submit"
          >
            Button
          </Button>
        </Center>
      </Container>
    </form>
  );
};

export default BookingForm;

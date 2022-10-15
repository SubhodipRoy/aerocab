import React, { useState } from "react";
import BookingContext from "./BookingContext";

const BookingState = (props) => {
  const [packageName, setPackageName] = useState({ name: "" });
  const updateName = (name) => {
    console.log("Setting package name : ", name);
    setPackageName({
      name: name,
    });
  };
  return (
    <BookingContext.Provider value={{ updateName, packageName }}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;

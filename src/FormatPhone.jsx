import React, { useState } from "react";

const FormatPhone = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };
  const formatPhoneNumber = (value) => {
    if (!value) return value; // return if null
    const phoneNumber = value.replace(/[^\d]/g, ""); //scrubing the phone number for any non digit values
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };
  return <input onChange={(e) => handleInput(e)} value={inputValue}></input>;
};

export default FormatPhone;

// "416" is the Area Code, which is used to identify a specific geographic region.
// "555" is the Exchange Code, which identifies the local exchange within that area.
// "1234" is the subscriber number, which is a unique number assigned to an individual mobile phone within the exchange.

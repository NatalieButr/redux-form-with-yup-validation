import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

export default function PhoneInputComponent() {
  const [value, setValue] = useState("");
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
}

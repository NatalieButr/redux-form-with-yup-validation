import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

export default function PhoneInputComponent({
  input,
  label,
  type,
  meta: { touched, error },
}) {
  const [value, setValue] = useState("");
  return (
    <>
      <label htmlFor={input.name} className="form-label">
        {label}
      </label>
      <PhoneInput
        className="form-control"
        {...input}
        type={type}
        value={value}
        onChange={setValue}
      />

      {touched && error && <span className="error">{error}</span>}
    </>
  );
}

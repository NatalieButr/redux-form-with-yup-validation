import { object, string } from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export default object().shape({
  first_name: string()
    .min(2, "")
    .max(25, "")
    .matches(/[a-zA-Z]/, "Поле может содержать только латиницу")
    .required("Имя обязательное поле"),
  last_name: string()
    .min(2, "")
    .max(25, "")
    .matches(/[a-zA-Z]/, "Поле может содержать только латиницу")
    .required("Фамилия обязательное поле"),
  mobile_phone: string()
    .test({
      name: "phone",
      message: "Некорректный номер телефона",
      test: (value) => isValidPhoneNumber(value),
    })
    .required(),
});

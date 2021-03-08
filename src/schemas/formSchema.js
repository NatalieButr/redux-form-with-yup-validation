import { object, string } from "yup";
import "yup-phone";

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
    .phone("BY", true, " is invalid")
    .required("Телефон обязательное поле"),
});

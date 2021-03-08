import { object, string } from "yup";

export default object().shape({
  first_name: string().min(2).max(25).required(),
  last_name: string().min(2).max(25).required("sjdjdjjd"),
  mobile_phone: string().required(),
});

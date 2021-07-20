import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .min(3, "*Поле должно содержать минимум 3 символа")
    .max(50, "*Слишком длинный email")
    .email("* Email должен содержать @ ")
    .required("*Поле обязательно"),
  password: yup
    .string()
    .min(3, "*Поле должно содержать минимум 3 символа")
    .max(50, "*Слишком длинное имя")
    .required("*Поле обязательно"),
});

export default schema;

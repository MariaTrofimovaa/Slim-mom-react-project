import * as yup from "yup";

let schema = yup.object().shape({
  username: yup
    .string()
    .min(3, "*Минимум 3 символа")
    .max(50, "*Слишком длинное имя"),
  // .required("*Поле обязательно"),
  email: yup
    .string()
    .min(3, "*Минимум 3 символа")
    .max(50, "*Слишком длинный email")
    .required("*Поле обязательно"),
  password: yup
    .string()
    .min(7, "*Минимум 7 символов")
    .max(50, "*Слишком длинный пароль")
    .required("*Поле обязательно"),
});

export default schema;

  // email: yup.string().email().required("*Обязательное поле"),

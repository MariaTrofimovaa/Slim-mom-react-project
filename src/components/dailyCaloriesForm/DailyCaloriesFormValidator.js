import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  height: Yup.number()
    .required("Обязательное поле ввода")
    .min(100, "Введите Ваш рост от 100см")
    .integer(),
  age: Yup.number()
    .required("Обязательное поле ввода")
    .min(100, "Введите Ваш возраст от 18лет")
    .integer(),
  weight: Yup.number()
    .required("Обязательное поле ввода")
    .min(100, "Введите Ваш текущий вес от 20кг")
    .integer(),
  desiredWeight: Yup.number()
    .required("Обязательное поле ввода")
    .min(100, "Введите Ваш желаемый вес от 20кг")
    .integer(),
});
export default BasicFormSchema;

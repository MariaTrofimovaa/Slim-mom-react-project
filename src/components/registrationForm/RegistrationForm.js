import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { register } from "../../redux/auth/auth.operations";
import schema from "../loginForm/validator/Validator";
import style from "./RegistrationForm.module.css";
import svg from "../../img/svg/eye-login.svg";

const InitialState = {
  username: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [showPassword, showSetPassword] = useState(false);
  const toggleShowPassword = () => showSetPassword((prevState) => !prevState);

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h1 className={style.authTitle}>Регистрация</h1>
        <Formik
          initialValues={InitialState}
          validationSchema={schema}
          onSubmit={(user) => {
            dispatch(register(user));
            history.push("/login");
          }}
        >
          <Form className={style.form}>
            <label>
              <Field
                type="text"
                name="username"
                placeholder="Имя *"
                className={style.input}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={style.errorMessage}
              />
            </label>

            <label>
              <Field
                type="email"
                name="email"
                placeholder="Логин *"
                className={style.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={style.errorMessage}
              />
            </label>

            <label>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Пароль *"
                className={style.input}
              />

              <button
                type="button"
                onClick={toggleShowPassword}
                className={style.eyeIconBtn}
              >
                {showPassword ? (
                  <svg className={style.eyeIcon}>
                    <use href={`${svg}#icon-eye`}></use>
                  </svg>
                ) : (
                  <svg className={style.eyeIcon}>
                    <use href={`${svg}#icon-eye-hidden`}></use>
                  </svg>
                )}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className={style.errorMessage}
              />
            </label>

            <div className={style.buttonContainer}>
              <button className={style.authButton} type="submit">
                {location.pathname === "/registration" ? "Регистрация" : "Bход"}
              </button>

              {location.pathname === "/registration" ? (
                <Link to="/login" className={style.authLink}>
                  {location.pathname === "/registration"
                    ? "Вход"
                    : "Регистрация"}
                </Link>
              ) : (
                <Link to="/registration" className={style.authLink}>
                  {location.pathname === "/registration"
                    ? "Вход"
                    : "Регистрация"}
                </Link>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;

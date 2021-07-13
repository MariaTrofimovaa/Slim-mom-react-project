// import { Form, Formik } from "formik";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { logIn } from "../../redux/auth/auth.operations";
// import styles from "./LoginForm.module.css";
// import schema from "./validator/Validator";

// const InitialState = {
//   email: "",
//   password: "",
// };

// const LoginForm = () => {
//   const [user, setUser] = useState(InitialState);
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const onHandleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const onHandleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(logIn(user));
//     setUser(InitialState);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.registerContainer}>
//         <div className={styles.formContainer}></div>
//         <h1 className={styles.authTitle}>Вход</h1>

//         {/* <Formik
//           initialValues={{ email: "", password: ""}}
//           validationSchema={schema}
//         > */}
//           <form onSubmit={onHandleSubmit} className={styles.registerForm}>
//             <label htmlFor="email" className={styles.label}>
//               {/* Логин* */}
//               <input
//                 id="email"
//                 name="email"
//                 type="mail"
//                 className={styles.inputData}
//                 placeholder="Логин*"
//                 value={user.email}
//                 onChange={onHandleChange}
//                 required
//               />
//             </label>

//             <label htmlFor="password" className={styles.label}>
//               {/* Пароль* */}
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 className={styles.inputData}
//                 placeholder="Пароль*"
//                 value={user.password}
//                 onChange={onHandleChange}
//                 required
//               />
//             </label>
//           </form>

          // <div className={styles.buttonContainer}>
          //   <button className={styles.authButton} type="submit">
          //     {location.pathname === "/registration" ? "Регистрация" : "Bход"}
          //   </button>

          //   {location.pathname === "/registration" ? (
          //     <Link to="/login" className={styles.authLink}>
          //       {location.pathname === "/registration" ? "Вход" : "Регистрация"}
          //     </Link>
          //   ) : (
          //     <Link to="/registration" className={styles.authLink}>
          //       {location.pathname === "/registration"
          //         ? "Уже есть аккаунт"
          //         : "Регистрация"}
          //     </Link>
          //   )}
          // </div>

//           {/* <button type="submit" className={styles.submitBtn}>
//             Вход
//           </button>

//           <button type="button">Регистрация</button> */}

//         {/* </Formik> */}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// Регитрация - как ссылка (ведет на страницу Registration)

import React from "react";
import { useDispatch } from "react-redux";
import {
  logIn,
} from "../../redux/auth/auth.operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./validator/Validator";
import style from "./LoginForm.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const loginValues = {
  email: "",
  password: "",
};
const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.AuthFormContainer}></div>
      <div className={style.navContainer}>
        <h1 className={style.authTitle}>Вход</h1>
        <Formik
          initialValues={loginValues}
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(logIn(values));
          }}
        >
          <Form className={style.form}>
            <label>
              <Field
                type="email"
                name="email"
                placeholder="Електронна почта *"
                className={style.input}
              />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              <Field
                type="password"
                name="password"
                placeholder="Пароль *"
                className={style.input}
              />
              <ErrorMessage name="password" component="div" />
            </label>
            {/* <button type="submit" className={style.buttons}>
              Вход
            </button> */}
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
                    ? "Уже есть аккаунт"
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

export default AuthForm;



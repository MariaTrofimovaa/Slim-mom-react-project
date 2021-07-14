import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { register } from "../../redux/auth/auth.operations";
import schema from "../loginForm/validator/Validator";
import style from "./RegistrationForm.module.css";

const InitialState = {
  username: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  // const [user, setUser] = useState(InitialState);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // const onHandleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(register(user));
  //   setUser(InitialState);
  // };

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
                name="email"
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
                type="password"
                name="password"
                placeholder="Пароль *"
                className={style.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={style.errorMessage}
              />
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

export default RegistrationForm;

// ========================================
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { register } from "../../redux/auth/auth.operations";
// import styles from "./RegistrationForm.module.css";

// const InitialState = {
//   username: "",
//   email: "",
//   password: "",
// };

// const RegistrationForm = () => {
//   const [user, setUser] = useState(InitialState);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const onHandleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const onHandleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(register(user));
//     setUser(InitialState);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.registerContainer}>
//         <div className={styles.formContainer}>
//           <h1 className={styles.authTitle}>Регистрация</h1>
//           <form onSubmit={onHandleSubmit} className={styles.registerForm}>
//             <label htmlFor="" className={styles.label}>
//               {/* Имя* */}
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 className={styles.inputData}
//                 placeholder="Имя*"
//                 value={user.username}
//                 onChange={onHandleChange}
//                 required
//               />
//             </label>

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
//         </div>

//         <div className={styles.buttonContainer}>
//           <button className={styles.authButton} type="submit">
//             {location.pathname === "/registration" ? "Регистрация" : "Bход"}
//           </button>

//           {location.pathname === "/registration" ? (
//             <Link to="/login" className={styles.authLink}>
//               {location.pathname === "/registration" ? "Вход" : "Регистрация"}
//             </Link>
//           ) : (
//             <Link to="/registration" className={styles.authLink}>
//               {location.pathname === "/registration"
//                 ? "Уже есть аккаунт"
//                 : "Хочу зарегистрироваться"}
//             </Link>
//           )}
//         </div>

//         {/* <div className={styles.btnWrapper}>
//           <button type="submit" className={styles.submitBtn}>
//             Регистрация
//           </button>

//           <p className={styles.authText}>У вас уже усть аккаунт?</p>
//           <Link to="/login" className={styles.underlined}>
//             Вход
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

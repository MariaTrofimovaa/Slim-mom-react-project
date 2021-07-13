import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
import styles from "./LoginForm.module.css";

const InitialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [user, setUser] = useState(InitialState);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(user));
    setUser(InitialState);
  };

  return (
    <>
      <h1 className={styles.authTitle}>Вход</h1>
      <form onSubmit={onHandleSubmit} className={styles.registerForm}>
        <label htmlFor="email" className={styles.label}>
          {/* Логин* */}
          <input
            id="email"
            name="email"
            type="mail"
            className={styles.inputData}
            placeholder="Логин*"
            value={user.email}
            onChange={onHandleChange}
            required
          />
        </label>

        <label htmlFor="password" className={styles.label}>
          {/* Пароль* */}
          <input
            id="password"
            name="password"
            type="password"
            className={styles.inputData}
            placeholder="Пароль*"
            value={user.password}
            onChange={onHandleChange}
            required
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Вход
        </button>

        <button type="button">Регистрация</button>
      </form>
    </>
  );
};

export default LoginForm;

// Регитрация - как ссылка (ведет на страницу Registration)

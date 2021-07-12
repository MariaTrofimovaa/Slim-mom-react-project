import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import styles from "./RegistrationForm.module.css";

const InitialState = {
  username: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const [user, setUser] = useState(InitialState);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(user));
    setUser(InitialState);
  };

  return (
    <>
      <h1 className={styles.title}>Регистрация</h1>
      <form onSubmit={onHandleSubmit} className={styles.registerForm}>
        <label htmlFor="" className={styles.label}>
          Имя*
          <input
            id="username"
            name="username"
            type="text"
            className={styles.inputData}
            // placeholder="Имя*"
            value={user.username}
            onChange={onHandleChange}
            required
          />
        </label>

        <label htmlFor="email" className={styles.label}>
          Логин*
          <input
            id="email"
            name="email"
            type="mail"
            className={styles.inputData}
            // placeholder="Логин*"
            value={user.email}
            onChange={onHandleChange}
            required
          />
        </label>

        <label htmlFor="password" className={styles.label}>
          Пароль*
          <input
            id="password"
            name="password"
            type="password"
            className={styles.inputData}
            // placeholder="Пароль*"
            value={user.password}
            onChange={onHandleChange}
            required
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Регистрация
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;

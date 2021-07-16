import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import styles from "./Header.module.css";

const Navigation = () => {
  const authToken = useSelector(isAuthenticated);
  return (
    <nav className={styles.headerNavigation}>
      <ul className={styles.listLogo}>
        <li>
          <NavLink className={styles.link} to="/diary">
            <svg className={styles.logo}>
              <use href="../../img/svg/sprite.svg#icon-logo"></use>
            </svg>
          </NavLink>
        </li>

        <li className={styles.text}>
          <NavLink to="/diary">
            <svg className={styles.text}>
              <use href="../../img/svg/sprite.svg#icon-SlimMom">LOGO</use>
            </svg>
          </NavLink>
        </li>
      </ul>
      {!authToken && (
        <ul className={styles.regisrationList}>
          <li className={styles.regisrationListItem}>
            <NavLink className={styles.link} to="/login">
              ВХОД
            </NavLink>
          </li>
          <li className={styles.regisrationListItem}>
            <NavLink className={styles.link} to="/registration">
              РЕГИСТРАЦИЯ
            </NavLink>
          </li>
        </ul>
      )}

      {authToken && (
        <>
          <ul className={styles.regisrationList}>
            <li className={styles.navigationListItem}>
              <NavLink className={styles.link} to="/diary">
                ДНЕВНИК
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink className={styles.link} to="/calculator">
                КАЛЬКУЛЯТОР
              </NavLink>
            </li>
          </ul>
          {/* <button type="button" className={styles.burgerBtn1}>
            <svg className={styles.burgerBtn}>
              <use href="../../img/svg/sprite.svg#">LOGO</use>
            </svg>
          </button> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;

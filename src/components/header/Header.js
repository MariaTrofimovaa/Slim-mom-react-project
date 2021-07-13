import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../img/svg/logo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.headerNavigation}>
        <ul className={styles.listLogo}>
          <li>
            <NavLink className={styles.link} to="/">
              <svg className={styles.logo}>
                <use href="../../img/svg/sprite.svg#icon-logo"></use>
              </svg>
            </NavLink>
          </li>
          {/* <svg className={styles.logo}>
          <use href="./images/sprite.svg#">LOGO</use>
          </svg> */}
          <li className={styles.text}>
            {/* <img src="../../img/Group18.png" alt="logo" /> */}
          </li>
        </ul>
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
        {/* <ul className={styles.exitList}>
          <li className={styles.exitListItem}>Nic</li>
          <li className={styles.exitListItem}>Выйти</li>
        </ul>
        <button type="button" classNmae={styles.burgerMenuBtn}>
          <svg className={styles.burgerMenuIcon}>
            <use href="./images/sprite.svg#"></use>
          </svg>
        </button> */}
      </nav>
    </div>
  );
};

export default Header;

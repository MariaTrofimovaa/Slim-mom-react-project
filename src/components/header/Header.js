import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import UserInfo from "../userInfo/UserInfo";
import styles from "./Header.module.css";

const Header = () => {
  const authToken = useSelector(isAuthenticated);
  return (
    <div className={styles.container}>
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
            <svg className={styles.text}>
              <use href="../../img/svg/sprite.svg#icon-SlimMom">LOGO</use>
            </svg>
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

        {/* 1231312 */}
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
          </>
        )}
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
      <UserInfo />
    </div>
  );
};

export default Header;

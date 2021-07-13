import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={styles.headerNavigation}>
        <svg className={styles.logo}>
          <use href="./images/sprite.svg#">LOGO</use>
        </svg>
        <p className={styles.text1}>
          Slim<span className={styles.theSpan}>Mom</span>
        </p>
        <ul className={styles.regisrationList}>
          <li className={styles.regisrationListItem}>Вход</li>
          <li className={styles.regisrationListItem}>Регистрация</li>
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

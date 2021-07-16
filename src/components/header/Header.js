import React from "react";
import UserInfo from "../userInfo/UserInfo";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Modal from "../header/BurgerModal/BurgerModal";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import useMedia from "use-media";

const Header = () => {
  const [state, setState] = useState(false);
 const isWide = useMedia({ minWidth: "320px" });
  const setModalState = () =>
    setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

  const { isModalOpen } = state;

  return (
    <div className={styles.container}>
      <Navigation isModalOpen={isModalOpen} setModalState={setModalState} />

      {isModalOpen && (
        <Modal hideModal={setModalState}>
          <ul className={styles.listBurger}>
            <li className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                onClick={setModalState}
                to="/diary"
              >
                ДНЕВНИК
              </NavLink>
            </li>
            <li className={styles.listBurgerItem}>
              <NavLink
                className={styles.linkBurger}
                activeClassName={styles.linkActiveWhite}
                onClick={setModalState}
                to="/calculator"
              >
                КАЛЬКУЛЯТОР
              </NavLink>
            </li>
          </ul>
        </Modal>
      )}
      <div className={styles.userInfoHeader}>
       <UserInfo />
      </div>
        
    </div>
  );
};

export default withRouter(Header);

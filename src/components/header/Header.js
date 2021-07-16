import React, { Component } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { isAuthenticated } from "../../redux/auth/auth.selectors";
import UserInfo from "../userInfo/UserInfo";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

import Modal from "../header/BurgerModal/BurgerModal";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";

class Header extends Component {
  state = {
    isModalOpen: false,
  };

  // componentDidMount() {
  //   window.addEventListener("resize", this.handleResizeWindow);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.handleResizeWindow);
  // }

  // handleResizeWindow = () => this.setState({ width: window.innerWidth });

  setModalState = () =>
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className={styles.container}>
        <Navigation />
        {!isModalOpen && (
          <svg className={styles.burgerBtn} onClick={this.setModalState}>
            <use href="../../img/svg/sprite.svg#">LOGO</use>
          </svg>
        )}

        {isModalOpen && (
          <svg className={styles.burgerClose} onClick={this.setModalState}>
            <use href="../../img/svg/sprite.svg#">LOGO</use>
          </svg>
        )}
        {isModalOpen && (
          <Modal hideModal={this.setModalState}>
            <ul className={styles.listBurger}>
              <li className={styles.listBurgerItem}>
                <NavLink className={styles.linkBurger} to="/diary">
                  ДНЕВНИК
                </NavLink>
              </li>
              <li className={styles.listBurgerItem}>
                <NavLink className={styles.linkBurger} to="/calculator">
                  КАЛЬКУЛЯТОР
                </NavLink>
              </li>
            </ul>
          </Modal>
        )}
        <UserInfo />
      </div>
    );
  }
}

export default withRouter(Header);

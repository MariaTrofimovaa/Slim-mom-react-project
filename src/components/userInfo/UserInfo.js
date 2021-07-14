import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth.operations";
import { isAuthenticated } from "../../redux/auth/auth.selectors";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  const onLogOut = (e) => {
    dispatch(logOut());
  };

  return (
    <>
      {isAuth && (
        <div className={styles.userInfo}>
          <p className={styles.userLogin}>Nik</p>
          <button
            type="button"
            className={styles.exitButton}
            onClick={onLogOut}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  );
};

export default UserInfo;

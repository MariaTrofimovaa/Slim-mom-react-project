import React from "react";
import styles from "./UserInfo.module.css";
const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <p className={styles.userLogin}>UserLogin</p>
      <button type="button" className={styles.exitButton}>
        Exit
      </button>
    </div>
  );
};

export default UserInfo;

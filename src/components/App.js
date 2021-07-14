import React, { useEffect, useState } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";
// import RightSideBar from "../components/rightSideBar/RightSideBar";

// import UserInfo from "./userInfo/UserInfo";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);


  return (
    <div className={styles.container}>
      <Header />
      <Main />
      {/* <UserInfo /> */}
      {/* <RightSideBar /> */}
    </div>
  );
};

export default App;

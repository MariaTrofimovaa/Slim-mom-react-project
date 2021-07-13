import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";
import RightSideBar from "../components/rightSideBar/RightSideBar";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <RightSideBar />
    </div>
  );
};

export default App;

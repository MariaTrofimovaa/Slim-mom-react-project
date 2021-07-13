import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";
import Modal from "./modal/Modal";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import KkalInfo from "./kkalInfo/KkalInfo";

const App = () => {
  const [state, setState] = useState(false);

  const onToggleModal = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Main />

      {state && (
        <Modal onClick={onToggleModal} onClose={onToggleModal}>
          <KkalInfo />
        </Modal>
      )}
      {/* <RightSideBar /> */}
    </div>
  );
};

export default App;

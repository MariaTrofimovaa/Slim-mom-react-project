import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";
import Modal from "./modal/Modal";

const initialState = {
  showModal: true,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const onToggleModal = () => {
    setState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
    }));
  };

  const onOpenModal = (event) => {
    setState((prevState) => ({
      ...prevState,
      largeImageURL: event.target.dataset.img,
      tags: event.target.alt,
    }));
    onToggleModal();
  };

  const { showModal } = state;
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      {showModal && (
        <Modal onClick={onOpenModal} onClose={onToggleModal}></Modal>
      )}
    </div>
  );
};

export default App;


import React, { useEffect, useState } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";
import RightSideBar from "../components/rightSideBar/RightSideBar";

import KkalInfo from "./kkalInfo/KkalInfo";
import { useDispatch} from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";


const App = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const onToggleModal = () => {
    setState((prevState) => !prevState);
  };


  return (
    <div className={styles.container}>
      <Header />
      <Main />

      <RightSideBar />


      {state && (
        <Modal onClick={onToggleModal} onClose={onToggleModal}>
          <KkalInfo />
        </Modal>
      )}
    </div>
  );
};

export default App;

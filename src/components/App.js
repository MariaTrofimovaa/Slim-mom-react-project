import React, { useEffect} from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";
import { isAuthenticated } from "../redux/auth/auth.selectors";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(isAuthenticated);
  
  useEffect(() => {

    dispatch(getCurrentUser());
  }, [dispatch]);


  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default App;

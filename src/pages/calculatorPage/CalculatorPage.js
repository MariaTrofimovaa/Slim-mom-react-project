import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth.operations";

const CalculatorPage = () => {

  const dispatch = useDispatch();
  
    const onLogOut = (e) => {
    dispatch(logOut());
    };
    
  return (
    <>
      <h1>Calculator Page</h1>
      <button type="submit" onClick={onLogOut}>
        Выйти
      </button>
    </>
  );
};

export default CalculatorPage;

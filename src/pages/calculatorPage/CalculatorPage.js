import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth.operations";
import axios from "axios";
import { useState } from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import {
  getUserData,
  getUserId,
  isAuthenticated,
} from "../../redux/auth/auth.selectors";
import { useEffect } from "react";
import { getDayInfo } from "../../redux/products/products.operations";
import { updateCalculator } from "../../redux/calculator/calculator.operations";

// const BASE_URL = "https://slimmom-backend.goit.global";

// const transformString = (obj) => {
//   const newObj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     newObj[key] = Number(value);
//   }
//   return newObj;
// };

const CalculatorPage = () => {
  const [data, setData] = useState(null);
  const userId = useSelector(getUserId);
  const userData = useSelector(getUserData);
  const token = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const [startDate] = useState(new Date());

  useEffect(() => {
    dispatch(getDayInfo(startDate.toISOString().slice(0, 10)));
  }, [dispatch, startDate]);
  // const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateCalculator(values));
    // const data = transformString(values);
    // const res = await axios.post(`${BASE_URL}/daily-rate/${userId}`, data);
    // console.log(res.data.dailyRate);
    // setData(res.data.dailyRate);
  };

  // const onLogOut = (e) => {
  //   dispatch(logOut());
  // };

  return (
    <>
      <DailyCaloriesForm
        onSubmit={onSubmit}
        enableReinitialize
        initialValues={{
          height: userData?.height ?? "",
          age: userData?.age ?? "",
          weight: userData?.weight ?? "",
          desiredWeight: userData?.desiredWeight ?? "",
          bloodType: userData?.bloodType ?? "1",
        }}
      />
      {/* <button type="submit" onClick={onLogOut}>
        Выйти
      </button> */}
    </>
  );
};

export default CalculatorPage;

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DiaryDateCalendar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getSelectedDay,
  getDayInfoSuccess,
} from "../../redux/products/products.actions";
import { getDayInfo } from "../../redux/products/products.operations";

const Calendar = () => {
  // const loading = useSelector(-выбрать селектор лоадера)
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(getSelectedDay(startDate.toISOString().slice(0, 10)));
    dispatch(getDayInfo(startDate.toISOString().slice(0, 10)));
  }, [dispatch, startDate]);

  return (
    <div className={styles.сalendar}>
      {/* {loading && <Loader />} */}
      <DatePicker
        className={styles.datePicker}
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calendar;

// const Calendar = () => {
//   // const loading = useSelector(-выбрать селектор лоадера)
//   const dispatch = useDispatch();

//   let day = new Date();
//   const formatted_date = day.toISOString().slice(0, 10);
//   console.log(formatted_date);

//   const [startDate, setStartDate] = useState(formatted_date);

//   useEffect(() => {
//     dispatch(getSelectedDay(formatted_date));
//     // dispatch(getSummaryForDayOperation());
//   }, [dispatch, formatted_date]);

//   return (
//     <div className={styles.сalendar}>
//       {/* {loading && <Loader />} */}
//       <DatePicker
//         className={styles.datePicker}
//         selected={startDate}
//         dateFormat="dd.MM.yyyy"
//         onChange={(date) => setStartDate(date)}
//       />
//     </div>
//   );
// };

// export default Calendar;

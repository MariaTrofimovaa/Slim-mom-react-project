import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DiaryDateCalendar.module.css";
import { useSelector } from "react-redux";

const Calendar = () => {
// const loading = useSelector(-выбрать селектор лоадера)


  const [startDate, setStartDate] = useState(new Date());
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
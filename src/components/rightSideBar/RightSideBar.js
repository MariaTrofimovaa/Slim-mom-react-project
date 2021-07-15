import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dateSelector,
  kcalConsumedSelector,
  kcalLeftSelector,
  kcalSelector,
  notAllowedProds,
  percentsOfDailyRateSelector,
} from "../../redux/dailyrate/dailyrateSelectors";

import styles from "./rightSideBar.module.css";
import {
  addProduct,
  deleteProduct,
  getDayInfo,
} from "../../redux/products/products.operations";
import { getDailyRateOperation } from "../../redux/dailyrate/dailyrateOperations";

const RightSideBar = () => {
  const dailyKcal = useSelector(kcalSelector);
  const notAllowedProducts = useSelector(notAllowedProds);
  const kcalLeft = useSelector(kcalLeftSelector);
  const kcalConsumed = useSelector(kcalConsumedSelector);
  const percentsOfDailyRate = useSelector(percentsOfDailyRateSelector);
  const date = useSelector(dateSelector);
  const currentDay = new Date().toJSON().slice(0, 10);
  const dispatch = useDispatch();

  // import { useState } from "react";
  // import { useDispatch } from "react-redux";
  // import { getDailyRateOperation } from "../../redux/dailyrate/dailyrateOperations";

  // useEffect(() => {
  //   // dispatch(addProduct());
  //   dispatch(getDayInfo());
  //   // dispatch(deleteProduct());
  // }, [dispatch]);

  return (
    <div className={styles.RightSideBarContainer}>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Сводка за {currentDay}</h2>
        <div className={styles.RightSideBarStatictics}>
          <ul className={styles.RightSideBarParams}>
            <li className={styles.RightSideBarItem}>Осталось</li>
            <li className={styles.RightSideBarItem}>Употреблено</li>
            <li className={styles.RightSideBarItem}>Дневная норма</li>
            <li className={styles.RightSideBarItem}>n% от нормы</li>
          </ul>
          <ul>
            <li className={styles.RightSideBarItem}>{kcalLeft} ккал</li>
            <li className={styles.RightSideBarItem}>
              {Math.round(kcalConsumed) || 0} ккал
            </li>
            <li className={styles.RightSideBarItem}>{dailyKcal} ккал</li>
            <li className={styles.RightSideBarItem}>
              {Math.round(percentsOfDailyRate) || 0} %
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Нерекомендуемые продукты</h2>
        <p>{notAllowedProducts.join(", ")}</p>
        <div className={styles.RightSideBarStatictics}>
          <ul className={styles.RightSideBarListDiet}>
            <li className={styles.RightSideBarItem}>
              Здесь будет отображаться Ваш рацион
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getDailyRateOperation } from "../../redux/dailyrate/dailyrateOperations";
import { useSelector } from "react-redux";
import { kcalConsumedSelector, kcalLeftSelector, kcalSelector, notProductsSelector, percentsOfDailyRateSelector } from "../../redux/day/day.selectors";
// import { isAuthenticated } from "../../redux/auth/auth.selectors";
import styles from "./rightSideBar.module.css";



const RightSideBar = () => {
  // const isAuth = useSelector(isAuthenticated);
  // const selectedDay = useSelector(getDateSelector);
  // // const dayInfo = useSelector(getDayInfoSelector);
  // const daySummary = useSelector(getDaySummarySelector);
  // const notAllowedProds = useSelector(getNotAllowedProdSelector);
  const dailyKcal = useSelector(kcalSelector);
  console.log(dailyKcal);
  const notAllowedProducts = useSelector(notProductsSelector);
  const kcalLeft = useSelector(kcalLeftSelector);
  const kcalConsumed = useSelector(kcalConsumedSelector);
  const percentsOfDailyRate = useSelector(percentsOfDailyRateSelector);
  // const date = useSelector(dateSelector);

  return (
    <div className={styles.RightSideBarContainer}>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Сводка за 20.06.2020</h2>
        <div className={styles.RightSideBarStatictics}>
          <ul className={styles.RightSideBarParams}>
            <li className={styles.RightSideBarItem}>Осталось</li>
            <li className={styles.RightSideBarItem}>Употреблено</li>
            <li className={styles.RightSideBarItem}>Дневная норма</li>
            <li className={styles.RightSideBarItem}>n% от нормы</li>
          </ul>
          <ul>
            <li className={styles.RightSideBarItem}>{kcalLeft} ккал</li>
            <li className={styles.RightSideBarItem}>{kcalConsumed} ккал</li>
            <li className={styles.RightSideBarItem}>{dailyKcal} ккал</li>
            <li className={styles.RightSideBarItem}>
              {Math.round(percentsOfDailyRate)} ккал
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Нерекомендуемые продукты</h2>
        <p>{notAllowedProducts}</p>
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

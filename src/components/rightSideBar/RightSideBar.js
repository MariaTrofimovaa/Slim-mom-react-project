import moment from "moment";
import { useSelector } from "react-redux";
import {
  kcalConsumedSelector,
  kcalLeftSelector,
  kcalSelector,
  notAllowedProds,
  percentsOfDailyRateSelector,
} from "../../redux/dailyrate/dailyrateSelectors";
import styles from "./rightSideBar.module.css";
import { getSelectedDate } from "../../redux/products/products.selectors";

const RightSideBar = () => {
  const dailyKcal = useSelector(kcalSelector);
  const notAllowedProducts = useSelector(notAllowedProds);
  const kcalLeft = useSelector(kcalLeftSelector);
  const kcalConsumed = useSelector(kcalConsumedSelector);
  const percentsOfDailyRate = useSelector(percentsOfDailyRateSelector);

  const [date] = useSelector(getSelectedDate);

  let selectedDate = "";
  if (date) {
    const [year, month, day] = date.split("-");
    selectedDate = `${day}.${month}.${year}`;
  }

  const importantDate = new Date().toJSON().slice(0, 10);

  const dateNow = moment(importantDate).format("DD.MM.YYYY");

  return (
    <div className={styles.RightSideBarContainer}>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>
          Сводка за {selectedDate || dateNow}
        </h2>
        <div className={styles.RightSideBarStatictics}>
          <ul className={styles.RightSideBarParams}>
            <li className={styles.RightSideBarItem}>Осталось</li>
            <li className={styles.RightSideBarItem}>Употреблено</li>
            <li className={styles.RightSideBarItem}>Дневная норма</li>
            <li className={styles.RightSideBarItem}>n% от нормы</li>
          </ul>
          <ul>
            <li className={styles.RightSideBarItem}>
              {Math.round(kcalLeft) || 0} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {Math.round(kcalConsumed) || 0} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {Math.round(dailyKcal) || 0} ккал
            </li>
            <li className={styles.RightSideBarItem}>
              {Math.round(percentsOfDailyRate) || 0} %
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Нерекомендуемые продукты</h2>
        <ul className={styles.RightSideBarProducts}>
          <li className={styles.productsList}>
            {notAllowedProducts.join(", ")}
          </li>
        </ul>
        {!notAllowedProducts.length && (
          <ul className={styles.RightSideBarListDiet}>
            <li className={styles.RightSideBarItem}>
              Здесь будет отображаться Ваш рацион
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;

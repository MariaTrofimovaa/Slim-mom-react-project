import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./KkalInfo.module.css";
const KkalInfo = () => {
  const [find, setFind] = useState("");
  const onHandleChange = (event) => {
    setFind(event.target.value);
  };
  return (
    <div>
      <div className={styles.moduleDailyNormContainer}>
        <h3 className={styles.moduleDailyNormTitle}>
          Ваша рекомендуемая суточная <br /> норма калорий составляет
        </h3>
        <div className={styles.moduleDailyNormValueCcal}>
          2800 <span className={styles.moduleDailyNormCcal}>ккал</span>
        </div>
      </div>
      <div className={styles.moduleNotSuitableProductsContainer}>
        <input
          type="text"
          value={find}
          onChange={onHandleChange}
          className={styles.moduleNotSuitableProductsInput}
        />
        <ol className={styles.moduleNotSuitableProductsList}>
          Продукты, которые вам не рекомендуется употреблять
          <li className={styles.moduleNotSuitableProductsItem}>
            Молочные продукты
          </li>
        </ol>
      </div>
      <Link
        type="button"
        to="/login"
        className={styles.moduleNotSuitableProductsButton}
      >
        <span className={styles.moduleNotSuitableProductsButtonText}>
          Начать худеть
        </span>
      </Link>
    </div>
  );
};

export default KkalInfo;

import styles from "./rightSideBar.module.css";

const RightSideBar = () => {
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
            <li className={styles.RightSideBarItem}>000 ккал</li>
            <li className={styles.RightSideBarItem}>000 ккал</li>
            <li className={styles.RightSideBarItem}>000 ккал</li>
            <li className={styles.RightSideBarItem}>000 ккал</li>
          </ul>
        </div>
      </div>
      <div className={styles.RightSideBarSummary}>
        <h2 className={styles.RightSideBarHeader}>Нерекомендуемые продукты</h2>
        <div className={styles.RightSideBarStatictics}>
          <ul>
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

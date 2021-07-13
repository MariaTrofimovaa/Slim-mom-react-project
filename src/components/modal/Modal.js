import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useCallback, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { openModal } from "../../redux/modal/modalActions";
// import { openModalSelector } from "../../redux/modal/modalSelertors";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  const [find, setFind] = useState("");
  const onHandleChange = (event) => {
    setFind(event.target.value);
  };
  useEffect(() => {
    // это componentDidMount
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    // это componentWillUnmount
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", handleButtonClick);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.tagName);
      onClose();
    }
  };

  {
    /* <div className={styles.Modal}>{children}</div>; */
  }

  return (
    <div
      className={styles.moduleMainContainerOverlay}
      onClick={handleBackdropClick}
    >
      <div className={styles.moduleMainContainer}>
        <button className={styles.closeModalBtn} onClick={handleButtonClick} />
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
    </div>
  );
};

export default Modal;

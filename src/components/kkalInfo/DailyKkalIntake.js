import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./DailyKkalIntake.module.css";
import dailyrateSelectors from "../../redux/dailyrate/dailyrateSelectors";

class DailyKkalIntake extends Component {
  static propTypes = {
    calories: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <div className={styles.moduleDailyNormContainer}>
          <h3 className={styles.moduleDailyNormTitle}>
            Ваша рекомендуемая суточная <br /> норма калорий составляет
          </h3>
          <div className={styles.moduleDailyNormValueCcal}>
            {this.props.dailyRate}
            <span className={styles.moduleDailyNormCcal}>ккал</span>
          </div>
        </div>
        <div className={styles.moduleNotSuitableProductsContainer}>
          <input
            type="text"
            className={styles.moduleNotSuitableProductsInput}
          />
          <div className={styles.moduleNotSuitableProductsTitle}>
            Продукты, которые вам не рекомендуется употреблять
          </div>
          <ol className={styles.moduleNotSuitableProductsList}>
            {this.props.notAllowedProducts.map((product, id) => (
              <li key={id} className={styles.moduleNotSuitableProductsItem}>
                {product}
              </li>
            ))}
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
  }
}

// const mapStateToProps = (state) => ({
//   calories: dailyrateSelectors.getDailyRateSelector(state),
//   products: dailyrateSelectors.getAllNotSuitableProductsSelector(state),
// });

// export default connect(mapStateToProps)(DailyKkalIntake);

export default DailyKkalIntake;

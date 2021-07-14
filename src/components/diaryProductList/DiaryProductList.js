import styles from "./DiaryProductList.module.css";
import { connect } from "react-redux";
import { getProductSelector } from "../../redux/products/products.selectors";
import { deleteProduct } from "../../redux/products/products.operations";

const DiaryProductList = ({ openModalProp, product, deleteProductProp }) => {
  function handleOpenModalClick(event) {
    openModalProp(event);
  }

  return (
    <div>
      <ul className={styles.calendarTable}>
        {product.map((item) => (
          <li key={item.eatenProduct.id} className={styles.listItem}>
            <ul className={styles.list}>
              <li className={styles.foodName}>{item.eatenProduct.title} </li>
              <li className={styles.foodWeight}>
                {item.eatenProduct.weight} г
              </li>
              <li className={styles.line}>
                {Math.round(item.eatenProduct.kcal)} ккал
              </li>
              <li>
                <button
                  type="button"
                  className={styles.buttonDelete}
                  onClick={() =>
                    deleteProductProp(item.day.id, item.eatenProduct.id)
                  }
                >
                  x
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleOpenModalClick()}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: getProductSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchContacts: () => dispatch(fetchContacts()),
  deleteProductProp: (dayId, productId) =>
    dispatch(deleteProduct(dayId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductList);

import styles from "./DiaryProductList.module.css";
import { connect } from "react-redux";
import {
  getProductSelector,
  getSelectedDate,
  getDayInfo,
} from "../../redux/products/products.selectors";
import { deleteProduct } from "../../redux/products/products.operations";
import IconClose from "../shared/IconClose/IconClose";

const DiaryProductList = ({ openModalProp, product, deleteProductProp }) => {
  function handleOpenModalClick(event) {
    openModalProp(event);
  }

  // console.log(product.id);
  // handleDelete = (e) => {
  //   deleteProductProp(e.target.id);

  //   dispatch(
  //     deleteProductOperation({
  //       dayId: id,
  //       eatenProductId: e.target.id,
  //     })
  //   );
  // };

  // const lastProduct = product.find((item) => item[product.length - 1]);

  // console.log(product, "product");
  // console.log("product :>> ", product);
  return (
    <div>
      {product.eatenProducts && !product.eatenProducts.length && (
        <span>Список пуст</span>
      )}
      <ul className={styles.calendarTable}>
        {product.eatenProducts?.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <ul className={styles.list}>
              <li className={styles.foodName}>{item.title} </li>
              <li className={styles.foodWeight}>{item.weight} г</li>
              <li className={styles.line}>{Math.round(item.kcal)} ккал</li>
              <li>
                <button
                  type="button"
                  className={styles.buttonDelete}
                  onClick={() => deleteProductProp(product.id, item.id)}
                >
                  <IconClose />
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
  selectedDate: getSelectedDate(state),
  dayInfo: getDayInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProductProp: (dayId, productId) =>
    dispatch(deleteProduct(dayId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductList);

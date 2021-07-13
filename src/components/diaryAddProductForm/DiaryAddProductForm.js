import styles from "./DiaryAddProductForm.module.css";

const DiaryAddProductForm = () => {
  return (
    <form className={styles.productForm}>
      <label className={styles.productLabel}>
        <input
          placeholder="Введите название продукта"
          type="name"
          name="name"
          className={styles.productInput}
        />
      </label>

      <label className={styles.productLabel}>
        <input
          className={styles.weightInput}
          placeholder="Граммы"
          type="grams"
          name="grams"
        />
      </label>
      <button type="submit" className={styles.formButton}>
        +
      </button>
    </form>
  );
};

export default DiaryAddProductForm;

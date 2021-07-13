import React, { Component } from "react";
import styles from "./DiaryAddProductFormModal.module.css";

class DiaryAddProductFormModal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        this.props.closeModal();
      }
    });
  }
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <form className={styles.form}>
            <label>
              <input
                placeholder="Введите название продукта"
                type="name"
                name="name"
              />
            </label>

            <label>
              <input placeholder="Граммы" type="grams" name="grams" />
            </label>
            <br />
            <button type="submit" className={styles.formButton}>
              +
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DiaryAddProductFormModal;

// const DiaryAddProductFormModal = () => {
//   return (
//     <form>
//       <label>
//         <input
//           placeholder="Введите название продукта"
//           type="name"
//           name="name"
//         />
//       </label>

//       <label>
//         <input placeholder="Граммы" type="grams" name="grams" />
//       </label>
//     </form>
//   );
// };

// export default DiaryAddProductFormModal;

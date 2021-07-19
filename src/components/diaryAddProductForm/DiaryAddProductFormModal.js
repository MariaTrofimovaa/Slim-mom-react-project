import React, { Component } from "react";
// import DiaryAddProductForm from "./DiaryAddProductForm";
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

  closeProductModal = (event) => {
    this.props.closeModal();
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <button
            onClick={this.closeProductModal}
            type="button"
            className={styles.closeModalButton}
          >
            X
          </button>
          {/* <DiaryAddProductForm /> */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DiaryAddProductFormModal;

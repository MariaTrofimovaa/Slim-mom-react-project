import React from "react";
import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
import DiaryAddProductFormModal from "../../components/diaryAddProductForm/DiaryAddProductFormModal";
import DiaryProductList from "../../components/diaryProductList/DiaryProductList";
import styles from "./DiaryPage.module.css";
import { Component } from "react";

class DiaryPage extends Component {
  state = {
    showModal: false,
  };

  openModal = (event) => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <section className={styles.diarySection}>
        {this.state.showModal && (
          <DiaryAddProductFormModal closeModal={this.closeModal} />
        )}

        <div className={styles.container}>
          <div className={styles.dateAndCalendar}>
            <p className={styles.date}>20.06.2020</p>
            <img
              className={styles.calendarImage}
              src="./calendar 1.svg"
              alt=""
            />
            <svg width="18" height="20" className={styles.calendarImage}>
              <use href="./symbol-defs.svg.svg#calendar"></use>
            </svg>
          </div>
          <DiaryAddProductForm />
          <DiaryProductList openModalProp={this.openModal} />
        </div>
        <div className={styles.summary}>hgjshfusjhdbvjhsbvsbhjvhsb</div>
      </section>
    );
  }
}

export default DiaryPage;

// import React from "react";
// import DiaryAddProductForm from "../../components/diaryAddProductForm/DiaryAddProductForm";
// import DiaryAddProductFormModal from "../../components/diaryAddProductForm/DiaryAddProductFormModal";
// import DiaryProductList from "../../components/diaryProductList/DiaryProductList";
// import styles from "./DiaryPage.module.css";

// const DiaryPage = () => {
//   return (
//     <section className={styles.diarySection}>
//       <div>{showModal && <DiaryAddProductFormModal />}</div>
//       <div className={styles.container}>
//         <div className={styles.dateAndCalendar}>
//           <p className={styles.date}>20.06.2020</p>
//           <img className={styles.calendarImage} src="./calendar 1.svg" alt="" />
//           <svg width="18" height="20" className={styles.calendarImage}>
//             <use href="./symbol-defs.svg.svg#calendar"></use>
//           </svg>
//         </div>
//         <DiaryAddProductForm />
//         <DiaryProductList />
//       </div>
//       <div className={styles.summary}>hgjshfusjhdbvjhsbvsbhjvhsb</div>
//     </section>
//   );
// };

// export default DiaryPage;

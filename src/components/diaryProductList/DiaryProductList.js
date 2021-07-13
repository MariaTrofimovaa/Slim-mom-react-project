import styles from "./DiaryProductList.module.css";
// import { Component } from "react";

// class DiaryProductList extends Component {
//   state = {
//     showModal: false,
//   };

//   openModal = (event) => {
//     this.setState({
//       showModal: true,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <ul className={styles.calendarTable}>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//           <li className={styles.listItem}>
//             <ul className={styles.list}>
//               <li className={styles.foodName}>Баклажан</li>
//               <li className={styles.foodWeight}>100 г</li>
//               <li className={styles.line}>320 ккал</li>
//               <li>
//                 <button className={styles.buttonDelete}>x</button>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className={styles.button}
//           onClick={this.openModal}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

// export default DiaryProductList;

const DiaryProductList = ({ openModalProp }) => {
  function handleOpenModalClick(event) {
    openModalProp(event);
  }

  return (
    <div>
      <ul className={styles.calendarTable}>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <ul className={styles.list}>
            <li className={styles.foodName}>Баклажан</li>
            <li className={styles.foodWeight}>100 г</li>
            <li className={styles.line}>320 ккал</li>
            <li>
              <button className={styles.buttonDelete}>x</button>
            </li>
          </ul>
        </li>
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

export default DiaryProductList;

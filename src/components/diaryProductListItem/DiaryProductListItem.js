// import React from "react";
// import styles from "./DiaryProductListItem.module.css";
// import IconClose from "../../img/svg/close.svg";

// const DiaryProductListItem = ({
//   name,
//   cal,
//   weight,
//   dayId,
//   productId,
//   deleteProduct,
//   date,
// }) => {
//   return (
//     <li className={styles.list}>
//       <p className={styles.listName}>{name}</p>
//       <p className={styles.listWeight}>{weight} г</p>
//       <p className={styles.listCalories}>
//         {Math.round(cal)} <span className={styles.ccal}>ккал</span>
//       </p>

//       <button
//         className={styles.listButton}
//         onClick={() =>
//           deleteProduct(
//             {
//               dayId,
//               eatenProductId: productId,
//             },
//             date
//           )
//         }
//       >
//         <IconClose />
//       </button>
//     </li>
//   );
// };

// const mapDispatchToProps = {
//   deleteProduct: deleteEatenProduct,
// };

// const mapStateToProps = (state) => ({
//   dayId: selectors.getCurrentDayId(state),
//   date: selectors.getDaySummary(state).date,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DiaryProductListItem);

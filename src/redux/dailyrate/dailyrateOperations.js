// import axios from "axios";
// import getDailyRate from "../../services/api";
// import { addProduct } from "../products/products.operations";
// import {
//   getDailyRateError,
//   getDailyRateRequest,
//   getDailyRateSuccess,
// } from "./dailyrateActions";

// axios.defaults.baseURL = "https://slimmom-backend.goit.global";

// const getDailyRateOperation = (date, productId, weight) => async (dispatch) => {
//   const product = { date, productId, weight };
//   dispatch(getDailyRateRequest());
//   const startDate = new Date();
//   const newDate = startDate.toISOString().slice(0, 10);

//   try {
//     const {data} = await axios.post("/day", { date: newDate });
//     // console.log(response);
//     dispatch(getDailyRateSuccess(data));
//   } catch (error) {
//     dispatch(getDailyRateError(error));
//   }
// };

// // const getDayInfo = () => async(dispatch) => {}

// export { getDailyRateOperation };

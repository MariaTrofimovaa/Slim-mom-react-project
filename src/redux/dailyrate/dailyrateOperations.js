import getDailyRate from "../../services/api";
import { getDailyRateError, getDailyRateRequest, getDailyRateSuccess } from "./dailyrateActions";

const getDailyRateOperation = (values) => async (dispatch) => {
  dispatch(getDailyRateRequest());
  try {
    const response = getDailyRate();
    dispatch(getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(getDailyRateError(error));
  }
};

// import dailyrateActions from "./dailyrateActions";

// import getDailyRate from "../../services/api";

// const getDailyRateOperation = (rateCharacteristics) => (dispatch) => {
//   dispatch(dailyrateActions.getProductsRequest());

//   getDailyRate(rateCharacteristics)
//     .then(({ data }) => {
//       console.log(data);
//       return dispatch(dailyrateActions.getProductsSuccess(data));
//     })
//     .catch((err) => dispatch(dailyrateActions.getProductsError(err)));
// };

export { getDailyRateOperation };

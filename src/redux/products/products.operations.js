import axios from "axios";
import { useSelector } from "react-redux";
import { getUserData } from "../auth/auth.selectors";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  getDayInfoRequest,
  getDayInfoSuccess,
  getDayInfoError,
} from "./products.actions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const addProduct = (date, productId, weight) => (dispatch) => {
  const product = { date, productId, weight };
  // console.log(product);

  dispatch(addProductRequest());

  axios
    .post("/day", product)
    .then((response) => dispatch(addProductSuccess(response.data)))
    .catch((error) => dispatch(addProductError(error.message)));
};

const deleteProduct = (dayId, eatenProductId) => (dispatch) => {
  dispatch(deleteProductRequest());

  const deletedProduct = { dayId, eatenProductId };
  // console.log(axios.defaults.headers.common.Authorization);

  axios
    .delete(`/day`, { data: deletedProduct })
    .then((response) =>
      dispatch(deleteProductSuccess({ ...deletedProduct, ...response.data }))
    )
    .catch((error) => dispatch(deleteProductError(error.message)));
};

const getDayInfo = (date) => (dispatch, getState) => {
  // const userData = useSelector(getUserData);
  dispatch(getDayInfoRequest());

  // проверка: если данные о пользователе не введены, вернуть
  // const dayInfo = getState().rateInfo.summaries.kcalLeft;
  // const dayInfo = getState().auth.user.userData.weight;
  // console.log("dayInfo :>> ", dayInfo);
  // if (!dayInfo) return;

  // console.log(axios.defaults.headers.common.Authorization);

  axios
    .post(`/day/info`, { date })
    .then((response) => {
      // console.log(response, "response");
      dispatch(getDayInfoSuccess(response.data));
    })

    .catch((error) => dispatch(getDayInfoError(error.message)));
};

export { addProduct, deleteProduct, getDayInfo };

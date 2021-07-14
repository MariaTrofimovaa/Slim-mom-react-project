import axios from "axios";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
} from "./products.actions";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const addProduct = (date, productId, weight) => (dispatch) => {
  const product = { date, productId, weight };
  console.log(product);

  dispatch(addProductRequest());

  axios
    .post("/day", product)
    .then((response) => dispatch(addProductSuccess(response.data)))
    .catch((error) => dispatch(addProductError(error.message)));
};

const deleteProduct = (dayId, eatenProductId) => (dispatch) => {
  dispatch(deleteProductRequest());

  const deletedProduct = { dayId, eatenProductId };
  console.log(axios.defaults.headers.common.Authorization);

  axios
    .delete(`/day`, { data: deletedProduct })
    .then(() => dispatch(deleteProductSuccess(deletedProduct)))
    .catch((error) => dispatch(deleteProductError(error.message)));
};

export { addProduct, deleteProduct };

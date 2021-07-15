import { createReducer } from "@reduxjs/toolkit";
import {
  addProductSuccess,
  deleteProductSuccess,
  getSelectedDay,
  getDayInfoSuccess,
} from "./products.actions";

const ProductsReducer = createReducer(
  { id: "", eatenProducts: [] },
  {
    //   [fetchContactSuccess]: (_, { payload }) => payload,
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      eatenProducts: [...state.eatenProducts, payload.eatenProduct],
    }),
    [deleteProductSuccess]: (state, { payload }) =>({...state,
      eatenProducts: state.eatenProducts.filter(
        (product) => product.id !== payload.eatenProductId
      )}),
    [getDayInfoSuccess]: (state, { payload }) => payload,
  }
);

const selectedDateReducer = createReducer([], {
  [getSelectedDay]: (state, { payload }) => [payload],
});

const getDayInfoReducer = createReducer(
  { id: "", eatenProducts: [] },
  {
    [getDayInfoSuccess]: (state, { payload }) => payload,
  }
);

export { ProductsReducer, selectedDateReducer, getDayInfoReducer };

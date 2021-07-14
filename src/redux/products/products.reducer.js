import { createReducer } from "@reduxjs/toolkit";
import { addProductSuccess, deleteProductSuccess } from "./products.actions";

const ProductsReducer = createReducer([], {
  //   [fetchContactSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) =>
    state.filter(
      (product) => product.eatenProduct.id !== payload.eatenProductId
    ),
});

export { ProductsReducer };

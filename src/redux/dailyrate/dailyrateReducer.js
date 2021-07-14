import { createReducer } from "@reduxjs/toolkit";
import dailyrateActions from "./dailyrateActions";

const initialState = {
  id: null,
  dailyRate: null,
  productsArr: {
    notAllowedProducts: [],
  },
};

const dailyrateReducer = createReducer(initialState, {
  [dailyrateActions.getProductsSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
    productsArr: {
      ...state.productsArr,
      notAllowedProducts: [...payload.notAllowedProducts],
    },
  }),
});

export default dailyrateReducer;

import { createReducer } from "@reduxjs/toolkit";
import { getCurrentUserSuccess, logoutSuccess } from "../auth/auth.actions";
import {
  addProductSuccess,
  deleteProductSuccess,
} from "../products/products.actions";
import { getDailyRateSuccess } from "./dailyrateActions";

const initialState = {
  id: "",
  dailyRate: "",
  summaries: {
    _id: "",
    date: "",
    kcalLeft: "",
    kcalConsumed: "",
    dailyRate: "",
    percentsOfDailyRate: "",
    userId: "",
  },

  notAllowedProducts: [],
};

const dailyrateReducer = createReducer(initialState, {
  [getDailyRateSuccess]: (_, { payload }) => payload,
  [getCurrentUserSuccess]: (state, { payload }) => ({
    ...state,
    notAllowedProducts: payload.userData.notAllowedProducts,
  }),
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries: payload.daySummary,
  }),
  [deleteProductSuccess]: (_, { payload }) => payload,

  [logoutSuccess]: () => initialState,
});

export default dailyrateReducer;

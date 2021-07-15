import { createReducer } from "@reduxjs/toolkit";
import { getCurrentUserSuccess, logoutSuccess } from "../auth/auth.actions";
import {
  addProductSuccess,
  deleteProductSuccess,
  getDayInfoSuccess,
} from "../products/products.actions";
import { getDailyRateSuccess } from "./dailyrateActions";

const initialState = {
  id: "",
  dailyRate: "",
  daySummary: {},
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
  // [getDayInfoSuccess]: (_, { payload }) => ({daySummary: payload.daySummary}),

  [deleteProductSuccess]: (_, { payload }) => payload,

  [logoutSuccess]: () => initialState,
});

export default dailyrateReducer;

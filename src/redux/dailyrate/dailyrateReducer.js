import { createReducer } from "@reduxjs/toolkit";
import { logoutSuccess } from "../auth/auth.actions";
import { addProductSuccess } from "../products/products.actions";
import { getDailyRateSuccess } from "./dailyrateActions";

const initialState = {
  id: "",
  dailyRate: "",
  summaries: [
    {
      _id: "",
      date: "",
      kcalLeft: "",
      kcalConsumed: "",
      dailyRate: "",
      percentsOfDailyRate: "",
      userId: "",
    },
  ],
  notAllowedProducts: [],
};

const dailyrateReducer = createReducer(initialState, {
  [getDailyRateSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    summaries: [...state.summaries, payload.daySummary],
  }),
  [logoutSuccess]: () => initialState,
});

export default dailyrateReducer;

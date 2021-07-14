import { createAction } from "@reduxjs/toolkit";

const getProductsRequest = createAction("dailyrate/getProductsRequest");
const getProductsSuccess = createAction("dailyrate/getProductsSuccess");
const getProductsError = createAction("dailyrate/getProductsError");

const actions = {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
};

export default actions;

import { createAction } from "@reduxjs/toolkit";

const addProductRequest = createAction("products/addProductRequest");
const addProductSuccess = createAction("products/addProductSuccess");
const addProductError = createAction("products/addProductError");

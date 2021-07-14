import { createAction } from "@reduxjs/toolkit";

const addProductRequest = createAction("contacts/addProductRequest");
const addProductSuccess = createAction("contacts/addProductSuccess");
const addProductError = createAction("contacts/addProductError");

const deleteProductRequest = createAction("contacts/deleteContactRequest");
const deleteProductSuccess = createAction("contacts/deleteContactSuccess");
const deleteProductError = createAction("contacts/deleteContactError");

export {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
};

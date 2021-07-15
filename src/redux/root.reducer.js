import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth.reducer";
import {
  ProductsReducer,
  selectedDateReducer,
  getDayInfoReducer,
} from "./products/products.reducer";

import dailyrateReducer from "./dailyrate/dailyrateReducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, auth);

const rootReducer = combineReducers({
  products: ProductsReducer,
  rateInfo: dailyrateReducer,
  selectedDate: selectedDateReducer,

  auth: persistAuthReducer,
  // user: user
});

// user:
// - token
// - notAllowedProducts

// diary:
// - selectedDate
// - eatenProducts
// - daySummary


export default rootReducer;

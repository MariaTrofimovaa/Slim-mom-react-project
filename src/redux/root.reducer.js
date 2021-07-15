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
  // calculator: calculatorReducer,
  rateInfo: dailyrateReducer,
  selectedDate: selectedDateReducer,
  dayInfo: getDayInfoReducer,

  auth: persistAuthReducer,
});

export default rootReducer;

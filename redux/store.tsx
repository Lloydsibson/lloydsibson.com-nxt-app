import { configureStore } from "@reduxjs/toolkit";
import ApiGoogleNewsWOSReducer from "./ApiGoogleNewsWOSRedux";
import ApiStocksWOSReducer from "./ApiStocksWOSRedux";

export const store = configureStore({
  reducer: {
    ApiGoogleNewsWOSStore: ApiGoogleNewsWOSReducer,
    ApiStocksWOSStore: ApiStocksWOSReducer,
  },
});

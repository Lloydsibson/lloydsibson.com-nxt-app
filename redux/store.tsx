import { configureStore } from "@reduxjs/toolkit";
import ApiGoogleNewsWOSReducer from "./ApiGoogleNewsWOSRedux";
import ApiStocksWOSReducer from "./ApiStocksWOSRedux";
import ClientsCurrentTimeReducer from "./ClientsCurrentTime";

export const store = configureStore({
  reducer: {
    ApiGoogleNewsWOSStore: ApiGoogleNewsWOSReducer,
    ApiStocksWOSStore: ApiStocksWOSReducer,
    ClientsCurrentTimeStore: ClientsCurrentTimeReducer,
  },
});

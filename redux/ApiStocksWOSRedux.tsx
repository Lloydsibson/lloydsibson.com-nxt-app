import { createSlice } from "@reduxjs/toolkit";

export const ApiStocksWOSSlice = createSlice({
  name: "ApiStocksWOSStore",
  initialState: {
    ApiStocksWOSState: {
      stockPrice: "N/A",
    },
  },
  reducers: {
    ApiStocksWOSAction: (state, action) => {
      state.ApiStocksWOSState.stockPrice = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ApiStocksWOSAction } = ApiStocksWOSSlice.actions;

export default ApiStocksWOSSlice.reducer;

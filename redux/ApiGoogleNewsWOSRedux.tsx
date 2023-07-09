import { createSlice } from "@reduxjs/toolkit";

export const ApiGoogleNewsWOSSlice = createSlice({
  name: "ApiGoogleNewsWOSStore",
  initialState: {
    ApiGoogleNewsWOSState: {
      googleNews: "Fetching News...",
      googleLink: "0#",
    },
  },
  reducers: {
    ApiGoogleNewsWOSAction: (state, action) => {
      state.ApiGoogleNewsWOSState.googleNews = action.payload;
    },
    ApiGoogleLinkWOSAction: (state, action) => {
      state.ApiGoogleNewsWOSState.googleLink = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ApiGoogleNewsWOSAction, ApiGoogleLinkWOSAction } =
  ApiGoogleNewsWOSSlice.actions;

export default ApiGoogleNewsWOSSlice.reducer;

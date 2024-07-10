import { createSlice } from "@reduxjs/toolkit";

export const ClientsCurrentTimeSlice = createSlice({
  name: "ClientsCurrentTimeStore",
  initialState: {
    ClientsCurrentTimeState: {
      time: "00:00",
    },
  },
  reducers: {
    ClientsCurrentTimeAction: (state, action) => {
      state.ClientsCurrentTimeState.time = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ClientsCurrentTimeAction } = ClientsCurrentTimeSlice.actions;

export default ClientsCurrentTimeSlice.reducer;

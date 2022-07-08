import { createSlice } from "@reduxjs/toolkit";
import { eventsList } from "../data/mockData";

const initialState = eventsList;

export const counterSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    order: (state, action) => {
      state[action.payload[0]].subscribers = state[action.payload[0]].subscribers * 1 + action.payload[1] * 1;
    },
  },
});

export const { order } = counterSlice.actions;

export default counterSlice.reducer;

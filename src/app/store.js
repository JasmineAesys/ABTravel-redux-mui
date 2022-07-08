import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../features/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

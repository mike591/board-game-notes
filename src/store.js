import { configureStore } from "@reduxjs/toolkit";
import awkwardGuestsReducer from "features/awkwardGuests/awkwardGuestsSlice";

export default configureStore({
  reducer: {
    awkwardGuests: awkwardGuestsReducer,
  },
});

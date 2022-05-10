import { configureStore } from "@reduxjs/toolkit";
import planeReducer from "./plane/slice";

const store = configureStore({
  reducer: {
    planeReducer,
  },
});

export default store;

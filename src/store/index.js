import { configureStore } from "@reduxjs/toolkit";
import user from "./user/slice";

const store = configureStore({
  reducer: {
    userReducer: user,
  },
});

export default store;

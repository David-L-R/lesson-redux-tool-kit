import { configureStore } from "@reduxjs/toolkit";
import user from "./user/slice";

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;

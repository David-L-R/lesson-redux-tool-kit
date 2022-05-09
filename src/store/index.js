import { configureStore } from "@reduxjs/toolkit";
import user from "./user/slice";
import posts from "./posts/slice";
import comments from "./comments/slice";

const store = configureStore({
  reducer: {
    user,
    posts,
    comments,
  },
});

export default store;

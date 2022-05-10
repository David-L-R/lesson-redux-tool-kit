import { createSlice } from "@reduxjs/toolkit";
import postsData from "./posts.json";

const initialState = [...postsData];
export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = posts.actions;

export default posts.reducer;

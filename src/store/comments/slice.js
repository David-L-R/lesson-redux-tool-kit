import { createSlice } from "@reduxjs/toolkit";
import comments from "./comments.json";

const initialState = comments;

export const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {},
});

export const {} = commentReducer.actions;

export default commentReducer.reducer;

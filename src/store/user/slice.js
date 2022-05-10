import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "David",
  email: "a@a.com",
  id: 4,
  posts: {
    upvoted: [1, 6, 7, 22, 57, 33, 61, 23],
    downvoted: [2, 8, 44, 87, 64, 24, 41, 62],
    saved: [3, 9, 66, 92],
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = user.actions;

export default user.reducer;

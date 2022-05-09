import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  id: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = user.actions;

export default user.reducer;

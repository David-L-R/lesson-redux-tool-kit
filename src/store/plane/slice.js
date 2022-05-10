import { createSlice } from "@reduxjs/toolkit";

const status = ["manual", "autopilot", "controlled-remotely"];

const initialState = {
  engines: {
    left: false,
    left_center: false,
    right_center: false,
    right: false,
  },
  navigation: status[0],
  thrust: 0,
  totalPower: 0,
};

export const plane = createSlice({
  name: "plane",
  initialState,
  reducers: {
    toggleEngine: (state, action) => {
      state.engines = {
        ...state.engines,
        [action.payload.engine]: !state.engines[action.payload.engine],
      };
    },
    changeNavigation: (state, action) => {
      state.navigation = status[action.payload.status];
    },
  },
});

export const { toggleEngine, changeNavigation } = plane.actions;

export default plane.reducer;

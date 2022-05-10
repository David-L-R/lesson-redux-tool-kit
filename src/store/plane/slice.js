import { createSlice } from "@reduxjs/toolkit";

export const status = ["manual", "autopilot", "controlled-remotely"];

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
    turnThrustUp: (state) => {
      state.thrust = state.thrust + 10;
    },
    turnThrustDown: (state) => {
      state.thrust = state.thrust - 10;
    },
  },
});

export const { toggleEngine, changeNavigation, turnThrustDown, turnThrustUp } =
  plane.actions;

export default plane.reducer;

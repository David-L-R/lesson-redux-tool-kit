import { createSlice } from "@reduxjs/toolkit";

export const status = ["manual", "autopilot", "controlled-remotely"];

const initialState = {
  engines: {
    left: false,
    left_center: false,
    right_center: false,
    right: false,
  },
  navigation: status[0], // status[1] | status[2]
  thrust: 0,
  totalPower: 0,
};

export const plane = createSlice({
  name: "plane",
  initialState,
  reducers: {
    // turnOnLeftEngine: (state) => {
    //   state.engines.left = true;
    // },
    // turnOffLeftEngine: (state) => {
    //   state.engines.left = false;
    // },
    // toggleLeftEngine: (state) => {
    //   state.engines.left = !state.engines.left;
    // },
    toggleEngine: (state, action) => {
      // action.payload => "left" | "left_center" | "right_center" | "right"
      state.engines[action.payload] = !state.engines[action.payload];
      // state.engines["left"] = !state.engines["left"];
    },
    setNavigation: (state, action) => {
      // action.payload => 0 | 1 | 2
      // status[0] | status[1] | status[2] => ["manual", "autopilot", "controlled-remotely"];
      state.navigation = status[action.payload];
    },
    increaseThrust: (state) => {
      state.thrust = state.thrust + 10;
    },
    decreaseThrust: (state) => {
      state.thrust = state.thrust - 10;
    },
  },
});

export const { toggleEngine, setNavigation, increaseThrust, decreaseThrust } =
  plane.actions;

export default plane.reducer;

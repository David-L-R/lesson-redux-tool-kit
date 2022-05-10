// export const selectLeftEngine = (reduxState) =>
//   reduxState.planeReducer.engines.left;

import { status } from "./slice";

export const selectEngines = (reduxState) => reduxState.planeReducer.engines;

export const selectThrust = (reduxState) => reduxState.planeReducer.thrust;

const calculateEnginePower = (engines, thrust) => {
  const enginesStatusList = Object.values(engines);
  const numberOfWorkingEngines = enginesStatusList.reduce(
    (previousValue, currentValue) => previousValue + (currentValue ? 1 : 0),
    0
  );

  //   number of engines on * thrust
  const engineTotal = numberOfWorkingEngines * thrust;
  return engineTotal;
};

const calculateNavigationPower = (navigation, thrust) => {
  let navigationPower = 0;
  if (navigation === "manual") {
    navigationPower = 0;
  } else if (navigation === "autopilot") {
    navigationPower = 50;
  } else if (navigation === "controlled-remotely") {
    navigationPower = thrust * 2;
  }

  return navigationPower;
};

export const selectTotalPower = (reduxState) => {
  const { engines, thrust, navigation } = reduxState.planeReducer;

  const enginePower = calculateEnginePower(engines, thrust);
  const navigationPower = calculateNavigationPower(navigation, thrust);
  return enginePower + navigationPower;
};

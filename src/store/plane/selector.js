import { status } from "./slice";

export const selectEngines = (reduxState) => reduxState.planeReducer.engines;

export const selectNumberOfEnginesWorking = (reduxState) => {
  const { engines } = reduxState.planeReducer;
  const numberOfWorkingEngines = Object.values(engines).reduce(
    (previousValue, currentValue) => {
      return previousValue + (currentValue ? 1 : 0);
    },
    0
  );

  return numberOfWorkingEngines;
};

export const selectNavigationPower = (reduxState) => {
  const { navigation, thrust } = reduxState.planeReducer;

  let navigationPower;
  switch (navigation) {
    case status[1]:
      navigationPower = 50;
      break;
    case status[2]:
      navigationPower = thrust * 2;
      break;
    default:
      navigationPower = 0;
      break;
  }

  return navigationPower;
};

export const selectThrust = (reduxState) => reduxState.planeReducer.thrust;

export const selectTotalPower = (reduxState) => {
  const { engines, thrust, navigation } = reduxState.planeReducer;

  const enginePower = Object.values(engines).reduce(
    (previousValue, currentValue) => {
      console.log({ previousValue, currentValue, thrust });
      return previousValue + (currentValue ? thrust : 0);
    },
    0
  );

  console.log({ enginePower });

  let navigationPower;

  switch (navigation) {
    case status[1]:
      navigationPower = 50;
      break;
    case status[2]:
      navigationPower = thrust * 2;
      break;
    default:
      navigationPower = 0;
      break;
  }

  return enginePower + navigationPower;
};

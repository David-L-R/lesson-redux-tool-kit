import { useDispatch, useSelector } from "react-redux";
import {
  selectEngines,
  selectNavigationPower,
  selectNumberOfEnginesWorking,
  selectThrust,
} from "../../store/plane/selector";
import { turnThrustDown, turnThrustUp } from "../../store/plane/slice";

export const Thrust = ({ power }) => {
  const dispatch = useDispatch();
  const thrust = useSelector(selectThrust);
  const numberOfWorkingEngines = useSelector(selectNumberOfEnginesWorking);
  const navigationPower = useSelector(selectNavigationPower);
  return (
    <div className='thrust'>
      <button
        disabled={thrust === 0}
        onClick={() => dispatch(turnThrustDown())}
      >
        -
      </button>
      Thrust: {thrust}
      <button
        disabled={
          navigationPower + numberOfWorkingEngines * (thrust + 10) > 300 ||
          thrust >= 100
        }
        onClick={() => dispatch(turnThrustUp())}
      >
        +
      </button>
    </div>
  );
};

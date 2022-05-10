import { useDispatch, useSelector } from "react-redux";
import { selectThrust, selectTotalPower } from "../../store/plane/selector";
import { decreaseThrust, increaseThrust } from "../../store/plane/slice";

export const Thrust = () => {
  const dispatch = useDispatch();
  const thrust = useSelector(selectThrust);

  return (
    <div className='thrust'>
      <button
        disabled={thrust === 0}
        onClick={() => dispatch(decreaseThrust())}
      >
        -
      </button>
      Thrust: {thrust}
      <button
        disabled={thrust === 100}
        onClick={() => dispatch(increaseThrust())}
      >
        +
      </button>
    </div>
  );
};

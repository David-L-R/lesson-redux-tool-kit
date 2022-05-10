import { useDispatch, useSelector } from "react-redux";
import { selectEngines } from "../../store/plane/selector";
import { toggleEngine } from "../../store/plane/slice";

import "./engine.css";
export const Engine = ({ power }) => {
  const dispatch = useDispatch();
  const engines = useSelector(selectEngines);

  return (
    <div className='button-container'>
      <button
        disabled={!engines?.left && power + 100 > 300}
        onClick={() => dispatch(toggleEngine({ engine: "left" }))}
      >
        Left Engine {engines?.left ? "TURN OFF" : "TURN ON"}
      </button>
      <button
        disabled={!engines?.left_center && power + 100 > 300}
        onClick={() => dispatch(toggleEngine({ engine: "left_center" }))}
      >
        Left Center Engine {engines?.left_center ? "TURN OFF" : "TURN ON"}
      </button>
      <button
        disabled={!engines?.right_center && power + 100 > 300}
        onClick={() => dispatch(toggleEngine({ engine: "right_center" }))}
      >
        Right Center Engine {engines?.right_center ? "TURN OFF" : "TURN ON"}
      </button>
      <button
        disabled={!engines?.right && power + 100 > 300}
        onClick={() => dispatch(toggleEngine({ engine: "right" }))}
      >
        Right Engine {engines?.right ? "TURN OFF" : "TURN ON"}
      </button>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { selectEngines } from "../../store/plane/selector";
import { toggleEngine } from "../../store/plane/slice";

import "./engine.css";
export const Engine = () => {
  const dispatch = useDispatch();
  const engines = useSelector(selectEngines);

  console.log(engines);

  console.log({
    left: engines?.left,
    left_center: engines?.left_center,
    right_center: engines?.right_center,
    right: engines?.right,
  });

  return (
    <div className='button-container'>
      <button onClick={() => dispatch(toggleEngine({ engine: "left" }))}>
        Left Engine {engines?.left ? "ON" : "OFF"}
      </button>
      <button onClick={() => dispatch(toggleEngine({ engine: "left_center" }))}>
        Left Center Engine {engines?.left_center ? "ON" : "OFF"}
      </button>
      <button
        onClick={() => dispatch(toggleEngine({ engine: "right_center" }))}
      >
        Right Center Engine {engines?.right_center ? "ON" : "OFF"}
      </button>
      <button onClick={() => dispatch(toggleEngine({ engine: "right" }))}>
        Right Engine {engines?.right ? "ON" : "OFF"}
      </button>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { selectEngines, selectLeftEngine } from "../../store/plane/selector";
import {
  toggleEngine,
  toggleLeftEngine,
  turnOffLeftEngine,
  turnOnLeftEngine,
} from "../../store/plane/slice";
import "./engine.css";
export const Engine = () => {
  const dispatch = useDispatch();
  // const left = useSelector(selectLeftEngine);
  const engines = useSelector(selectEngines);

  return (
    <div className='button-container'>
      <button
        onClick={() => {
          // left ? dispatch(turnOffLeftEngine()) : dispatch(turnOnLeftEngine());
          dispatch(toggleEngine("left"));
        }}
      >
        Left Engine Turn {engines.left ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("left_center"));
        }}
      >
        Left Center Engine {engines.left_center ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("right_center"));
        }}
      >
        Right Center Engine {engines.right_center ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("right"));
        }}
      >
        Right Engine {engines.right ? "OFF" : "ON"}
      </button>
    </div>
  );
};

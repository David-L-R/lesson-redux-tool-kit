import { useDispatch, useSelector } from "react-redux";
import { selectThrust } from "../../store/plane/selector";
import { changeNavigation } from "../../store/plane/slice";

export const Navigator = ({ power }) => {
  const dispatch = useDispatch();
  const thrust = useSelector(selectThrust);
  return (
    <select
      onChange={(e) => dispatch(changeNavigation({ status: e.target.value }))}
    >
      <option value={0}>Manual</option>
      <option value={1} disabled={power + 50 > 300}>
        Auto pilot
      </option>
      <option value={2} disabled={power + thrust * 2 > 300}>
        Remote
      </option>
    </select>
  );
};

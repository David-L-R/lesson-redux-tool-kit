import { useDispatch } from "react-redux";
import { setNavigation, status } from "../../store/plane/slice";

export const Navigator = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState("")
  // <input value={name} onChange={(event) => setName(event.target.value)}/>

  return (
    <select onChange={(event) => dispatch(setNavigation(event.target.value))}>
      <option value={0}>Manual</option>
      <option value={1}>Auto pilot</option>
      <option value={2}>Remote</option>
    </select>
  );
};

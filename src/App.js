import { useSelector } from "react-redux";
import { /* selectState, */ selectUser } from "./store/user/selector";

function App() {
  // get user information here

  const user = useSelector(selectUser);
  // const state = useSelector(selectState);

  return (
    <div className='App'>
      <div>
        {/* <h1>Welcome {state.user.name}</h1> */}
        {/* <h2>{state.user.email}</h2> */}
        <h1>Welcome {user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    </div>
  );
}

export default App;

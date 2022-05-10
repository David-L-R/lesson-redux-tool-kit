import "./dashboard.css";
import { Engine, Navigator, Thrust } from "../index";

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <h3>Total power: </h3>
      <Engine />
      <Navigator />
      <Thrust />
    </div>
  );
};

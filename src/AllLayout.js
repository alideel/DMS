/* eslint-disable react/function-component-definition */
import { Outlet } from "react-router-dom";

const AllLayout = () => (
  <main className="App">
    <Outlet />
  </main>
);
export default AllLayout;

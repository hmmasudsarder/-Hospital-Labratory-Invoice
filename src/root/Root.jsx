import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

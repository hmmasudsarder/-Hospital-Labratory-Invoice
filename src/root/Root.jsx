import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

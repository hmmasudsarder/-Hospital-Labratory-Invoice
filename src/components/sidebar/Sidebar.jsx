// Importing necessary assets and icons
import logo from "../../assets/logo-dark.png";
import { FaAngleRight, FaCodeBranch, FaMapMarkedAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaCriticalRole } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBuromobelexperte } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sidebar component definition
const Sidebar = () => {
  return (
    // Sidebar container with a white background and width of 15%
    <div className="bg-white w-[15%] border-r border-gray-200">
      {/* Logo section */}
      <div className="logo pt-10 px-4">
        <Link to="/">
          <img className="cursor-pointer" src={logo} alt="" />
        </Link>
      </div>
      {/* Sidebar content section */}
      <div>
        {/* Sidebar menu list */}
        <ul className="py-10">
          {/* Divider */}
          <hr />
          {/* Custom section label */}
          <p>CUSTOM</p>
          {/* Menu items */}
          {/* Page menu item */}
          <li className="pb-4 cursor-pointer flex  items-center text-xl">
            <FaFileDownload /> <span className="ml-2 w-[150px]">Pages</span>
            <FaAngleRight />
          </li>
          {/* Divider */}
          <hr />
          {/* UI Elements menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaCriticalRole />{" "}
            <span className="ml-2 w-[150px]">UI Elements</span>
            <FaAngleRight />
          </li>
          {/* Widgets menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaGift /> <span className="ml-2 w-[150px]">Widgets</span>
            <FaAngleRight />
          </li>
          {/* Icons menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaGalacticRepublic /> <span className="ml-2 w-[150px]">Icons</span>
            <FaAngleRight />
          </li>
          {/* Forms menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaBookmark /> <span className="ml-2 w-[150px]">Forms</span>
            <FaAngleRight />
          </li>
          {/* Charts menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaChartBar /> <span className="ml-2 w-[150px]">Charts</span>
            <FaAngleRight />
          </li>
          {/* Tables menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaBuromobelexperte />{" "}
            <span className="ml-2 w-[150px]">Tables</span>
            <FaAngleRight />
          </li>
          {/* Maps menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaMapMarkedAlt /> <span className="ml-2 w-[150px]">Maps</span>
            <FaAngleRight />
          </li>
          {/* Menu Levels menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaCodeBranch /> <span className="ml-2 w-[150px]">Menu Levels</span>
            <FaAngleRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Exporting Sidebar component as default
export default Sidebar;

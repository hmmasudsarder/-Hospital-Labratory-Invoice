// Importing necessary assets and icons
import { useState } from "react";
import logo from "../../assets/logo-dark.png";
import {
  FaAngleDown,
  FaAngleRight,
  FaCodeBranch,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaCriticalRole } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBuromobelexperte } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

// Sidebar component definition
const Sidebar = () => {
  const [showFormsOptions, setShowFormsOptions] = useState(false);
  const [showTablesOptions, setShowTablesOptions] = useState(false);

  const toggleFormsOptions = () => {
    setShowFormsOptions(!showFormsOptions);
  };

  const toggleTablesOptions = () => {
    setShowTablesOptions(!showTablesOptions);
  };

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
          <li
            className="py-4 cursor-pointer flex  items-center text-xl"
            onClick={toggleFormsOptions}
          >
            <FaBookmark /> <span className="ml-2 w-[150px]">Forms</span>
            {showFormsOptions ? <FaAngleDown /> : <FaAngleRight />}
          </li>
          <ul
            className={`transition-max-height ${
              showFormsOptions
                ? "max-h-[200px] transition-all duration-500 ease-in"
                : "max-h-0 overflow-hidden transition-all duration-500 ease-out"
            } cursor-pointer`}
          >
            <NavLink className="no-underline text-black" to="basicform">
              <li className="py-1 hover:text-blue-600">Basic Form</li>
            </NavLink>
            <NavLink className="no-underline text-black" to="validationForm">
              <li className="py-1 hover:text-blue-600">Validation</li>
            </NavLink>
            <li className="py-1">Advanced</li>
            <li className="py-1">Editors</li>
            <li className="py-1">File Upload</li>
          </ul>

          {/* Charts menu item */}
          <li className="py-4 cursor-pointer flex  items-center text-xl">
            <FaChartBar /> <span className="ml-2 w-[150px]">Charts</span>
            <FaAngleRight />
          </li>
          {/* Tables menu item */}
          <li
            className="py-4 cursor-pointer flex  items-center text-xl"
            onClick={toggleTablesOptions}
          >
            <FaBuromobelexperte />{" "}
            <span className="ml-2 w-[150px]">Tables</span>
            {showTablesOptions ? <FaAngleDown /> : <FaAngleRight />}
          </li>
          <ul
            className={`transition-max-height ${
              showTablesOptions
                ? "max-h-[200px] transition-all duration-500 ease-in"
                : "max-h-0 overflow-hidden transition-all duration-500 ease-out"
            } cursor-pointer`}
          >
            <li className="py-1 hover:text-blue-600">Basic Table</li>
            <NavLink className="no-underline text-black" to="advancedTables">
              <li className="py-1 hover:text-blue-600">Advanced Table</li>
            </NavLink>
          </ul>
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

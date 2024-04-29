import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Importing necessary icons from react-icons/fa
import Navbar from "../navbar/Navbar"; // Importing the Navbar component
import { BsArrowDownUp } from "react-icons/bs";

const AdvancedTables = () => {
  return (
    // Container for AdvancedTables component with specified width
    <div className="w-[85%]">
      <Navbar /> {/* Rendering the Navbar component */}
      {/* Container for the table with specified styling */}
      <div className="bg-white w-[95%] mx-auto my-4 rounded shadow p-4">
        {/* Section for table title and description */}
        <div>
          <h2>SEARCH</h2>
          <p>A Table allowing Search</p>
        </div>
        {/* Section for search input */}
        <div className="py-4">
          <label className="text-xl" htmlFor="search">
            Search:
          </label>
          <input
            className="px-4 py-2 bg-gray-200 outline-none rounded-md ml-2 border border-gray-200" // Styling for search input
            type="text"
            placeholder="60 records..."
          />
        </div>

        {/* Container for scrollable table */}
        <div className="overflow-x-auto">
          {/* Table element with table headers and data */}
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>
                  <span className="flex items-center gap-x-2">
                    <BsArrowDownUp />
                    Name
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-x-2">
                    <BsArrowDownUp />
                    Phone Number
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-x-2">
                    <BsArrowDownUp />
                    Age
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-x-2">
                    <BsArrowDownUp />
                    Company
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows with data */}
              <tr>
                <th className="font-sans">1</th>
                <td>Burt</td>
                <td className="font-sans">+(8756876)7546757</td>
                <td className="font-sans">32</td>
                <td>Microsoft</td>
              </tr>
              <tr>
                <th className="font-sans">2</th>
                <td>Burt</td>
                <td className="font-sans">+(8756876)7546757</td>
                <td className="font-sans">34</td>
                <td>Microsoft</td>
              </tr>
              <tr>
                <th className="font-sans">3</th>
                <td>Burt</td>
                <td className="font-sans">+(8756876)7546757</td>
                <td className="font-sans">40</td>
                <td>Microsoft</td>
              </tr>
              <tr>
                <th className="font-sans">4</th>
                <td>Burt</td>
                <td className="font-sans">+(8756876)7546757</td>
                <td className="font-sans">50</td>
                <td>Microsoft</td>
              </tr>
              <tr>
                <th className="font-sans">5</th>
                <td>Burt</td>
                <td className="font-sans">+(8756876)7546757</td>
                <td className="font-sans">20</td>
                <td>Microsoft</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Container for display and pagination controls */}
        <div className="flex justify-between items-center py-4">
          <div>
            <span className="text-xl">Display:</span>
            {/* Dropdown for selecting number of records per page */}
            <select className="select select-bordered max-w-xs ml-2">
              <option disabled selected>
                5
              </option>
              <option>7</option>
              <option>10</option>
            </select>
            {/* Text indicating current page */}
            <span className="text-xl ml-4">Page 1 of 12</span>
            {/* Input for navigating to a specific page */}
            <span className="text-xl ml-4">
              Go to page:{" "}
              <input
                className="w-[60px] px-2 py-2 outline-none border rounded-md"
                type="text"
              />
            </span>
          </div>
          {/* Controls for navigating between pages */}
          <div className="flex gap-x-4 items-center font-sans">
            <FaAngleLeft /> {/* Icon for navigating to previous page */}
            {/* Buttons for displaying page numbers */}
            <button className=" bg-blue-400 rounded-full w-[30px] h-[40px] text-white">
              1
            </button>
            <button className=" w-[30px] h-[40px] ">2</button>
            <button className=" w-[30px] h-[40px] ">3</button>
            <button className=" w-[30px] h-[40px] ">4</button>
            <button className=" w-[30px] h-[40px] ">5</button>
            <span className="mt-2">...</span>
            <button className="w-[30px] h-[40px] ">12</button>
            <FaAngleRight /> {/* Icon for navigating to next page */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTables;

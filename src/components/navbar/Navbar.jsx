import avatar from "../../assets/avatar-1.jpg"; // Importing the avatar image

import {
  FaAlignJustify,
  FaBasketballBall,
  FaBellSlash,
  FaBorderAll,
  FaExpand,
  FaSearch, // Importing necessary icons from react-icons/fa
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa"; // Importing additional icon from react-icons/fa
import { GiAbstract016 } from "react-icons/gi"; // Importing icon from react-icons/gi

const Navbar = () => {
  return (
    // Navbar container with flex layout, spaced between, centered items, with specified height, width, and background color
    <div className="flex justify-between items-center h-[70px] w-[100%] bg-white px-6 text-black">
      {/* Left section of the Navbar containing menu icon, text, and dropdown icon */}
      <div className="flex items-center gap-x-3 text-xl">
        <FaAlignJustify /> {/* Menu icon */}
        <span>Create New</span> {/* Text */}
        <FaAngleDown /> {/* Dropdown icon */}
      </div>
      {/* Right section of the Navbar containing search bar, various icons, avatar, username, and dropdown icon */}
      <div className="flex gap-x-6 items-center">
        {/* Search bar with input field and search icon */}
        <div className="relative flex items-center mr-[20px]">
          <input
            className="bg-gray-200 pl-8 pr-4 py-2 rounded outline-none" // Styling for input field
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="absolute right-0 mr-2" /> {/* Search icon */}
        </div>
        <FaExpand className="text-2xl" /> {/* Expand icon */}
        <FaBorderAll className="text-2xl" /> {/* BorderAll icon */}
        <FaBasketballBall className="text-2xl" /> {/* BasketballBall icon */}
        <FaBellSlash className="text-2xl" /> {/* BellSlash icon */}
        <img className="w-[40px] rounded-full" src={avatar} alt="" />{" "}
        {/* Avatar image */}
        <span className="flex items-center">
          Nik Patel <FaAngleDown /> {/* Username with dropdown icon */}
        </span>
        <GiAbstract016 className="text-2xl" /> {/* Abstract icon */}
      </div>
    </div>
  );
};

export default Navbar;

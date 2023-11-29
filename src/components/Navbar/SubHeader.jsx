import React from "react";
import { NavLink } from "react-router-dom";
// import { AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";
// import { GoHome } from "react-icons/go";
import {BsBagPlus} from "react-icons/bs"

const SubHeader = () => {
  return (
    <nav className="flex justify-evenly items-center md:justify-center md:gap-20 lg:gap-40
    py-3 cursor-pointer text-xs md:text-sm">
      {/* <NavLink to="home">
        <span className="relative group">
          <span className="flex items-center justify-center gap-1">
            <span className="text-base md:text-xl">
              <GoHome />
            </span>
            <span className="">Home</span>
          </span>
          <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-purple-500 transition-all group-hover:w-full"></span>
        </span>
      </NavLink> */}
      <NavLink to="/">
        <span className="relative group">
        <span className="flex items-center justify-center gap-1">
            <span className="text-base md:text-xl">
              <BsBagPlus />
            </span>
            <span className="">Products</span>
          </span>
          <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-purple-500 transition-all group-hover:w-full"></span>
        </span>
      </NavLink>
      {/* <p className="relative group">
        <span className="flex items-center justify-center gap-1">
          <span className="text-base md:text-xl">
            <AiOutlineInfoCircle />
          </span>
          <span className="">About</span>
        </span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-purple-500 transition-all group-hover:w-full"></span>
      </p>
      <p className="relative group">
      <span className="flex items-center justify-center gap-1">
          <span className="text-base md:text-xl">
            <AiOutlineMail />
          </span>
          <span className="">Contact Us</span>
        </span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-purple-500 transition-all group-hover:w-full"></span>
      </p> */}
    </nav>
  );
};

export default SubHeader;

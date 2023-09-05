import React from "react";
import { NavLink } from "react-router-dom";
const SubHeader = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-8 cursor-pointer text-xs md:px-24 lg:px-80 md:text-sm">
      <NavLink to="/">
      <p className="relative group">
        <span>Home</span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-pink-500 transition-all group-hover:w-full"></span>
      </p>
      </NavLink>
      <NavLink to="/products">
      <p className="relative group">
        <span>Products</span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-pink-500 transition-all group-hover:w-full"></span>
      </p>
      </NavLink>
      <p className="relative group">
        <span>About</span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-pink-500 transition-all group-hover:w-full"></span>
      </p>
      <p className="relative group">
        <span>Contact Us</span>
        <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-pink-500 transition-all group-hover:w-full"></span>
      </p>
    </nav>
  );
};

export default SubHeader;

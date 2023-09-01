import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingBag, FiHeart, FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const NavigationIcons = () => {
  return (
    <div className="flex items-center gap-2 text-2xl lg:text-3xl lg:gap-5 lg:ml-4 cursor-pointer">
      <NavLink to="/cart">
        <div className="relative py-2">
          <div className="t-0 absolute left-3 lg:left-4">
            <p className="flex h-3 w-3 items-center justify-center rounded-full bg-purple-500 p-2 lg:p-3 lg:text-sm text-xs text-white font-bold">
              {3}
            </p>
          </div>
          <FiShoppingBag />
        </div>
      </NavLink>
      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <FiHeart />
      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <FiSettings />
      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <GoPerson />
    </div>
  );
};

export default NavigationIcons;

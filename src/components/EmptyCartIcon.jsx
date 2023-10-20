import React from "react";
import { NavLink } from "react-router-dom";

//Icons
import { FaPlus } from "react-icons/fa";
import { FiShoppingBag, FiHeart } from "react-icons/fi";

const EmptyCartIcon = ({ Icon }) => {
  return (
    <>
      <NavLink
        to="/products"
        className="w-7/12 h-1/3 flex justify-center items-center border-2 rounded-md hover:shadow-md hover:scale-110"
      >
        <main className="relative cursor-pointer">
          {Icon === "FaPlus" ? (
            <>
              <FaPlus className="text-9xl border-4 rounded-full border-dashed border-purple-300 p-8 text-purple-600 " />
              <FiShoppingBag className="absolute bottom-0 text-3xl bg-white right-3 text-purple-800" />
            </>
          ) : (
            <>
              <FiHeart className="text-9xl border-4 py-6 rounded-full border-dashed border-purple-300  text-purple-600 flex text-center" />
              <FaPlus className="absolute bottom-0 text-3xl bg-white right-3 text-purple-800 rounded-full" />
            </>
          )}
        </main>
      </NavLink>
    </>
  );
};

export default EmptyCartIcon;

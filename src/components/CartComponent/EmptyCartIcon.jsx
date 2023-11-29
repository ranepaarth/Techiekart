import React from "react";
import { NavLink } from "react-router-dom";

//Icons
import { FaPlus } from "react-icons/fa";
import { FiShoppingBag, FiHeart } from "react-icons/fi";
import PropTypes from 'prop-types'

const EmptyCartIcon = ({ Icon }) => {
  return (
      <NavLink
        to="/"
        className="w-[400px] h-1/3 flex justify-center items-center border-2 rounded-md hover:shadow-md lg:hover:shadow-none  hover:scale-110"
      >
        <main className="relative cursor-pointer">
          {Icon === "FaPlus" ? (
            <>
              <FaPlus className="text-9xl border-4 rounded-full border-dashed border-purple-300 p-8 text-purple-600 " />
              <FiShoppingBag className="absolute bottom-0 text-3xl bg-white right-3 text-purple-800" />
            </>
          ) : (
            <span>
              <FiHeart className="text-9xl border-4 py-6 rounded-full border-dashed border-purple-300  text-purple-600 flex text-center" />
              <FaPlus className="absolute bottom-0 text-3xl bg-white right-3 text-purple-800 rounded-full" />
            </span>
          )}
        </main>
      </NavLink>
  );
};

EmptyCartIcon.propTypes  = {
  Icon: PropTypes.string,
}

export default EmptyCartIcon;

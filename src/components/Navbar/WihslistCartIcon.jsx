import { Fade, Tooltip } from "@mui/material";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useWishlistContext } from "../../context/wishlistContext";

const WihslistCartIcon = () => {
  const { wishListCart } = useWishlistContext();
  return (
    <Tooltip
      title="WishList"
      placement="bottom"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <NavLink to="/wishList">
        <span className={`relative py-2 text-xl pt-6 cursor-pointer`}>
          <div className="t-0 absolute left-3 lg:left-4">
            <p className="flex h-3 w-3 items-center justify-center rounded-full bg-red-400 p-2 lg:p-3 lg:text-sm text-xs text-white border-red-500 font-bold">
              {wishListCart.length ? wishListCart.length : 0}
            </p>
          </div>
          <span className="text-2xl lg:text-3xl">
            {wishListCart.length ? (
              <FaHeart className="text-red-600" />
            ) : (
              <FiHeart />
            )}
          </span>
        </span>
      </NavLink>
    </Tooltip>
  );
};

export default WihslistCartIcon;

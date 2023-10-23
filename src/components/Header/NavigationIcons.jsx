import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BsFillPersonCheckFill, BsFillPersonPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiSettings, FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wishListContext";

import Fade from "@mui/material/Fade";

import Tooltip from "@mui/material/Tooltip";

const NavigationIcons = () => {
  const { cart } = useCartContext();
  const { wishListCart } = useWishlistContext();
  let wishListCartLength;
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (wishListCart.length > 0) {
    wishListCartLength = true;
  } else wishListCartLength = false;
  return (
    <div className="flex items-center gap-2 text-2xl lg:text-3xl lg:gap-5 lg:ml-4 cursor-pointer">
      <Tooltip
        title="Cart"
        placement="bottom"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <NavLink to="/cart">
          <div className="relative py-2">
            <div className="t-0 absolute left-3 lg:left-4">
              <p className="flex h-3 w-3 items-center justify-center rounded-full bg-purple-500 p-2 lg:text-sm text-xs text-white font-bold border-purple-500 outline-purple-500 outline outline-1 ">
                {cart.length}
              </p>
            </div>
            {/* <Tooltip data-tooltip-content="Cart">
            </Tooltip> */}

            <FiShoppingBag />
          </div>
        </NavLink>
      </Tooltip>

      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <Tooltip
        title="WishList"
        placement="bottom"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <NavLink to="/wishList">
          <span
            className={`relative py-2 text-xl pt-6 cursor-pointer ${
              wishListCartLength ? "text-red-600" : ""
            }`}
          >
            <div className="t-0 absolute left-3 lg:left-4">
              <p className="flex h-3 w-3 items-center justify-center rounded-full bg-white p-2 lg:text-sm text-xs text-red-500 outline-red-500 outline outline-1 border-red-500 font-bold">
                {wishListCart.length ? wishListCart.length : 0}
              </p>
            </div>
            <span className="text-2xl lg:text-3xl">
              {wishListCartLength ? <FaHeart /> : <FiHeart />}
            </span>
          </span>
        </NavLink>
      </Tooltip>
      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <FiSettings />
      <div className="lg:w-[1px] lg:h-[20px] lg:bg-neutral-300"></div>
      <Tooltip
        title={`${isAuthenticated?"Logout":"Login"}`}
        placement="bottom"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
      <span
        className={`${
          isAuthenticated ? "bg-green-500" : "bg-red-500"
        } p-2 rounded-full`}
      >
        {isAuthenticated ? (
          <BsFillPersonCheckFill
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="text-green-100"
          />
        ) : (
          <BsFillPersonPlusFill
            onClick={() => loginWithRedirect()}
            className="text-red-100"
          />
        )}
      </span>
      </Tooltip>
    </div>
  );
};

export default NavigationIcons;

import { Fade, Tooltip } from "@mui/material";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const ShoppingBagIcon = () => {
  const { cart } = useCartContext();
  return (
    <Tooltip
      title="Cart"
      placement="bottom"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <NavLink to="/cart">
        <div className="relative py-2">
          <div className="t-0 absolute left-3 lg:left-4">
            <p className="flex h-3 w-3 items-center justify-center rounded-full bg-purple-500 p-2 lg:p-3 lg:text-sm text-xs text-white font-bold border-purple-500 outline-purple-500 outline outline-1 ">
              {cart.length}
            </p>
          </div>
          <FiShoppingBag />
        </div>
      </NavLink>
    </Tooltip>
  );
};

export default ShoppingBagIcon;

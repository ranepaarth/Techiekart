import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { useWishlistContext } from "../../context/wishlistContext";

const HeartIcon = ({ currElem }) => {
  const { addToWishList, removeFromWishList, wishListCart } =
    useWishlistContext();

  const addToWishListFunction = (currElem) => {
    addToWishList(currElem);
  };

  const removeFromWishListFunction = (id) => {
    removeFromWishList(id);
  };

  const checkIfExists = () => {
    const idArray = [];
    let wishListProduct = wishListCart.find((product) => {
      if (!idArray.includes(product.id)) idArray.push(product.id);
    });
    return { idArray };
  };
  return (
    <span className="hover:bg-red-100 hover:text-red-600 rounded-full p-2">
      {checkIfExists().idArray.includes(currElem.id) ? (
        <Tooltip
          title="Remove from Wishlist"
          placement="bottom"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <span
            onClick={() => {
              removeFromWishListFunction(currElem.id);
            }}
          >
            <span className="text-red-600">
              <FaHeart />
            </span>
          </span>
        </Tooltip>
      ) : (
        <Tooltip
          title="Add to Wishlist"
          placement="bottom"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <span
            onClick={() => {
              addToWishListFunction(currElem);
            }}
          >
            <span>
              <FiHeart />
            </span>
          </span>
        </Tooltip>
      )}
    </span>
  );
};

export default HeartIcon;

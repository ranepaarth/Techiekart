import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wishlistContext";

import { Fade, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

const WishListItem = ({ item }) => {
  const { removeFromWishList } = useWishlistContext();
  const { addToCart } = useCartContext();
  const { getProductDetails} = useProductContext();
  const { thumbnail, id, title } = item;

  // console.log(item)

  return (
    <>
      <figure
        onClick={() => {
          getProductDetails(item);
        }}
        onKeyDown={() => {
          getProductDetails(item);
        }}
      >
        <img
          src={thumbnail}
          alt={title}
          className=" w-48 h-28 cursor-pointer lg:h-32"
        />
      </figure>
      <footer className="flex justify-between items-center gap-2  pt-2">
        <button
          className="text-center w-[90%] bg-orange-400  p-1 hover:scale-105"
          onClick={() => {
            addToCart(item);
            removeFromWishList(id);
          }}
        >
          Add to Cart
        </button>
        <Tooltip
          title="Remove"
          placement="bottom"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <button
            className="flex items-center text-red-600 hover:scale-125"
            onClick={() => {
              removeFromWishList(id);
            }}
          >
            <AiFillDelete className="text-2xl" />
          </button>
        </Tooltip>
      </footer>
    </>
  );
};

WishListItem.propTypes = {
  item:PropTypes.object,
}

export default WishListItem;

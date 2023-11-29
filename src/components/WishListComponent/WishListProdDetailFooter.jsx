import { Fade, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wishlistContext";

const WishListProdDetailFooter = ({ details}) => {
  const { addToCart } = useCartContext();
  const { removeFromWishList } = useWishlistContext();
  const { closeProductModal } = useProductContext();
  return (
    <footer className=" flex flex-col gap-3">
      <div className="flex justify-end">
        <Tooltip
          title="Remove From Wishlist"
          placement="bottom"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <button
            className="flex items-center text-red-600 hover:scale-125"
            onClick={() => {
              removeFromWishList(details?.id);
              closeProductModal();
            }}
          >
            <AiFillDelete className="text-2xl" />
          </button>
        </Tooltip>
      </div>
      <button
        className="bg-orange-400 py-2 rounded-lg shadow-md text-center cursor-pointer capitalize hover:scale-105"
        onClick={() => {
          removeFromWishList(details?.id);
          addToCart(details);
          closeProductModal();
        }}
      >
        <span className="flex items-center justify-center gap-2 font-medium">
          <IoBagAddOutline className="text-xl" />
          add to cart
        </span>
      </button>
    </footer>
  );
};

WishListProdDetailFooter.propTypes = {
  details: PropTypes.object,
  id: PropTypes.number,
}

export default WishListProdDetailFooter;

import React from "react";

import ProductDetailModal from '../ProductCard/ProductDetailModal';

import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wishListContext";

import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { Fade, Tooltip } from "@mui/material";

const WishListItem = ({ item }) => {
  const { removeFromWishList } = useWishlistContext();
  const { addToCart } = useCartContext();
  const {
    getProductDetails,
    productDetails,
    openProductModal,
    closeProductModal,
    show,
  } = useProductContext();

  if (show)
    return (
      <>
        <ProductDetailModal
          details={productDetails}
          closeProductDetails={closeProductModal}
        />
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => closeProductModal()}
        >
          <AiOutlineClose />
        </button>
      </>
    );
  else
    return (
      <>
        <figure
          onClick={() => {
            getProductDetails(item);
            openProductModal();
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className=" w-48 h-28 cursor-pointer lg:h-32"
          />
        </figure>
        <footer className="flex justify-between items-center gap-2  pt-2">
          <button
            className="text-center w-[90%] bg-orange-400  p-1 hover:scale-105"
            onClick={() => {
              addToCart(item);
              removeFromWishList(item.id);
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
                removeFromWishList(item.id);
              }}
            >
              <AiFillDelete className="text-2xl" />
            </button>
          </Tooltip>
        </footer>
      </>
    );
};

export default WishListItem;

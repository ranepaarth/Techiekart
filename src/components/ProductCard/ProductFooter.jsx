import React from "react";
import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";
import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/cartContext";


import PropTypes from 'prop-types'

const ProductFooter = ({ currElem }) => {
  const { openProductModal, getProductDetails } = useProductContext();

  const { cart, addToCart } = useCartContext();

  const productExists = cart.find((product) => {
    if (product.id === currElem.id) return true;
  });

  return (
    <>
      {productExists ? (
        <span className="flex justify-center">
          <button
            className="bg-orange-400 py-2 rounded-md w-full font-medium flex justify-center gap-2"
          >
            <IoBagCheckOutline className="text-xl" />
            Added Successfully
          </button>
        </span>
      ) : (
        <span className="flex justify-center">
          <button
            className="flex justify-center gap-2 bg-orange-400 py-2 rounded-md hover:scale-105 w-full"
            onClick={() => {
              addToCart(currElem);
            }}
          >
            <IoBagAddOutline className="text-xl" />
            Add To Cart
          </button>
        </span>
      )}
    </>
  );
};

ProductFooter.propTypes = {
  currElem: PropTypes.object,
}

export default ProductFooter;

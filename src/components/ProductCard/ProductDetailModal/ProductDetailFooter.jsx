import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { useCartContext } from "../../../context/cartContext";
import { useProductContext } from "../../../context/ProductContext";

import PropTypes from 'prop-types'

const ProductDetailFooter = ({details}) => {
  const { cart, addToCart, removeProduct } = useCartContext();
  const { closeProductModal } = useProductContext();

  const productExists = cart.find((product) => {
    if (product.id === details?.id) return true;
  });
  return (
    <footer className="mt-14 flex flex-col gap-3">
      {productExists ? (
        <span className="flex justify-center">
          <button
            className="bg-red-400 py-2 text-white rounded-md hover:scale-105 w-full font-medium flex justify-center gap-2 capitalize"
            onClick={() => {
              removeProduct(details?.id);
            }}
          >
            <AiOutlineDelete className="text-xl" />
            remove from cart
          </button>
        </span>
      ) : (
        <span className="flex justify-center">
          <button
            className="flex justify-center gap-2 bg-orange-400 py-2 rounded-md hover:scale-105 w-full capitalize"
            onClick={() => {
              addToCart(details);
              closeProductModal();
            }}
          >
            <IoBagAddOutline className="text-xl" />
            add to cart
          </button>
        </span>
      )}
    </footer>
  );
};

ProductDetailFooter.propTypes = {
  details: PropTypes.object,
}

export default ProductDetailFooter;

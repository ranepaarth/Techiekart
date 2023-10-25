import React from "react";

//Icons
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";

//Context
import { useCartContext } from "../context/cartContext";
import { useProductContext } from "../context/ProductContext";

const ProductDetailModal = ({ details }) => {
  const { cart, addToCart, removeProduct } = useCartContext();

  const { closeProductModal } = useProductContext();

  const productExists = cart.find((product) => {
    if (product.id === details.id) return true;
  });

  console.log(productExists);

  if (!details) return;
  else
    return (
      <main className="bg-neutral-100 w-screen h-screen absolute top-0 right-0 z-50">
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => closeProductModal()}
        >
          <AiOutlineClose />
        </button>
        <article className="flex flex-col justify-between bg-pink-100 md:bg-pink-200 lg:bg-pink-300 xl:bg-pink-400 absolute left-0 h-[90dvh] top-0 bottom-0 z-50 m right-0 mx-10 p-4 md:p-8 my-12">
          <span className="hover:underline bg-white w-fit mt-6 p-2">
            {details.title || details.name}
          </span>
          <footer className="p-3 flex flex-col gap-3">
            {productExists ? (
              <span className="flex justify-center">
                <button
                  className="bg-red-400 py-2 text-white rounded-md hover:scale-105 w-full font-medium flex justify-center gap-2 capitalize"
                  onClick={() => {
                    removeProduct(details.id);
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
                    closeProductModal()
                  }}
                >
                  <IoBagAddOutline className="text-xl" />
                  add to cart
                </button>
              </span>
            )}
          </footer>
        </article>
      </main>
    );
};

export default ProductDetailModal;

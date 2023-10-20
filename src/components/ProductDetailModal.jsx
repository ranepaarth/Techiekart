import React from "react";

//Icons
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

//Context
import { useCartContext } from "../context/cartContext";


const ProductDetailModal = ({ details, closeProductDetails }) => {
  const { cart,removeProduct } = useCartContext();

  const productExists = cart.find((product) => {
    console.log(product.id === details.id);
    if (product.id === details.id) return true;
  });

  if (!details) return;
  else
    return (
      <main className="bg-neutral-100 w-screen h-screen absolute top-0 right-0 z-50">
        <article className="flex flex-col justify-between bg-pink-100 md:bg-pink-200 lg:bg-pink-300 xl:bg-pink-400 absolute left-0 h-[90dvh] top-0 bottom-0 z-50 m right-0 mx-10 p-4 md:p-8 my-12">
          <span className="hover:underline bg-white w-fit mt-6 p-2">
            {details.title || details.name}
          </span>
          <footer className="p-3 flex flex-col gap-3">
            <div className="flex justify-end">
              <button
                className="bg-red-400 p-1 text-white rounded-md border-2 border-red-500 hover:scale-110 w-2/4"
                onClick={() => removeProduct(details.id)}
              >
                <span className="flex items-center gap-2 p-1 capitalize">
                  <AiOutlineDelete />{" "}
                  <p className="text-sm">remove from cart</p>
                </span>
              </button>
            </div>
            <button className="bg-orange-400 py-2 rounded-lg shadow-md text-center cursor-pointer capitalize hover:scale-105">
              <span className="flex items-center justify-center gap-2 font-medium">
                <IoBagCheckOutline className="text-xl" />
                added successfully
              </span>
            </button>

          </footer>
        </article>
      </main>
    );
};

export default ProductDetailModal;

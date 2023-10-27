import React from "react";

//Icons
import { AiOutlineDelete } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";

//Context
import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wishlistContext";

const ProductDetailModal = ({ details, closeProductDetails }) => {
  const { cart } = useCartContext();
  const { addToCart, removeProduct } = useCartContext();
  const { removeFromWishList } = useWishlistContext();
  const { closeProductModal } = useProductContext();

  const productExists = cart.find((product) => {
    console.log(product.id === details.id);
    if (product.id === details.id) return true;
  });

  // console.log(productExists)

  let product;

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
                className="bg-red-400 p-1 text-white rounded-md border-[1px] border-red-800 hover:scale-110 w-fit"
                onClick={() => {
                  removeFromWishList(details.id);
                  closeProductModal();
                }}
              >
                <span className="flex items-center gap-2 p-1 capitalize">
                  <AiOutlineDelete className="text-xl" />
                  <p className="text-sm font-medium">remove from wishList</p>
                </span>
              </button>
            </div>
            <button
              className="bg-orange-400 py-2 rounded-lg shadow-md text-center cursor-pointer capitalize hover:scale-105"
              onClick={() => {
                removeFromWishList(details.id);
                addToCart(details);
                closeProductDetails();
              }}
            >
              <span className="flex items-center justify-center gap-2 font-medium">
                <IoBagAddOutline className="text-xl" />
                add to cart
              </span>
            </button>
          </footer>
        </article>
      </main>
    );
};

export default ProductDetailModal;

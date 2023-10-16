import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useWishlistContext } from "../context/wishListContext";

const Product = (currElem) => {
  // console.log(currElem);
  const { addToWishList, removeFromWishList, wishListCart } =
    useWishlistContext();

  const addToWishListFunction = (currElem) => {
    addToWishList(currElem);
  };

  const removeFromWishListFunction = (id) => {
    removeFromWishList(id);
  };

  let productId;
  const checkIfExists = () => {
    const idArray = [];
    let wishListProduct = wishListCart.find((product) => {
      productId = product.id;
      if (!idArray.includes(productId)) idArray.push(productId);
    });
    return { productId, idArray };
  };


  return (
    <div className="flex flex-col gap-4 relative select-none ">
      <span className="text-xs text-gray-400 absolute right-0">
        {currElem.category}
      </span>
      <header className="flex justify-between">
        <span className="pt-6 line-clamp-1">
          {currElem.title}
          <small> ({currElem.brand})</small>
        </span>
        <span
          className={`items-end text-black text-lg  pt-6 cursor-pointer`}
        >
          {checkIfExists().idArray.includes(currElem.id) ? (
            <span
              onClick={() => {
                removeFromWishListFunction(currElem.id);
              }}
            >
              <span className="text-red-600"><FaHeart/></span>
            </span>
          ) : (
            <span
              onClick={() => {
                addToWishListFunction(currElem);
              }}
            >
              <span className="text-black"><FiHeart/></span>
            </span>
          )}

        </span>
      </header>
      <main className="p-2 bg-neutral-100 shadow-sm rounded-md border">
        <img
          src={currElem.thumbnail}
          alt={currElem.title}
          className="h-44 md:h-60 w-full rounded-md"
        />
      </main>
      <p className="text-xl font-semibold py-3 text-">₹{currElem.price}</p>
    </div>
  );
};

export default Product;

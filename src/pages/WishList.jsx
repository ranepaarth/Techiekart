import React from "react";
import { NavLink } from "react-router-dom";

//Components
import WishListProductDetailModal from "../components/WishListComponent/WishListProductDetailModal";
import EmptyCartOrList from "../components/EmptyCartOrList";
import WishListItem from "../components/WishListComponent/WishListItem";

//Context
import { useWishlistContext } from "../context/wishListContext";
import { useProductContext } from "../context/ProductContext";

//Icons
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const WishList = () => {
  const { wishListCart, clearWishlist } = useWishlistContext();
  const { productDetails, closeProductModal, show } = useProductContext();

  if (show)
    return (
      <>
        <WishListProductDetailModal
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

  if (wishListCart.length === 0) {
    return (
      <EmptyCartOrList
        header="my wishlist"
        pageName="wishlist"
        heroIcon="FaHeart"
      />
    );
  } else
    return (
      <>
        <header className="pt-[8rem] text-center text-xl font-medium">
          <span className="border-b-4 pb-3 border-purple-400">My WishList</span>
        </header>
        <div className="flex justify-center gap-10 md:gap-20 mt-10">
          <NavLink to='/products'>
            <button className="capitalize px-3 py-1 bg-blue-400 rounded-md hover:scale-110 text-white">
              add product
            </button>
          </NavLink>
          <button
            className="capitalize bg-red-500 px-3 py-1 rounded-md text-white font-medium hover:scale-110"
            onClick={() => clearWishlist()}
          >
            clear wishList
          </button>
        </div>
        <section className="flex justify-center">
          <main
            className={`border shadow-md rounded-md w-fit mx-6 my-10 md:mx-4 p-4 grid ${
              wishListCart.length === 1 ? "grid-cols-1" : "grid-cols-2"
            } md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-neutral-50`}
          >
            {wishListCart.map((item, index) => {
              return (
                <article
                  className="bg-white border p-3 shadow-sm rounded-sm"
                  key={index}
                >
                  <WishListItem item={item} />
                </article>
              );
            })}
            <NavLink to="/products">
              <article className="w-56 h-48 flex flex-col justify-center items-center cursor-pointer select-none hover:scale-110">
                <IoAddOutline className="mt-4 text-5xl border-2 border-purple-600 rounded-full p-2 text-purple-400 border-dashed " />
                <button className="px-3 py-1 mt-5 border text-white bg-purple-600 rounded-full border-purple-600 font-semibold ">
                  Add Item
                </button>
              </article>
            </NavLink>
          </main>
        </section>
      </>
    );
};

export default WishList;

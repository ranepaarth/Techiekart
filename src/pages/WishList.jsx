import React from "react";
import { NavLink } from "react-router-dom";

//Components
import EmptyCartOrList from "../components/EmptyCartOrList";
import WishListItem from "../components/WishListComponent/WishListItem";

//Context
import { useWishlistContext } from "../context/wishlistContext";

//Icons
import { IoAddOutline } from "react-icons/io5";
import Modal from "../components/Modal";
import { useProductContext } from "../context/ProductContext";

const WishList = () => {
  const { wishListCart, clearWishlist } = useWishlistContext();
  const { show } = useProductContext();

  if (wishListCart.length === 0) {
    return (
      <EmptyCartOrList
        header="my wishlist"
        pageName="wishlist"
        heroIcon="FaHeart"
      />
    );
  }

  return (
    <>
      {show ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-10">
          <Modal />
        </div>
      ) : (
        ""
      )}
      <header className="pt-[7.5rem] lg:pt-[9.5rem] text-xl font-medium flex justify-center">
        <span className="border-b-4 pb-3 border-purple-400 flex justify-center items-center gap-3 w-fit">
          <p className="font">My WishList: </p>
          <p className="text-lg font-semibold text-neutral-500">
            {wishListCart.length} {wishListCart.length === 1 ? "Item" : "Items"}
          </p>
        </span>
      </header>
      <div className="flex justify-center gap-10 md:gap-20 mt-10">
        <NavLink to="/products">
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
          className={` shadow-md rounded-md w-fit mx-6 my-10 md:mx-4 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-neutral-100 border`}
        >
          {wishListCart.map((item, index) => {
            return (
              <article
                className="bg-neutral-50 border p-3 shadow-sm rounded-sm"
                key={index}
              >
                <WishListItem item={item} />
                {console.log(item)}
              </article>
            );
          })}
          <NavLink to="/">
            <article className="flex h-full items-center justify-center cursor-pointer select-none hover:scale-110">
              <span className="flex flex-col justify-center items-center">
                <IoAddOutline className="mt-4 text-5xl border-2 border-purple-600 rounded-full p-2 text-purple-400 border-dashed " />
                <button className="px-3 py-1 mt-5 border text-white bg-purple-600 rounded-full border-purple-600 font-semibold ">
                  Add Item
                </button>
              </span>
            </article>
          </NavLink>
        </main>
      </section>
    </>
  );
};

export default WishList;

/* {show ? (
        <main className="fixed top-0 bottom-0 right-0 z-50">
          <WishListProductDetailModal />
        </main>
      ) : (
        <main className="hidden">
          <WishListProductDetailModal />
        </main>
      )}*/

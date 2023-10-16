import React from "react";
import { useCartContext } from "../context/cartContext";
import { useWishlistContext } from "../context/wishListContext";
import { NavLink } from "react-router-dom";

import { IoAddOutline } from "react-icons/io5";

const WishList = () => {
  const { wishListCart, removeFromWishList } = useWishlistContext();
  console.log(wishListCart);
  const { addToCart } = useCartContext();
  // const [amount, setAmount] = useState(1);

  if (wishListCart.length === 0) {
    return (
      <div className="pt-[6.5rem]">
        <h1>Empty WishList</h1>
      </div>
    );
  } else
    return (
      <>
        <header className="pt-[7rem] text-center text-xl font-medium">
          <span className="border-b-4 pb-3 border-purple-400">My WishList</span>
        </header>
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
                  <figure>
                    {/* {console.log(item)} */}
                    <img
                      src={item.image}
                      alt=""
                      className=" w-52 h-28 cursor-pointer lg:h-32"
                    />
                  </figure>
                  <footer className="flex justify-center">
                    <button
                      className="text-center w-[90%] bg-orange-400 mt-2 p-1 hover:scale-105"
                      onClick={() => {
                        addToCart(item);
                        removeFromWishList(item.id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </footer>
                </article>
              );
            })}
            <NavLink to='/products'>
              <article className="w-50 h-44 md:h-48 bg-white border rounded-sm shadow-sm flex flex-col justify-center items-center cursor-pointer select-none">
                <IoAddOutline className="mt-4 text-5xl border-2 border-purple-600 rounded-full p-2 text-purple-400 border-dashed hover:scale-110" />
                <button className="px-3 py-1 mt-5 border text-white bg-purple-600 rounded-full border-purple-600 font-semibold hover:scale-105">
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

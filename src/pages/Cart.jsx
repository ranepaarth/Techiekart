import React from "react";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import { useCartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, emptyCart } = useCartContext();
  // console.log(cart);
  if (cart.length === 0) return <EmptyCart />;
  else
    return (
      <div className="flex flex-col items-center overflow-hidden">
        <header className="pt-28 tracking-wide font-medium w-fit border-b-2 pb-5 flex">
          Cart Subtotal ({cart.length} items):
          <span className="text-orange-600 font-semibold">₹0</span>
        </header>
        <div className="w-full items-center text-sm flex justify-evenly mt-4">
          <NavLink to="/products">
            <span className="bg-blue-400 text-white rounded-md p-2 shadow-md cursor-pointer">
              Continue Shopping
            </span>
          </NavLink>
          <NavLink>
            <span className="bg-orange-400 text-white rounded-md p-2 shadow-md cursor-pointer">
              Checkout
            </span>
          </NavLink>
          <span
            className="bg-red-400 text-white rounded-md p-2 shadow-md cursor-pointer"
            onClick={() => emptyCart()}
          >
            Clear Cart
          </span>
        </div>
        <main className="mt-5 flex flex-col justify-center items-center">
          {
            <section className=" md:bg-pink-50 lg:bg-pink-100 xl:bg-pink-200 flex flex-col gap-5">
              {cart.map((product,index) => {
                return (
                  <div key={index}>
                    {/* {console.log(product)} */}
                    <CartItem {...product} />
                  </div>
                );
              })}
            </section>
          }
        </main>
      </div>
    );
};

export default Cart;

import React from "react";
import CartItem from "../components/CartComponent/CartItem";
import EmptyCartOrList from "../components/EmptyCartOrList";
import { useCartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";
import CartTotal from "../components/CartComponent/CartTotal";

const Cart = () => {
  const { cart, emptyCart, total_price } = useCartContext();
  // console.log(cart);
  if (cart.length === 0) {
    return (
      <EmptyCartOrList
        header="shopping cart"
        pageName="cart"
        heroIcon="FaPlus"
      />
    );
  } else
    return (
      <div className="flex flex-col items-center overflow-hidden pt-32">
        <header className="tracking-wide font-medium w-fit border-b-2 pb-5 text-center flex items-center gap-2">
          <span>Cart Subtotal ({cart.length} items):</span>
          <span className="text-orange-600 font-semibold text-2xl">
            ₹{total_price}
            {/* <small className="text-[10px]">+₹450 shipping</small> */}
          </span>
        </header>
        <div className="w-full items-center text-sm flex justify-evenly mt-4">
          <NavLink to="/products" className="hover:scale-110">
            <span className="bg-blue-400 text-white rounded-md p-2 shadow-md cursor-pointer">
              Continue Shopping
            </span>
          </NavLink>
          <NavLink className="hover:scale-110">
            <span className="bg-orange-400 text-white rounded-md p-2 shadow-md cursor-pointer">
              Checkout
            </span>
          </NavLink>
          <span
            className="bg-red-400 text-white rounded-md p-2 shadow-md cursor-pointer hover:scale-110"
            onClick={() => emptyCart()}
          >
            Clear Cart
          </span>
        </div>
        <main className="mt-5 min-w-full lg:px-16 xl:px-40">
          {
            <section className= {`grid grid-cols-1 justify-center items-center lg:${cart.length === 1? "grid-cols-1":"grid-cols-2"} gap-5 lg:gap-x-16 xl:gap-x-24`}>
              {cart.map((product, index) => {
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
        <footer>
          <CartTotal />
        </footer>
      </div>
    );
};

export default Cart;

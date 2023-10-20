import React from "react";
import { useCartContext } from "../context/cartContext";
import CartTotalSubComp from "./CartTotalSubComp";

const CartTotal = () => {
  const { total_price, tax } = useCartContext();

  const calculateShippingAmt = () => {
    let shippingCharges = (total_price * 8) / 100;
    return Number(shippingCharges.toFixed(2));
  };

  const calculateTax = () => {
    let estTax = ((calculateShippingAmt() + total_price) * 12) / 100;
    return Number(estTax.toFixed(2));
  };

  const calculateCartTotal = () => {
    let cartTotal = (total_price + calculateShippingAmt() + calculateTax())

    return Number(cartTotal.toFixed(2))
  }

  return (
    <section className="flex justify-center my-5 w-[100vw] font-sans">
      <article className="bg-neutral-50 p-5 border shadow-sm w-4/5">
        <button className="text-sm text-center min-w-full bg-orange-400 px-1 py-2 rounded-sm border-orange-800 border-[0.001rem] font-medium hover:scale-105">
          Place Order
        </button>
        <header className="font-semibold text-lg py-2">
          Your Order Summary
        </header>
        <main className="flex flex-col text-sm">
          <CartTotalSubComp title={"items"} price={total_price} />
          <CartTotalSubComp
            title={"shipping & handling"}
            price={calculateShippingAmt()}
          />
          <div className="my-5 border-b-[0.01rem]"></div>
          <CartTotalSubComp
            title={"total before tax"}
            price={total_price + calculateShippingAmt()}
          />
          <CartTotalSubComp
            title={"estimated tax to be collected"}
            price={calculateTax()}
          />

          <div className="my-5 border-b-[0.01rem]"></div>
          <CartTotalSubComp
            title={"order total"}
            price={calculateCartTotal()}
          />
        </main>
      </article>
    </section>
  );
};

export default CartTotal;

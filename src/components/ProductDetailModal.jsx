import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";

const ProductDetailModal = ({ details }) => {
  const [amount,setAmount] = useState(1)

  const incrementAmount = () => {
    setAmount(amount + 1)
  }

  const decrementAmount = () => {
    amount > 1 ? setAmount(amount-1) : setAmount(1)
  }
  // console.log(details);
  if (details.length === 0) return;
  else
    return (
      <main className="bg-neutral-100 w-screen h-screen absolute top-0 right-0 z-50">
        <article className="flex flex-col justify-between bg-pink-100 md:bg-pink-200 lg:bg-pink-300 xl:bg-pink-400 absolute left-0 h-[90dvh] top-0 bottom-0 z-50 m right-0 mx-10 p-4 md:p-8 my-12">
          <span className="hover:underline bg-white w-fit mt-6 p-2">
            {details.map((value) => value.title)}
          </span>
          <footer className="p-3 flex flex-col gap-3">
            <CartAmountToggle amount={amount} incrementAmount={incrementAmount} decrementAmount={decrementAmount}/>
            <NavLink
              to="/cart"
              className="bg-pink-300 py-2 rounded-lg shadow-md text-center"
            >
              <button>Add to Cart</button>
            </NavLink>
          </footer>
        </article>
      </main>
    );
};

export default ProductDetailModal;
/*onClick={() =>addToCart(details)} */

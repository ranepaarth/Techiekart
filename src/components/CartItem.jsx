import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { AiOutlineDelete } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ ...product }) => {
  // console.log(product);
  let { id, name, image, price, amount } = product;
  const {removeProduct} = useCartContext()

  let [newAmount,setNewAmount] = useState(amount)
  // console.log(newAmount);

  const incrementAmount = ()=>{
    setNewAmount(newAmount+1)
  }

  const decrementAmount = ()=>{
    if(newAmount>1) setNewAmount(newAmount-1);
    else newAmount = 1
  }

  return (
    <>
      <article className="flex justify-center gap-2 mt-5 cursor-default w-screen px-5">
        <figure className="flex justify-center items-start w-fit shadow-md border-2 p-1">
          <img src={image} alt="" className="h-28 w-40"/>
        </figure>
        <aside className="flex flex-col gap-1 w-[60%] min-h-full text-start pl-5">
          <p className="[font-weight:600] text-neutral-400 text-xs">Id: {id}</p>
          <header className="font-semibold ">
            <h3 className="text-sm line-clamp-2">{name}</h3>
          </header>
          <p className="text-xl font-semibold text-orange-400">₹{price}</p>
          <footer className="flex items-center justify-between">
            <button className="bg-red-400 py-1 px-2 text-white rounded-full" onClick={()=>removeProduct(id)}>
              <span className="flex items-center gap-2 p-1">
                <AiOutlineDelete /> <p className="text-sm">Delete</p>
              </span>
            </button>
            <CartAmountToggle newAmount={newAmount} incrementAmount={incrementAmount} decrementAmount={decrementAmount}/>
          </footer>
        </aside>
      </article>
      <div className="w-screen border"></div>
    </>
  );
};

export default CartItem;

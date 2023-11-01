import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { AiOutlineDelete } from "react-icons/ai";
import { useCartContext } from "../../context/cartContext";

const CartItem = ({ ...product }) => {
  let { id, name, image, price, amount, stock, brand } = product;
  const { removeProduct,incrementAmount,decrementAmount } = useCartContext();

  return (
      <article className="flex justify-center gap-5 mt-5 cursor-default w-screen lg:w-full px-5 border-b pb-5">
        <figure className="flex justify-center items-start h-fit w-fit shadow-md border-2 p-1 bg-neutral-100">
          <img src={image} alt="" className="h-28 w-40" />
        </figure>
        <aside className="flex flex-col gap-2 w-[60%] min-h-full text-start">
          <header className="font-semibold ">
            <h3 className="text-sm line-clamp-1">
              {name} <small>{`(${brand})`}</small>
            </h3>
          </header>
          <p className="text-xl font-semibold text-orange-400">₹{price}</p>
          <small className="font-normal text-neutral-400 text-xs capitalize">
            stocks available: {stock}
          </small>
          <small className='font-medium text-neutral-400 text-xs capitalize'>Sub-Total: ₹{price*amount}</small>
          <footer className="flex items-center justify-between select-none pr-6 lg:pr-0">
            <button
              className="bg-red-400 p-1 text-white rounded-full hover:scale-110"
              onClick={() => removeProduct(id)}
            >
              <span className="flex items-center gap-2 p-1">
                <AiOutlineDelete /> <p className="text-sm">Delete</p>
              </span>
            </button>
            <CartAmountToggle
              newAmount={amount}
              incrementAmount={() => incrementAmount(id)}
              decrementAmount={()=>decrementAmount(id)}
            />
          </footer>
        </aside>
      </article>
  );
};

export default CartItem;

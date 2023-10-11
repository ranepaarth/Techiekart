import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartAmountToggle = ({ newAmount,incrementAmount,decrementAmount}) => {
  // console.log(newAmount);

  return (
    <div className="flex justify-end gap-1 cursor-pointer font-medium">
      <span
        className="bg-orange-300 rounded-lg flex items-center justify-center px-2"
        onClick={decrementAmount}
      >
        <AiOutlineMinus />
      </span>
      <span className="text-xl flex items-center justify-center px-2 w-8">
        {newAmount}
      </span>
      <span
        className="bg-orange-300 rounded-lg flex items-center justify-center px-2"
        onClick={incrementAmount}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default CartAmountToggle;

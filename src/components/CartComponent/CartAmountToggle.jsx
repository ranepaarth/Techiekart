import React from "react";
import PropTypes from 'prop-types'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartAmountToggle = ({ newAmount,incrementAmount,decrementAmount}) => {
  // console.log(newAmount);

  // console.log(typeof newAmount)

  return (
    <div className="flex justify-end gap-1 cursor-pointer font-medium">
      <span
        className="bg-orange-300 rounded-full flex items-center justify-center p-2 hover:scale-110"
        onClick={decrementAmount}
        onKeyDown={decrementAmount}
      >
        <AiOutlineMinus />
      </span>
      <span className="text-xl flex items-center justify-center px-2 w-7 select-none">{newAmount}
      </span>
      <span
        className="bg-orange-300 rounded-full flex items-center justify-center p-2 hover:scale-110"
        onKeyDown={incrementAmount}
        onClick={incrementAmount} 
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

CartAmountToggle.propTypes = {
  newAmount: PropTypes.number,
  incrementAmount: PropTypes.func,
  decrementAmount: PropTypes.func,
}

export default CartAmountToggle;

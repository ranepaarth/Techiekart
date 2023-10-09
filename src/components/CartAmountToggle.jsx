import React from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
const CartAmountToggle = ({amount,incrementAmount,decrementAmount}) => {

    console.log(amount);
  return (
    <div className='flex justify-end gap-2 text-large cursor-pointer'>
        <span className='bg-white flex items-center justify-center px-2' onClick={decrementAmount}><AiOutlineMinus /></span>
        <span className='flex items-center justify-center px-2'>{amount}</span>
        <span className='bg-white flex items-center justify-center px-2' onClick={incrementAmount}><AiOutlinePlus /></span>
    </div>
  )
}

export default CartAmountToggle
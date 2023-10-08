import React from 'react'

const Product = (currElem) => {
    // console.log(currElem);
  return (<div className='flex flex-col gap-4 relative'>
    <span className='text-xs text-white absolute left-0'>{currElem.category}</span>
    <span className='pt-6 line-clamp-1'>{currElem.title}</span>
    <p>₹{currElem.price}</p>
    </div>
  )
}

export default Product
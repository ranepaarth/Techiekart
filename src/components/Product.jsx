import React from 'react'

const Product = (currElem) => {
    // console.log(currElem);
  return (<div className='flex flex-col gap-4'>
    <span>{currElem.title}</span>
    <p>₹{currElem.price}</p>
    </div>
  )
}

export default Product
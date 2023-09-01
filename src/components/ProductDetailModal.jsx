import React from 'react'

const ProductDetailModal = ({details}) => {
    console.log(details)

    if (details.length === 0) return
   else return (
    <div className='bg-pink-200 py-4'>{details.map((value) => value.title)}</div>
  )
}

export default ProductDetailModal
import React from 'react'

const ProductTitle = ({title,brand}) => {
  return (
    <>
      <span className="pt-6 line-clamp-1">
          {title}
          <small> ({brand})</small>
        </span>
    </>
  )
}

export default ProductTitle

import React from 'react'
import FormatPrice from './FormatPrice'

const OriginalPrice = ({origPrice}) => {
  return (
    <span className='text-base text-neutral-400 italic line-through tracking-wider'><FormatPrice price={origPrice}/></span>
  )
}

export default OriginalPrice
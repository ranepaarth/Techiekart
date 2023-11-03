import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useProductContext } from '../context/ProductContext'

const ButtonClose = () => {
    const {closeProductModal} = useProductContext()
  return (
    <div className="flex justify-end">
            <button
              className="text-lg p-2 hover:bg-neutral-100 rounded-full border-hidden hover:border"
              onClick={() => closeProductModal()}
            >
              <AiOutlineClose />
            </button>
          </div>
  )
}

export default ButtonClose
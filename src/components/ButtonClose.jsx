import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useProductContext } from '../context/ProductContext'

const ButtonClose = () => {
    const {closeProductModal} = useProductContext()
  return (
    <div className="flex justify-end p-2">
            <button
              className="HELLO text-lg"
              onClick={() => closeProductModal()}
            >
              <AiOutlineClose />
            </button>
          </div>
  )
}

export default ButtonClose
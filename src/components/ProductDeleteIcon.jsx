import { Fade, Tooltip } from "@mui/material";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";

const ProductDeleteIcon = ({ currElemId }) => {
  const { cart,removeProduct } = useCartContext();

const productExists = cart.find((product) => {
    if (product.id === currElemId) return true;
  });

  return (
    <>
      {productExists ? (
        <Tooltip
          title="Remove"
          placement="bottom"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <span
            className="p-2 text-red-500 hover:bg-red-200 hover:rounded-full cursor-pointer"
            onClick={() => removeProduct(currElemId)}
          >
            <AiFillDelete />
          </span>
        </Tooltip>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDeleteIcon;

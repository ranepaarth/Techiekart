import React from "react";

const CartTotalSubComp = ({ title, price }) => {
  return (
    <span className="flex justify-between capitalize">
      {title === "order total" ? (
        <>
          <p className="text-2xl text-orange-600 font-bold">{title}: </p>
          <p className="text-2xl text-orange-600 font-bold">₹{price}</p>
        </>
      ) : (
        <>
          <p>{title}: </p>
          <p>₹{price}</p>
        </>
      )}
    </span>
  );
};

export default CartTotalSubComp;

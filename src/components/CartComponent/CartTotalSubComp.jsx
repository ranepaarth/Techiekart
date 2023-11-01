import React from "react";
import PropTypes from 'prop-types';

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

CartTotalSubComp.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
}

export default CartTotalSubComp;

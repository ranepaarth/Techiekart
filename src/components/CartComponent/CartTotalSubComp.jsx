import React from "react";
import PropTypes from 'prop-types';
import FormatPrice from "../ProductCard/FormatPrice";

const CartTotalSubComp = ({ title, price }) => {
  return (
    <span className="flex justify-between capitalize">
      {title === "order total" ? (
        <>
          <p className="text-2xl text-orange-600 font-bold">{title}: </p>
          <p className="text-2xl text-orange-600 font-bold tracking-wide"><FormatPrice price={price}/></p>
        </>
      ) : (
        <>
          <p>{title}: </p>
          <p className=" tracking-wide"><FormatPrice price={price}/></p>
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

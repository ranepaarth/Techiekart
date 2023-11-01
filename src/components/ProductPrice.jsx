import React from "react";
import PropTypes from "prop-types";

const ProductPrice = ({amount,productCard}) => { 
  return (
    <div className={"flex flex-col gap-2"}>
      <span className={productCard?"hidden":"font-medium"}>ProductPrice:</span>{" "}
      <span className="font-bold text-orange-600 text-3xl">₹{amount}</span>
    </div>
  );
};

ProductPrice.propTypes = {
  amount: PropTypes.number,
  productCard: PropTypes.bool,
}

export default ProductPrice;

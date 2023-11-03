import PropTypes from "prop-types";
import React from "react";
import FormatPrice from "./ProductCard/FormatPrice";

const ProductPrice = ({ price, discountPercentage }) => {
  // console.log(new Intl.NumberFormat().format(amount))
  let discPrice = Math.floor(price - (price * discountPercentage) / 100);
  return (
    <div className={"flex flex-col gap-2"}>
      <span className="font-bold text-orange-600 text-3xl">
        <FormatPrice price={discPrice} />
      </span>
    </div>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.number,
  productCard: PropTypes.bool,
};

export default ProductPrice;

import React from "react";
import PropTypes from "prop-types";

const ProductDescription = ({ description }) => {
  return (
    <div>
      <span className="capitalize font-medium ">description:</span>
      <p className="text-sm">{description}</p>
    </div>
  );
};

ProductDescription.propTypes  ={
  description: PropTypes.string,
}

export default ProductDescription;

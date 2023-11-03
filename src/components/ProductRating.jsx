import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import PropTypes from "prop-types";

const ProductRating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center gap-3">
      <span className="font-medium">Rating: </span>
      <span className="flex gap-1 text-xl text-yellow-400">{ratingStar}</span>
    </div>
  );
};

ProductRating.propTypes = {
  rating : PropTypes.number,
}

export default ProductRating;

import React from "react";
import PropTypes from 'prop-types'
const ProductDetailImage = ({image,widthFull,mdHeight}) => {
  return (
    <figure className="flex justify-center">
      <span className={`bg-neutral-50 p-2 rounded-md border ${widthFull?"w-full":"w-fit"}`}>
        <img src={image} alt="" className={`rounded-md h-52 ${widthFull} md:${mdHeight}`} />
      </span>
    </figure>
  );
};

ProductDetailImage.propTypes ={
  image: PropTypes.string,
  widthFull: PropTypes.string,
  mdHeight: PropTypes.string,
}

export default ProductDetailImage;

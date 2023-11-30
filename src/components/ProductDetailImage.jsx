import React from "react";
import PropTypes from 'prop-types'
const ProductDetailImage = ({image,widthFull}) => {
  return (
    <figure className="flex justify-center">
      <span className={`bg-neutral-50 p-2 rounded-md border `}>
        <img src={image} alt="" className={`rounded-md aspect-video`} />
      </span>
    </figure>
  );
};

ProductDetailImage.propTypes ={
  image: PropTypes.string,
  widthFull: PropTypes.string,
}

export default ProductDetailImage;

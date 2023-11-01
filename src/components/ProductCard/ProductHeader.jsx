import React from "react";
import ProductTitle from "./ProductTitle";
import DetailsIcon from "./DetailsIcon";
import HeartIcon from "./HeartIcon";
import PropTypes from 'prop-types'


const ProductHeader = ({category,brand,currElem,title}) => {
  return (
    <>
      <span className="text-xs text-gray-400 absolute right-0 capitalize">
        {category}
      </span>
      <header className="flex items-center justify-between">
        <ProductTitle title={title} brand={brand} />
        <span
          className={`text-black text-xl  pt-6 cursor-pointer flex items-center gap-2`}
        >
          <DetailsIcon currElem={currElem} />
          <HeartIcon currElem={currElem} />
        </span>
      </header>
    </>
  );
};

ProductHeader.propTypes = {
  category: PropTypes.string,
  brand: PropTypes.string,
  currElem: PropTypes.object,
  title: PropTypes.string,
}

export default ProductHeader;

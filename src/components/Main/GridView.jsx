import React from "react";
import Product from "../ProductCard/Product";
import ProductDetailModal from "../ProductCard/ProductDetailModal/ProductDetailModal";

import PropTypes from 'prop-types'

import { useProductContext } from "../../context/ProductContext";


const GridView = ({ products }) => {
  const { productDetails, closeProductModal, show } = useProductContext();

  // console.log(productDetails)

  if (show)
    return (
      <ProductDetailModal
        details={productDetails}
      />
    );
  return (
    <>
      {/* <section className="w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] grid lg:grid-cols-2 xl:grid-cols-3 mt-3 xl:mt-5 xl:ml-[3rem] gap-4 xl:gap-x-5 xl:gap-y-6 bg-white"> */}
      <section className="mx-5 grid md:grid-cols-2 lg:grid-cols-3 my-3 xl:mt-5 gap-4 xl:gap-x-5 xl:gap-y-6 bg-white">
        {products.map((currElem) => {
          return (
            <article
              key={currElem.id}
              className="border shadow-sm hover:shadow-md rounded-md px-3 py-4 h-fit flex flex-col
              justify-between"
            >
              <Product key={currElem.id} {...currElem} />
            </article>
          );
        })}
      </section>
    </>
  );
};

GridView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default GridView;

import React from "react";
import Product from "../ProductCard/Product";

import PropTypes from "prop-types";
import Modal from "../Modal";

import { useProductContext } from "../../context/ProductContext";
import BackToTop from "../BackToTop";

const GridView = ({ products }) => {
  const { show } = useProductContext();

  return (
    <>
      {show ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-10">
          <Modal page={"productPage"} />
        </div>
      ) : (
        ""
      )}
      <section className="mx-5 grid md:grid-cols-2 lg:grid-cols-3 my-3 xl:mt-5 gap-4 xl:gap-x-10 xl:gap-y-8">
        {products.map((currElem) => {
          return (
            <article
              key={currElem.id}
              className="border shadow-sm hover:shadow-md rounded-md px-3 py-4 h-fit flex flex-col
              justify-between bg-white"
            >
              <Product {...currElem} />
            </article>
          );
        })}
      </section>
      <BackToTop />
    </>
  );
};

GridView.propTypes = {
  products: PropTypes.array.isRequired,
};

export default GridView;

/*{show ? (
          <main className="fixed top-0 bottom-0 right-0 z-50">
            <ProductDetailModal details={productDetails} />
          </main>
        ) : (
          <main className="hidden">
            <ProductDetailModal details={productDetails} />
          </main>
        )} */
/* <section className="w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] grid lg:grid-cols-2 xl:grid-cols-3 mt-3 xl:mt-5 xl:ml-[3rem] gap-4 xl:gap-x-5 xl:gap-y-6 bg-white"> */

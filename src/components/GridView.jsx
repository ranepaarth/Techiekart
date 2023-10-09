import React from "react";
import { useState } from "react";
import Product from "./Product";
import ProductDetailModal from "./ProductDetailModal";

import { AiOutlineClose } from "react-icons/ai";

const GridView = ({ products }) => {
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  if (show)
    return (
      <>
        <ProductDetailModal details={details} />
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => setShow(!show)}
        >
          <AiOutlineClose />
        </button>
      </>
    );
  return (
    <>
      <section
        className="w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] grid md:grid-cols-1 lg:grid-cols-2
      xl:grid-cols-3 mt-2 xl:ml-[3rem] gap-4 bg-white"
      >
        {products.map((currElem) => {
          return (
            <article
              key={currElem.id}
              className="bg-pink-500 p-2 h-[25dvh] flex flex-col
              justify-between"
            >
              <Product key={currElem.id} {...currElem} />
              <button
                onClick={() => {
                  setDetails([currElem]);
                  setShow(!show);
                }}
              >
                View Detail
              </button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default GridView;

import React from "react";
import { useState } from "react";
import Product from "./Product";
import ProductDetailModal from "./ProductDetailModal";

const GridView = ({ products }) => {
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  if(show) return <><ProductDetailModal details={details}/><button className="z-50 absolute top-14 right-28" onClick={() => setShow(!show)}>close</button></>
  return (
    <>
      <section className="w-[64dvw] lg:w-[78dvw] grid md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4">
        {products.map((currElem) => {
          return (
            <article
              key={currElem.id}
              className="bg-pink-300 p-2 h-[25dvh] flex flex-col justify-between"
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

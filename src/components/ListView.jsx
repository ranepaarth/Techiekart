import React, { useState } from "react";
import Product from "./Product";
import ProductDetailModal from "./ProductDetailModal";

const ListView = ({ products }) => {
  console.log(products);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  if (show)
    return (
      <>
        <ProductDetailModal details={details} />
        <button
          className="z-50 absolute top-14 right-28"
          onClick={() => setShow(!show)}
        >
          close
        </button>
      </>
    );
  return (
    <section className="flex flex-col gap-4 mt-2">
      {products.map((currElem) => {
        return (
          <article
            key={currElem.id}
            className="bg-pink-300 w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] p-2 h-[25dvh] xl:ml-[3rem] flex relative"
          >
            <Product key={currElem.id} {...currElem} />
            <button
              className="flex flex-col justify-end absolute bottom-4 right-4"
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
  );
};

export default ListView;

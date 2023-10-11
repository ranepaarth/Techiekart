import React, { useState } from "react";
import Product from "./Product";
import ProductDetailModal from "./ProductDetailModal";

const ListView = ({ products }) => {
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);

  const closeProductDetails = () => {
    setShow(!show)
  }

  const openProductDetails = () => {
    setShow(!show)
  }

  if (show)
    return (
      <>
        <ProductDetailModal details={details} closeProductDetails={closeProductDetails}/>
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => closeProductDetails()}
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
                openProductDetails();
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

import React from "react";
import Product from "./Product";
import ProductDetailModal from "./ProductDetailModal";

import { AiOutlineClose } from "react-icons/ai";
import { useProductContext } from "../context/ProductContext";

const GridView = ({ products }) => {
  // const [show, setShow] = useState(false);

  const {getProductDetails,productDetails,openProductModal,closeProductModal,show} = useProductContext()

  if (show)
    return (
      <>
        <ProductDetailModal
          details={[productDetails]}
          closeProductDetails={closeProductModal}
        />
        <button
          className="z-50 absolute top-16 right-14 text-lg"
          onClick={() => closeProductModal()}
        >
          <AiOutlineClose />
        </button>
      </>
    );
  return (
    <>
      <section
        className="w-[64dvw] lg:w-[75dvw] xl:w-[79dvw] grid lg:grid-cols-2
      xl:grid-cols-3 mt-3 xl:mt-5 xl:ml-[3rem] gap-4 xl:gap-x-5 xl:gap-y-6 bg-white"
      >
        {products.map((currElem) => {
          return (
            <article
              key={currElem.id}
              className="border shadow-sm hover:shadow-md rounded-md px-3 py-4 h-fit flex flex-col
              justify-between"
            >
              <Product key={currElem.id} {...currElem}/>
              <span className="flex justify-center">
                <button
                  className="bg-orange-300 py-1 rounded-md hover:scale-105 w-4/5"
                  onClick={() => {
                    openProductModal();
                    getProductDetails(currElem)
                  }}
                >
                  View Detail
                </button>
              </span>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default GridView;

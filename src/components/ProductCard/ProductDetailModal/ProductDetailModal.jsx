import React from "react";

import { useProductContext } from "../../../context/ProductContext";
import ButtonClose from "../../ButtonClose";
import ProductDescription from "../../ProductDescription";
import ProductDetailImage from "../../ProductDetailImage";
import ProductPrice from "../../ProductPrice";
import ProductRating from "../../ProductRating";
import OriginalPrice from "../OriginalPrice";
import ProductTitle from "../ProductTitle";
import ProductDetailFooter from "./ProductDetailFooter";
// {title, brand, thumbnail, rating, price, description }

const ProductDetailModal = () => {
  const { closeProductModal, productDetails } = useProductContext();

  const {
    title,
    brand,
    thumbnail,
    rating,
    price,
    description,
    discountPercentage,
  } = productDetails;

  if (!productDetails) return;
  else
    return (
      <main
        className="bg-black w-screen h-screen absolute top-0 right-0 bottom-0 z-50 flex justify-center items-center bg-opacity-80 cursor-default"
        onClick={() => closeProductModal()}
        onKeyDown={() => closeProductModal()}
      >
        <article className="flex flex-col bg-white w-[500px] mx-10 p-5 border shadow-md rounded-lg">
          <ButtonClose />
          <main className="flex flex-col h-full gap-4">
            <ProductTitle
              title={title}
              brand={brand}
              paddingTop={0}
              text={"xl"}
              font={"semibold"}
              textCenter={"center"}
              underline={"underline"}
            />
            <ProductDetailImage image={thumbnail} />

            <ProductDescription description={description} />

            <ProductRating rating={rating} />

            <span className="flex items-baseline gap-3">
              <ProductPrice
                price={price}
                discountPercentage={discountPercentage}
              />
              <OriginalPrice origPrice={price} />
            </span>
          </main>
          <ProductDetailFooter details={productDetails} />
        </article>
      </main>
    );
};

export default ProductDetailModal;

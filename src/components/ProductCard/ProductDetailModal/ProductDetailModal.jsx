import PropTypes from "prop-types";
import React from "react";

import ButtonClose from "../../ButtonClose";
import ProductDescription from "../../ProductDescription";
import ProductDetailImage from "../../ProductDetailImage";
import ProductPrice from "../../ProductPrice";
import ProductRating from "../../ProductRating";
import ProductTitle from "../ProductTitle";
import ProductDetailFooter from "./ProductDetailFooter";

const ProductDetailModal = ({ details }) => {
  const { title, brand, thumbnail, rating, price, description } = details;

  if (!details) return;
  else
    return (
      <main className="bg-black w-screen h-screen absolute top-0 right-0 bottom-0 z-50 flex justify-center items-center bg-opacity-80 cursor-default">
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

            <ProductPrice amount={price} />
          </main>
          <ProductDetailFooter details={details} />
        </article>
      </main>
    );
};

ProductDetailModal.propTypes = {
  details: PropTypes.object,
};

export default ProductDetailModal;

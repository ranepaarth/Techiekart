import React from "react";
import { useCartContext } from "../../context/cartContext";

import ButtonClose from "../ButtonClose";
import ProductTitle from "../ProductCard/ProductTitle";
import ProductDescription from "../ProductDescription";
import ProductDetailImage from "../ProductDetailImage";
import ProductPrice from "../ProductPrice";
import ProductRating from "../ProductRating";
import WishListProdDetailFooter from "./WishListProdDetailFooter";

import PropTypes from 'prop-types'

const WishListProductDetailModal = ({ details }) => {
  const { name, brand, image, rating, price, desc, id } = details;

 

  const { cart } = useCartContext();

  const productExists = cart.find((product) => {
    console.log(product.id === details.id);
    if (product.id === details.id) return true;
  });

  console.log(details);

  if (!details) return;
  else
    return (
        <section className="bg-black w-screen h-screen absolute top-0 right-0 bottom-0 z-50 flex justify-center items-center bg-opacity-80 px-10 cursor-default">

          <article className="flex flex-col bg-white w-[500px] p-5 border shadow-md rounded-lg">
            <ButtonClose />
            <main className="flex flex-col h-full gap-4">
              <ProductTitle
                title={name}
                brand={brand}
                paddingTop={0}
                text={"xl"}
                font={"semibold"}
                textCenter={"center"}
                underline={"underline"}
              />
              <ProductDetailImage image={image} />

              <ProductDescription description={desc} />

              <ProductRating rating={rating} />

              <ProductPrice amount={price} />
            </main>
            <WishListProdDetailFooter details={details} id={id} />
          </article>
        </section>
    );
};

WishListProductDetailModal.propTypes = {
  details: PropTypes.object
}

export default WishListProductDetailModal;

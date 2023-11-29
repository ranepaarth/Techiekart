import React from "react";
import { useProductContext } from "../context/ProductContext";
import ButtonClose from "./ButtonClose";
import OriginalPrice from "./ProductCard/OriginalPrice";
import ProductDetailFooter from "./ProductCard/ProductDetailModal/ProductDetailFooter";
import ProductTitle from "./ProductCard/ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductDetailImage from "./ProductDetailImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import WishListProdDetailFooter from "./WishListComponent/WishListProdDetailFooter";

const Modal = ({ page }) => {
  const { closeProductModal, productDetails } = useProductContext();

    return (
      <section
        className="bg-black w-screen h-screen absolute top-0 right-0 bottom-0 z-50 flex justify-center items-center bg-opacity-80 px-10 cursor-default"
        onClick={() => closeProductModal()}
        onKeyDown={() => closeProductModal()}
      >
        <article className="flex flex-col bg-white w-[500px] p-5 border shadow-md rounded-lg">
          <ButtonClose />
          <main className="flex flex-col h-full gap-4">
            <ProductTitle
              title={productDetails?.title}
              brand={productDetails?.brand}
              paddingTop={0}
              text={"xl"}
              font={"semibold"}
              textCenter={"center"}
              underline={"underline"}
            />
            <ProductDetailImage image={productDetails?.thumbnail} />

            <ProductDescription description={productDetails?.description} />

            <ProductRating rating={productDetails?.rating} />

            <span className="flex flex-col justify-center gap-3">
              <p className={"font-medium"}>ProductPrice:</p>
              <span className="flex items-baseline gap-3">
                <ProductPrice
                  price={productDetails?.price}
                  discountPercentage={productDetails?.discountPercentage}
                />
                <OriginalPrice origPrice={productDetails?.price} />
              </span>
            </span>
          </main>

          {page === "productPage" ? (
            <ProductDetailFooter details={productDetails} />
          ) : (
            <WishListProdDetailFooter details={productDetails} id={productDetails?.id} />
          )}
        </article>
      </section>
    );
};

export default Modal;

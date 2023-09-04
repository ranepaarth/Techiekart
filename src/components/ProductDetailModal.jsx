import React from "react";

const ProductDetailModal = ({ details }) => {
  // console.log(details);
  if (details.length === 0) return;
  else
    return (
      <main className="bg-neutral-100 w-screen h-screen absolute top-0 right-0 z-50">
        <article className="flex flex-col justify-between bg-pink-100 absolute left-0 h-[90dvh] top-0 bottom-0 z-50 m right-0 mx-24 p-8 my-12">
          <span className="hover:underline bg-white w-fit p-2">
            {details.map((value) => value.title)}
          </span>
          <button className="bg-pink-300 py-2 rounded-lg shadow-md">
            Add to Cart
          </button>
        </article>
      </main>
    );
};

export default ProductDetailModal;

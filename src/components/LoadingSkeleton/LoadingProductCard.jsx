import React from "react";
import { BiDetail } from "react-icons/bi";

const LoadingProductCard = () => {
  return (
    <article className="product-card flex flex-col gap-4 p-5 bg-white text-transparent rounded-md border">
      <span className="flex justify-between items-center mt-5">
        <p className="py-1 px-5 bg-neutral-200 rounded">Item Title</p>
        <span className="flex flex-row gap-3">
          <p className="bg-neutral-200  p-2 rounded-full"> <BiDetail /></p>
          <p className="bg-neutral-200 p-2 rounded-full"><BiDetail /></p>
        </span>
      </span>
      <figure className="flex justify-center">
        <span className={`bg-neutral-300 p-2 rounded-md border `}>
          <img
            src="https://img.freepik.com/free-photo/person-s-hand-showing-mobile-phone-screen-display-against-white-concrete-wall_23-2148041737.jpg?w=740&t=st=1701356584~exp=1701357184~hmac=3d99101b06f300c189d9a8749b1bd32d6ecee3ba17fece9f43f1ddf6752aefa5"
            alt=""
            className={`rounded-md aspect-video invisible`}
          />
        </span>
      </figure>
      <p className="py-5 w-36 bg-neutral-300 rounded"></p>
      <p className="py-4 bg-neutral-300 rounded"></p>
    </article>
  );
};

export default LoadingProductCard;

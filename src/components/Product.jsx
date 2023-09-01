import React from "react";

const Product = (currElem) => {
  const { title } = currElem;

  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

export default Product;

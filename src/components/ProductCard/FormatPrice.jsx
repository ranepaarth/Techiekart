import React from "react";

const FormatPrice = ({ price , amount=1 }) => {
  const finalPrice = new Intl.NumberFormat("en-IN",{
    style:"currency",currency:"INR"
  }).format(price*amount);
  return <p className="tracking-wide">{finalPrice}</p>;
};

export default FormatPrice;

import React from "react";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { useFilterContext } from "../../context/filterContext";
import HorizontalLine from "./HorizontalLine";
// import { useLocation } from "react-router-dom";

const HeaderCategories = () => {
  const { products } = useProductContext();
  const { setCategory } = useFilterContext();
  const allCategories = products.map((item) => item.category);
  const newCategory = ["all", ...new Set(allCategories)];

  const location = useLocation();
  const [currRoute] = location.pathname.split("/").filter((item) => item !== "");
  return (
    <div className={currRoute === "cart" || currRoute === "wishList"
    ? "hidden"
    : "block visible"}>
      <div
        className={`text-xs overflow-x-auto flex justify-evenly items-center lg:text-sm`}
      >
        {newCategory.map((category, index) => (
          <span
            className="capitalize p-2 lg:p-3 hover:bg-purple-200 cursor-pointer"
            onClick={() => setCategory(category)}
            onKeyDown={() => setCategory(category)}
            key={index}
          >
            {category}
          </span>
        ))}
      </div>
      <HorizontalLine />
    </div>
  );
};

export default HeaderCategories;

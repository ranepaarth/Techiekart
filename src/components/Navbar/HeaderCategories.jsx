import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { useFilterContext } from "../../context/filterContext";

const HeaderCategories = () => {
    const { products } = useProductContext();
    const { setCategory } = useFilterContext();
    const allCategories = products.map((item) => item.category);
    const newCategory = ["all", ...new Set(allCategories)];
  return (
    <div className="text-xs overflow-x-auto flex justify-evenly items-center lg:text-sm">
      {newCategory.map((category,index) => (<span className="capitalize p-2 lg:p-3 hover:bg-purple-200 cursor-pointer" onClick={() => setCategory(category)} key={index}>{category}</span>))}
    </div>
  );
};

export default HeaderCategories;

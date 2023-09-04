import React from "react";
import { useFilterContext } from "../context/filterContext";

const Categories = () => {
  const { filter_products } = useFilterContext();
  const allCategories = filter_products.map((item) => item.category);
  const newCategory = ["all", ...new Set(allCategories)];
  console.log(newCategory);
  return (
    <div className="">

      <div className="flex flex-col items-center gap-2">
        <header className="border-b-[0.1rem] border-pink-700 pb-2 text-sm md:text-base">
          <h3>Filter Categories</h3>
        </header>
        
        {newCategory.map((category, index) => {
          return (
            <p key={index} className="text-xs capitalize md:text-sm relative group cursor-pointer">
              <span>{category}</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[0.05rem] bg-pink-600 transition-all group-hover:w-full"></span>
            </p>
            
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

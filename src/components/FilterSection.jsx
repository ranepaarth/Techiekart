import React from "react";
import { useState } from "react";
import { useFilterContext } from "../context/filterContext";
import Categories from "./Categories";

const FilterSection = () => {
  const {filter_products} = useFilterContext()
  const allCategories =filter_products.map((item) => item.category)
  const newCategory = ['all',...new Set(allCategories)]

  const [categories,setCategories] = useState(newCategory)
  console.log(newCategory)
  return (
    // <div className='flex flex-col p-4 bg-white h-[40%]'><span>{categories.map(item => item)}</span></div>
    <div className="flex flex-col items-center">
      <span className="p-2">
        <Categories />
      </span>
    </div>
  );
};

export default FilterSection;

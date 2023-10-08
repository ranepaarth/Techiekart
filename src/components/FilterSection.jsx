import React from "react";
import { useFilterContext } from "../context/filterContext";
import Categories from "./Categories";

const FilterSection = () => {
  const {clearFilter} = useFilterContext()
  return (
    <div className="flex flex-col cursor-default">
      <span className="p-2 cursor-pointer">
        <Categories />
        <button className="pt-5">
          <span className="bg-white p-2 rounded-md text-sm border-pink-400 border-2 hover:text-pink-500 hover:border-white" onClick={clearFilter}>Clear Filter</span>
        </button>
      </span>
    </div>
  );
};

export default FilterSection;

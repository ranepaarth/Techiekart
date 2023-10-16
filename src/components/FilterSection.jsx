import React from "react";
import { useFilterContext } from "../context/filterContext";
import Categories from "./Categories";

const FilterSection = () => {
  const { clearFilter } = useFilterContext();
  return (
    <div className="flex flex-col cursor-default">
      <span className="p-2 cursor-pointer">
        <Categories />
        <button className="pt-3">
          <span
            className="bg-white p-2 rounded-md font-medium text-purple-500 text-sm border-purple-400 border-2 hover:text-white hover:bg-purple-400"
            onClick={clearFilter}
          >
            Clear Filter
          </span>
        </button>
      </span>
    </div>
  );
};

export default FilterSection;

import React from "react";
import Categories from "./Categories";

const FilterSection = () => {
  return (
    <div className="flex flex-col cursor-default">
      <span className="p-2 cursor-pointer">
        <Categories />
      </span>
    </div>
  );
};

export default FilterSection;

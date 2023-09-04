import React from "react";
import SearchBox from "./SearchBox";
import NavigationIcons from "./NavigationIcons";
import { NavLink } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import SubHeader from "./SubHeader";
const Header = () => {
  return (
    <header className="shadow-sm fixed min-w-full bg-white z-10">
      <div className="flex items-center justify-between p-2 text-sm md:px-12 lg:px-24">
        <NavLink to="/">
          <span>
            <h2 className="text-xl font-semibold lg:text-3xl">Logo</h2>
          </span>
        </NavLink>
        <div>
          <SearchBox />
        </div>
        <div>
          <NavigationIcons />
        </div>
      </div>
      <HorizontalLine />
      <SubHeader />
      <HorizontalLine />
    </header>
  );
};

export default Header;

import React from "react";
import SearchBox from "./SearchBox";
import NavigationIcons from "./NavigationIcons";
import { NavLink } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import SubHeader from "./SubHeader";
const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="flex items-center justify-between p-2 text-sm">
        <NavLink to="/">
          <span>
            <h2 className="text-xl font-semibold">Logo</h2>
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

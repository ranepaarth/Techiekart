import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import NavigationIcons from "./NavigationIcons";
import SearchBox from "./SearchBox";


import HeaderCategories from "./HeaderCategories";
import Logo from "./Logo";
const Header = () => {
  const location = useLocation();
  const [currRoute] = location.pathname.split("/").filter((item) => item !== "");
  return (
    <header className="shadow-sm fixed min-w-full bg-white z-10">
      <div className="flex items-center justify-center gap-4 p-2 text-sm">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div>
          <SearchBox />
        </div>
        <div>
          <NavigationIcons />
        </div>
      </div>

      {/* <SubHeader /> */}
      <HorizontalLine />
      <HeaderCategories />
    </header>
  );
};

export default Header;

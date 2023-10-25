import React from "react";
import SearchBox from "./SearchBox";
import NavigationIcons from "./NavigationIcons";
import { NavLink } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import SubHeader from "./SubHeader";

import logo from '../../assets/ecomLogo.png'
const Header = () => {
  return (
    <header className="shadow-sm fixed min-w-full bg-white z-10">
      <div className="flex items-center justify-center gap-4 p-2 text-sm">
        <NavLink to="/">
          <span className="flex items-center lg:border lg:rounded-full lg:py-1 lg:px-3 lg:hover:shadow-lg">
            <figure className="hover:scale-110 lg:hover:scale-100"><img src={logo} alt="LOGO" className="w-10 lg:w-12"/></figure>
            <h2 className="hidden font-semibold md:block md:visible lg:text-xl italic">echiekart</h2>
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

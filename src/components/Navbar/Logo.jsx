import React from 'react'
import logo from "../../assets/ecomLogo.png";
const Logo = () => {
  return (
    <span className="flex items-center lg:border lg:rounded-full lg:py-1 lg:px-3 lg:hover:shadow-lg">
            <figure className="hover:scale-110 lg:hover:scale-100">
              <img src={logo} alt="LOGO" className="w-10 lg:w-12" />
            </figure>
            <h2 className="hidden font-semibold md:block md:visible lg:text-xl italic">
              echiekart
            </h2>
          </span>
  )
}

export default Logo
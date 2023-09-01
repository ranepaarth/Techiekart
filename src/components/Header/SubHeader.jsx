import React from 'react'
import { NavLink } from 'react-router-dom'
const SubHeader = () => {
  return (
    <nav className='flex justify-between items-center py-2 px-8 cursor-pointer text-xs'>
       <NavLink to='/'> <span>Home</span></NavLink>
        <NavLink to='/products'><span>Products</span></NavLink>
        <span>About</span>
        <span>Contact Us</span>
    </nav>
  )
}

export default SubHeader
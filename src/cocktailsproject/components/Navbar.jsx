import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
const Navbar = () => {
  return (
    <nav className='flex items-center px-4 lg:px-20 py-5 bg-blue-50 justify-between shadow-md'>
      <div>
        <Link to='/'>
          <img src={logo} alt="cocktail logo" className='w-9/12 pr-6'></img>
        </Link>
      </div>
      <ul className='flex space-x-6 md:text-lg font-medium text-gray-600'>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

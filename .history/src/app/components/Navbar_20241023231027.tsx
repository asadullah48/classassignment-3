'use client'


import Link from "next/link";
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-between py-7 px-5 items-center bg-whitesmoke text-customTextColor shadow-lg">
      {/* Search Bar */}
      <div className="flex justify-around items-center px-1 py-1 text-lg bg-white border border-transparent hover:border-customTextColor transition duration-200 ">
        <FaSearch className="text-customTextColor m-2 text-xl" />
        <input className="text-customTextColor outline-none" type="text" placeholder="search" />
      </div>

      {/* Main Menu Links */}
      <div
        className={`absolute left-0 right-0 top-full mt-4 bg-white md:bg-transparent z-10 md:static md:flex md:space-x-8 
                ${isMenuOpen ? 'block' : 'hidden'} transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 text-center">
          <li className="mx-4 my-2 md:my-0">
            <Link href="!#">Home</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link href="#about">About</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link href="#shop">Shop</Link>
          </li>
          <li className="mx-4 my-2 md:my-0">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* User Actions */}
      <div
        className={`absolute left-0 right-0 top-[70%] mt-4 bg-white md:bg-transparent z-10 md:static md:flex md:space-x-4 
                ${isMenuOpen ? 'block' : 'hidden'} transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row text-center">
          <li className="flex justify-center items-center space-x-2 m-4">
            <FaUser className="text-lg text-customTextColor" />
            <Link href="#">Log In</Link>
          </li>
          <li className="m-4">
            <Link href="#shop">Shop</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="flex md:hidden">
        <button onClick={handleMenuToggle} className="text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}
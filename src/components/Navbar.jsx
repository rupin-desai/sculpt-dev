import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="bg-white p-0 w-full z-10 font-kumbh">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="flex">
          <img
            src={logo}
            alt="ArchDesign Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex text-base font-medium space-x-8 text-gray-custom mr-[14%]" >
          <li className="hover:text-gray-600 transition">
            <Link to="/sculpt-dev">Home</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/sculpt-dev/about">About</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/sculpt-dev/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/sculpt-dev/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

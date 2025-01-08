import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-900">ArchDesign</div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/sculpt-dev/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/sculpt-dev/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link to="/sculpt-dev/contact">Contact</Link>
          </li>
        </ul>
        <button className="md:hidden p-2 bg-gray-200 rounded">Menu</button>
      </nav>
    </header>
  );
};

export default Navbar;

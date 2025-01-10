import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle the state for mobile menu visibility
  };

  return (
    <header className="bg-white p-0 w-full z-10 font-kumbh">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex flex-start justify-start sm:justify-center">
          <img
            src={logo}
            alt="ArchDesign Logo"
            className="h-16 sm:h-20 w-auto transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul
          className="hidden sm:flex text-base font-medium space-x-8 text-gray-custom sm:space-x-10 sm:mr-0"
        >
          <li className="hover:text-gray-600 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Button for Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <motion.button
            onClick={toggleMenu}
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the hamburger icon
            transition={{ duration: 0.3 }} // Smooth transition for the rotation
          >
            {isOpen ? (
              <GiCancel size={30} className="text-gray-600" />
            ) : (
              <GiHamburgerMenu size={30} className="text-gray-600" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden bg-white w-full px-6 py-4 text-center transition-all duration-300 ease-in-out`}
        initial={{ opacity: 0 }} // Start with invisible
        animate={{ opacity: isOpen ? 1 : 0 }} // Fade-in or fade-out effect
        exit={{ opacity: 0 }} // Fade-out on exit
        transition={{ duration: 0.5, ease: "ease-out" }} // Smooth fade-in and fade-out
      >
        <ul className="space-y-4">
          <li className="hover:text-gray-600 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;

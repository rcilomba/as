import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <img src={Logo2} alt="Logo" className="h-20" />
        {/* Hamburger Icon for Mobile View */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center items-center space-x-10 text-3xl">
        <Link to="/">HOME</Link>
        <Link to="/the-team">THE TEAM</Link>
        <Link to="/classes">CLASSES</Link>
        <Link to="/memberships">MEMBERSHIPS</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/the-pros">THE PROS</Link>
        <Link to="/contact">CONTACT</Link>
        <img src={Logo2} alt="Logo" className="h-20" />
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 text-3xl">
          <Link to="/">HOME</Link>
          <Link to="/the-team">THE TEAM</Link>
          <Link to="/classes">CLASSES</Link>
          <Link to="/memberships">MEMBERSHIPS</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/the-pros">THE PROS</Link>
          <Link to="/contact">CONTACT</Link>
          <img src={Logo2} alt="Logo" className="h-20" />
        </nav>
      )}
    </header>
  );
};

export default Menu;

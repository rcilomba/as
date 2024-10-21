import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Top Logo - Hidden in Desktop View */}
        <img src={Logo2} alt="Logo" className="h-20 md:hidden" />
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
        <img src={Logo2} alt="Logo" className="h-20 hidden md:block" />
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          HOME
        </Link>
        <Link
          to="/the-team"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          THE TEAM
        </Link>
        <Link
          to="/classes"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          CLASSES
        </Link>
        <Link
          to="/memberships"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          MEMBERSHIPS
        </Link>
        <Link
          to="/kids"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          KIDS
        </Link>
        <Link
          to="/the-pros"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          THE PROS
        </Link>
        <Link
          to="/contact"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          CONTACT
        </Link>
        <img src={Logo2} alt="Logo" className="h-20 hidden md:block" />
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 text-3xl">
          <img src={Logo2} alt="Logo" className="h-20" />
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link
            to="/the-team"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            THE TEAM
          </Link>
          <Link
            to="/classes"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            CLASSES
          </Link>
          <Link
            to="/memberships"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            MEMBERSHIPS
          </Link>
          <Link
            to="/kids"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            KIDS
          </Link>
          <Link
            to="/the-pros"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            THE PROS
          </Link>
          <Link
            to="/contact"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
          <img src={Logo2} alt="Logo" className="h-20" />
        </nav>
      )}
    </header>
  );
};

export default Menu;

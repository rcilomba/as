import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importera ikoner
import Logo2 from "../assets/logo2.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // State för att hantera menyöppning

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <img src={Logo2} alt="Logo" className="h-20" />

        {/* Hamburgermeny ikon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Menyn */}
      <nav
        className={`flex-col md:flex md:flex-row ${
          isOpen ? "flex" : "hidden"
        } md:flex md:space-x-10 text-3xl`}
      >
        <Link to="/" className="my-2 md:my-0">
          HOME
        </Link>
        <Link to="/the-team" className="my-2 md:my-0">
          THE TEAM
        </Link>
        <Link to="/classes" className="my-2 md:my-0">
          CLASSES
        </Link>
        <Link to="/memberships" className="my-2 md:my-0">
          MEMBERSHIPS
        </Link>
        <Link to="/kids" className="my-2 md:my-0">
          KIDS
        </Link>
        <Link to="/the-pros" className="my-2 md:my-0">
          THE PROS
        </Link>
        <Link to="/contact" className="my-2 md:my-0">
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Menu;

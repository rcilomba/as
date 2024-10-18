import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";

const Menu = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-center items-center space-x-10 text-3xl">
        {" "}
        <img src={Logo2} alt="Logo" className="h-20" />
        <Link to="/">HOME</Link>
        <Link to="/the-team">THE TEAM</Link>
        <Link to="/classes">CLASSES</Link>
        <Link to="/memberships">MEMBERSHIPS</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/the-pros">THE PROS</Link>
        <Link to="/contact">CONTACT</Link>
        <img src={Logo2} alt="Logo" className="h-20" />
      </div>
    </header>
  );
};

export default Menu;

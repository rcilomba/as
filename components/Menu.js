import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-center space-x-10 text-3xl">
        <img src="" alt="" />
        <Link to="/">HOME</Link>
        <Link to="/the-team">THE TEAM</Link>
        <Link to="/classes">CLASSES</Link>
        <Link to="/memberships">MEMBERSHIPS</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/the-pros">THE PROS</Link>
        <Link to="/contact">CONTACT</Link>
        <img src="" alt="" />
      </div>
    </header>
  );
};

export default Menu;

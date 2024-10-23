import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };

  return (
    <footer className="bg-gray-100 p-6 text-blue-800 text-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col mb-4 text-center md:text-left">
          <p className="text-xl font-bold">CONTACT US</p>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-map-marker-alt text-lg"></i>
            <a
              href="https://www.google.com/maps?q=Svetsarvägen+22,+171+41+Solna,+Sweden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <p>Svetsarvägen 22, 171 41 Solna, Sweden</p>
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-phone-alt text-lg"></i>
            <a href="tel:+468315023" className="hover:text-blue-500">
              <p>+46 8 31 50 23</p>
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-envelope text-lg"></i>
            <a
              href="mailto:info@allstarsgym.se"
              className="hover:text-blue-500"
            >
              <p>info@allstarsgym.se</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-4 text-center md:text-left">
          <p className="text-lg font-bold">CONTENT</p>
          <ul className="space-y-1 mt-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/the-team"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                The Team
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                Classes
              </Link>
            </li>
            <li>
              <Link
                to="/memberships"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                Memberships
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/the-pros"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                The Pros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <p className="text-lg font-bold">FOLLOW US</p>
          <div className="flex space-x-4 text-xl mt-2 justify-center md:justify-start">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 text-4xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 text-4xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ALLSTARS TRAINING CENTER. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

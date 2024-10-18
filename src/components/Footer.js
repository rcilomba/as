import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col mb-4 text-center md:text-left">
          <p className="text-xl font-bold">CONTACT US</p>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-map-marker-alt text-xl"></i>
            <p>Svetsarvägen 22, 171 41 Solna, Sweden</p>
          </div>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-phone-alt text-xl"></i>
            <p>+46 8 31 50 23</p>
          </div>
          <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
            <i className="fas fa-envelope text-xl"></i>
            <p>info@allstarsgym.se</p>
          </div>
        </div>

        <div className="flex flex-col mb-4 text-center md:text-left">
          <p className="text-xl font-bold">CONTENT</p>
          <ul className="space-y-1 mt-2">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/the-team" className="hover:text-blue-500">
                The Team
              </a>
            </li>
            <li>
              <a href="/classes" className="hover:text-blue-500">
                Classes
              </a>
            </li>
            <li>
              <a href="/memberships" className="hover:text-blue-500">
                Memberships
              </a>
            </li>
            <li>
              <a href="/kids" className="hover:text-blue-500">
                Kids
              </a>
            </li>
            <li>
              <a href="/the-pros" className="hover:text-blue-500">
                The Pros
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <p className="text-xl font-bold">FOLLOW US</p>
          <div className="flex space-x-4 text-2xl mt-2 justify-center md:justify-start">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
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

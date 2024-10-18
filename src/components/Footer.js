import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-start space-x-10 text-xl p-4 bg-blue-500 text-white">
      <div>
        <i className="fas fa-map-marker-alt"></i>
        <p>Svetsarvägen 22</p>
        <p>171 41 Solna, Sweden</p>
      </div>
      <div>
        <i className="fas fa-phone-alt"></i>
        <p>+46 8 31 50 23</p>
      </div>
      <div>
        <i className="fas fa-envelope"></i>
        <p>info@allstarsgym.se</p>
      </div>
      <div>
        <p className="font-bold">Find us on</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

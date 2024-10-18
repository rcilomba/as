// src/components/Header.js
import React from "react";
import HeaderImg from "../assets/header.webp";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="relative w-auto h-96 bg-cover bg-center">
      {/* Bakgrundsbild med låg opacitet */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55, // Sätt opaciteten här
        }}
      />
      {/* Logotyp med 100% opacitet */}
      <div className="flex justify-center items-center h-full relative z-10">
        <img src={Logo} alt="Logo" className="max-w-xs" />
      </div>
    </header>
  );
};

export default Header;

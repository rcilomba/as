import React from "react";
import founder1 from "../assets/TheTeam/andreas.webp";
import founder2 from "../assets/TheTeam/majdi.webp";
import founder3 from "../assets/TheTeam/alex.webp";

const founders = [
  {
    name: "Andreas 'The General' Michael",
    title: "Founder/Head Coach",
    image: founder1,
    link: "https://www.instagram.com/andreasthegeneral/",
  },
  {
    name: "Majdi Shammas",
    title: "Founder/Manager",
    image: founder2,
    link: "https://www.instagram.com/majdishammas/",
  },
  {
    name: 'Alexander "The Manuler" Gustafsson',
    title: "Founder/Fighter/UFC Hall of Famer/Coach",
    image: founder3,
    link: "https://www.instagram.com/alexthemauler/",
  },
];

export const TheTeam = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Founders */}
      <section>
        <h1>The Founders</h1>
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              <a
                href={founder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-48 object-cover"
                />
                {/* text under bild, dold i desktop */}
                <div className="mt-2 text-center md:hidden">
                  {" "}
                  {/* hidden in desktop */}
                  <h3 className="text-lg font-bold">{founder.name}</h3>
                  <p className="text-sm">{founder.title}</p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-75 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <h3 className="text-lg font-bold">{founder.name}</h3>
                  <p className="text-sm">{founder.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TheTeam;

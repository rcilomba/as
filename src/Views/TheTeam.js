import React from "react";
import founder1 from "../assets/TheTeam/andreas.webp";
import founder2 from "../assets/TheTeam/majdi.webp";
import founder3 from "../assets/TheTeam/alex.webp";
import team1 from "../assets/TheTeam/jeppe.webp";
import team2 from "../assets/TheTeam/oliver.webp";

const founders = [
  {
    founderName: "Andreas 'The General' Michael",
    founderTitle: "Founder/Head Coach",
    founderImage: founder1,
    founderLink: "https://www.instagram.com/andreasthegeneral/",
  },
  {
    founderName: "Majdi Shammas",
    founderTitle: "Founder/Manager",
    founderImage: founder2,
    founderLink: "https://www.instagram.com/majdishammas/",
  },
  {
    founderName: 'Alexander "The Manuler" Gustafsson',
    founderTitle: "Founder/Fighter/UFC Hall of Famer/Coach",
    founderImage: founder3,
    founderLink: "https://www.instagram.com/alexthemauler/",
  },
];

const teams = [
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: team1,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },

  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: team2,
    teamLink: "https://www.instagram.com/olive.rroque/",
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
                href={founder.founderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <img
                  src={founder.founderImage}
                  alt={founder.founderName}
                  className="w-full h-48 object-cover"
                />
                {/* text under bild, dold i desktop */}
                <div className="mt-2 text-center md:hidden">
                  {" "}
                  {/* hidden in desktop */}
                  <h3 className="text-lg font-bold">{founder.founderName}</h3>
                  <p className="text-sm">{founder.founderTitle}</p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-75 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <h3 className="text-lg font-bold">{founder.founderName}</h3>
                  <p className="text-sm">{founder.founderTitle}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* the team */}
      <section>
        <h1>The Team</h1>
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mx-auto">
          {teams.map((team, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              <a
                href={team.teamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <img
                  src={team.teamImage}
                  alt={team.teamName}
                  className="w-full h-48 object-cover"
                />
                {/* text under bild, dold i desktop */}
                <div className="mt-2 text-center md:hidden">
                  {" "}
                  {/* hidden in desktop */}
                  <h3 className="text-lg font-bold">{team.teamName}</h3>
                  <p className="text-sm">{team.teamTitle}</p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-75 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <h3 className="text-lg font-bold">{team.teamName}</h3>
                  <p className="text-sm">{team.teamTitle}</p>
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

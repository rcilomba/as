import React from "react";
import andreas from "../assets/TheTeam/andreas.webp";
import majdi from "../assets/TheTeam/majdi.webp";
import alexander from "../assets/TheTeam/alex.webp";
import jeppe from "../assets/TheTeam/jeppe.webp";
import oliver from "../assets/TheTeam/oliver.webp";
import alan from "../assets/TheTeam/alan.webp";
import bianca from "../assets/TheTeam/bianca.webp";
import { FaInstagram } from "react-icons/fa"; // Importera Instagram-ikonen

const founders = [
  {
    founderName: "Andreas 'The General' Michael",
    founderTitle: "Founder/Head Coach",
    founderImage: andreas,
    founderLink: "https://www.instagram.com/andreasthegeneral/",
  },
  {
    founderName: "Majdi Shammas",
    founderTitle: "Founder/Manager",
    founderImage: majdi,
    founderLink: "https://www.instagram.com/majdishammas/",
  },
  {
    founderName: 'Alexander "The Manuler" Gustafsson',
    founderTitle: "Founder/Fighter/UFC Hall of Famer/Coach",
    founderImage: alexander,
    founderLink: "https://www.instagram.com/alexthemauler/",
  },
];

const teams = [
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: 'Alan Finfo" Nascimento',
    teamTitle: "Coach (BJJ)",
    teamImage: alan,
    teamLink: "https://www.instagram.com/alanfinfoujj/",
  },
  {
    teamName: "Bianca Antman",
    teamTitle: "Kids coach/Coach/PT (BJJ/MMA)",
    teamImage: bianca,
    teamLink: "https://www.instagram.com/biancaantman/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
    teamLink: "https://www.instagram.com/olive.rroque/",
  },
  {
    teamName: "Jeppe Hoffman",
    teamTitle: "Front Desk/Coach/PT (Thaiboxing)",
    teamImage: jeppe,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Oliver Roque",
    teamTitle: "Front Desk/Coach/Pt (Thai)",
    teamImage: oliver,
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
                <div className="mt-2 text-center md:hidden">
                  {/* text under bild, dold i desktop */}
                  <h3 className="text-lg font-bold">{founder.founderName}</h3>
                  <p className="text-sm">{founder.founderTitle}</p>
                  <a
                    href={founder.founderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex justify-center"
                  >
                    <FaInstagram className="text-blue-500" />
                  </a>
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
      {/* The Team */}
      <section>
        <h1>The Team</h1>
        <div className="max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto">
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
                <div className="mt-2 text-center md:hidden">
                  {/* text under bild, dold i desktop */}
                  <h3 className="text-lg font-bold">{team.teamName}</h3>
                  <p className="text-sm">{team.teamTitle}</p>
                  <a
                    href={team.teamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex justify-center"
                  >
                    <FaInstagram className="text-blue-500" />
                  </a>
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

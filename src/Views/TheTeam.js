import React from "react";
import andreas from "../assets/TheTeam/andreas.webp";
import majdi from "../assets/TheTeam/majdi.webp";
import alexander from "../assets/TheTeam/alex.webp";
import jeppe from "../assets/TheTeam/jeppe.webp";
import oliver from "../assets/TheTeam/oliver.webp";
import alan from "../assets/TheTeam/alan.webp";
import bianca from "../assets/TheTeam/bianca.webp";
import marek from "../assets/TheTeam/marek.webp";
import manuel from "../assets/TheTeam/manuel.webp";
import selman from "../assets/TheTeam/selman.webp";
import mohammad from "../assets/TheTeam/mohammad.webp";
import sanja from "../assets/TheTeam/sanja.webp";
import elmir from "../assets/TheTeam/elmir.webp";
import david from "../assets/TheTeam/david.webp";
import najib from "../assets/TheTeam/najib.webp";
import bang from "../assets/TheTeam/bang.webp";
import athit from "../assets/TheTeam/athit.webp";
import adam from "../assets/TheTeam/adam.webp";
import leon from "../assets/TheTeam/leon.webp";
import ola from "../assets/TheTeam/ola.webp";
import sevan from "../assets/TheTeam/sevan.webp";
import josefine from "../assets/TheTeam/josefine.webp";
import jay from "../assets/TheTeam/jay.webp";
import erik from "../assets/TheTeam/erik.webp";
import micha from "../assets/TheTeam/micha.webp";
import ulf from "../assets/TheTeam/ulf.webp";
import muzammel from "../assets/TheTeam/muzammel.webp";
import { FaInstagram } from "react-icons/fa";

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
    teamName: "Marek Stanislawski",
    teamTitle: "Kids coach (BJJ)",
    teamImage: marek,
    teamLink: "https://www.instagram.com/largestcarebear/",
  },
  {
    teamName: "Manuel Carreira",
    teamTitle: "kids coach (BJJ)",
    teamImage: manuel,
    teamLink: "https://www.instagram.com/manuelcarreira/",
  },
  {
    teamName: "Selman Berisha",
    teamTitle: "Coach (MMA)",
    teamImage: selman,
    teamLink: "https://www.instagram.com/selmanberisha/",
  },
  {
    teamName: "Mohammad Babadivand",
    teamTitle: "Coach (MMA)",
    teamImage: mohammad,
    teamLink: "https://www.instagram.com/mohammadbabadivand/",
  },
  {
    teamName: "Sanja Trbojevic",
    teamTitle: "Coach (MMA/Thai)",
    teamImage: sanja,
    teamLink: "https://www.instagram.com/sanjatrbojevic/",
  },
  {
    teamName: "Elmir Abasov",
    teamTitle: "Coach (Wrestling/Grappling)",
    teamImage: elmir,
    teamLink: "https://www.instagram.com/elmir_abasov/",
  },
  {
    teamName: "David Jacobsson",
    teamTitle: "Coach/PT/Fighter (MMA/Grappling)",
    teamImage: david,
    teamLink: "https://www.instagram.com/davejacobsson/",
  },
  {
    teamName: "Najib Adams Morllah",
    teamTitle: "Coach/PT (MMA)",
    teamImage: najib,
    teamLink: "https://www.instagram.com/n4jje/",
  },
  {
    teamName: "Bang Chalong",
    teamTitle: "Coach/PT (Thai)",
    teamImage: bang,
    teamLink: "https://www.instagram.com/bang_chalong/",
  },
  {
    teamName: "Athit Praditphon",
    teamTitle: "Coach/PT (Thai)",
    teamImage: athit,
    teamLink: "https://www.instagram.com/athitpraditphon/",
  },
  {
    teamName: "Adam Frisäter",
    teamTitle: "Caoach/PT (MMA/Boxing)",
    teamImage: adam,
    teamLink: "https://www.instagram.com/martialarts4life/",
  },
  {
    teamName: "Leon Alsaksak",
    teamTitle: "Coach/PT (Thaiboxing)",
    teamImage: leon,
    teamLink: "https://www.instagram.com/bang_chalong/",
  },
  {
    teamName: "Ola Jacobsson",
    teamTitle: "Coach/PT/Fighter (MMA/Grappling)",
    teamImage: ola,
    teamLink: "https://www.instagram.com/jeppetraining/",
  },
  {
    teamName: "Sevan Madenijan",
    teamTitle: "Coach/PT/Fighter (MMA/Grappling)",
    teamImage: sevan,
    teamLink: "https://www.instagram.com/monkey.d.sevan/",
  },
  {
    teamName: "Josefine Lindgren Knutsson",
    teamTitle: "Coach/PT/Fighter (MMA/Thai)",
    teamImage: josefine,
    teamLink: "https://www.instagram.com/josefinethunder/",
  },
  {
    teamName: "Jay Elder",
    teamTitle: "Coach (Boxing)",
    teamImage: jay,
    teamLink: "https://www.instagram.com/jayelder39/",
  },
  {
    teamName: "Erik Skoglund",
    teamTitle: "Coach/PT (Boxing)",
    teamImage: erik,
    teamLink: "https://www.instagram.com/skoglunderik/",
  },
  {
    teamName: "Micha Tabagoua",
    teamTitle: "Coach (Boxing)",
    teamImage: micha,
    teamLink: "https://www.instagram.com/tabagoua/",
  },
  {
    teamName: "Ulf Jonsson",
    teamTitle: "Coach (Boxing)",
    teamImage: ulf,
    teamLink: "https://www.instagram.com/ujozen/",
  },
  {
    teamName: "Muzammel Hoque Dewan",
    teamTitle: "Front Desk/Janitor",
    teamImage: muzammel,
    teamLink: "https://www.instagram.com/alexthemauler/",
  },
];

export const TheTeam = () => {
  return (
    <div>
      <section className="max-w-4xl md:max-w-2xl mx-auto text-lg">
        <h1 className="text-blue-800 text-5xl pt-10 pb-1">The Team</h1>
        <h2 className="text-blue-800 text-3xl pt-5 pb-3">Our story</h2>
        <p className="text-lg">
          Allstars Training Center kicked off 2013 with a vision to become a
          widely renowned training center. Since day one, the goal has been to
          establish and develop a familiar, inspiring atmosphere where
          world-class fighters train side by side with beginners. Plenty are the
          martial artists, the fighters that have climbed the national and
          international rankings under our supervision—but the vast majority of
          our family members have no intention at all to compete with
          others—they come to challenge themselves. We are happy to see that we
          are on track towards our vision. We are on a steady pace towards the
          future, committing heart and soul into what we love.
        </p>
        <br />
        <p className="text-lg">
          In 2022, we opened up a training center in Torrevieja, Spain. In 2023,
          we moved into a new venue in Solna, Stockholm. Both of these centers
          are outstanding facilities.
        </p>
        <br />
        <p className="text-lg">
          Come see for yourself. Transpire. Inspire. Join our family!
        </p>
      </section>

      {/* Founders */}
      <section className="founders flex flex-col items-center pt-10 pb-12">
        <h2 className="text-blue-800 text-3xl">The Founders</h2>
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
        <h1 className="text-blue-800 text-3xl">Meet the Team</h1>
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

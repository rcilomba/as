import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import david from "../assets/Pros/retiredStars/david.webp";
import daniel from "../assets/Pros/retiredStars/daniel.webp";
import reza from "../assets/Pros/retiredStars/reza.webp";
import jimi from "../assets/Pros/retiredStars/jimi.webp";
import davidB from "../assets/Pros/retiredStars/davidB.webp";
import magnus from "../assets/Pros/retiredStars/magnus.webp";
import niklas from "../assets/Pros/retiredStars/niklas.webp";
import jontan from "../assets/Pros/retiredStars/jonatan.webp";
import michel from "../assets/Pros/retiredStars/michel.webp";
import ivan from "../assets/Pros/retiredStars/ivan.webp";
import arman from "../assets/Pros/retiredStars/arman.webp";
import frantz from "../assets/Pros/retiredStars/frantz.webp";
import mohammad from "../assets/Pros/retiredStars/mohammad.webp";

const pros = [
  {
    name: "David Teymur",
    image: david,
    instagram: "https://www.instagram.com/davidteymur/",
    youtube: "https://www.youtube.com/watch?v=jPWkEH2bvNs",
    twitter: "https://twitter.com/davidteymur",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/56068-david-teymur?category=news",
  },
  {
    name: 'Daniel "Kid Dynamite" Teymur',
    image: daniel,
    instagram: "https://www.instagram.com/daniel_teymur/",
    youtube: "https://youtu.be/vz9gZJWtFO8",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/56066-daniel-teymur",
  },
  {
    name: 'Reza "Mad Dog" Madadi',
    image: reza,
    instagram: "https://www.instagram.com/rezamaddog/",
    youtube: "https://youtu.be/NyhCTrhvt10",
    tapology: "https://www.tapology.com/fightcenter/fighters/reza-madadi",
  },
  {
    name: 'Jimi "Poster Boy" Manuwa',
    image: jimi,
    instagram: "https://www.instagram.com/jimimanuwa/",
    youtube: "https://www.youtube.com/watch?v=AdoBHZxJeuA",
    tapology: "https://www.tapology.com/fightcenter/fighters/ilir-latifi",
  },
  {
    name: 'David "The Brazilian Swede" Bielkheden',
    image: davidB,
    instagram: "https://www.instagram.com/david.bielkheden/",
    youtube: "https://www.youtube.com/watch?v=0GB4Fj3N19M",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/david-bielkheden-the-brazilian-swede",
  },
  {
    name: 'Magnus "Jycken" Cedenblad',
    image: magnus,
    instagram: "https://www.instagram.com/jyckencedenblad/",
    youtube: "https://www.youtube.com/watch?v=9kBbxGgjgV8",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/11471-magnus-cedenblad",
  },
  {
    name: "Niklas Bäckström",
    image: niklas,
    instagram: "https://www.youtube.com/watch?v=mvvevLQNIRw",
    youtube: "https://www.youtube.com/watch?v=jL8O3On6XKI",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/13904-Niklas-Backstrom",
  },
  {
    name: "Jonatan Westin",
    image: jontan,
    instagram: "https://www.instagram.com/jonatan.westin/",
    youtube: "https://www.youtube.com/watch?v=dWRC2OTKvQE",
    tapology: "https://www.tapology.com/fightcenter/fighters/jonothan-westin",
  },
  {
    name: 'Michel "Bane" Ersoy',
    image: michel,
    instagram: "https://www.instagram.com/michelersoy/",
    youtube: "https://www.youtube.com/watch?v=VJPnGQRDeYk",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/33276-michel-ersoy",
  },
  {
    name: 'Ivan "Hellbow" Zidar',
    image: ivan,
    instagram: "https://www.instagram.com/ivan_zidar/",
    youtube: "https://www.youtube.com/watch?v=bZHmseeiZk8",
    tapology: "https://www.tapology.com/fightcenter/fighters/145589-ivan-zidar",
  },
  {
    name: "Arman Popal",
    image: arman,
    instagram: "https://www.instagram.com/armanpopal/",
    youtube: "https://www.youtube.com/watch?v=lm4zxPaPnG4",
    tapology: "#",
  },
  {
    name: "Frantz Slioa",
    image: frantz,
    instagram: "#",
    youtube: "#",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/33273-frantz-slioa",
  },
  {
    name: "Mohammad Babadivand",
    image: mohammad,
    instagram: "https://www.instagram.com/mohammadbabadivand/",
    youtube: "https://www.youtube.com/watch?v=Vc7eOCTpXFU",
    tapology:
      "https://www.tapology.com/fightcenter/fighters/38662-mohammad-babadivand",
  },
];

const RetiredFighters = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto text-lg">
        <h2 className="text-blue-800 text-3xl pt-5 pb-3">Retired Stars</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {pros.map((pro, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              <img
                src={pro.image}
                alt={pro.name}
                className="w-full h-auto md:h-48 object-cover" // Ensures 100% width and auto height in mobile
              />
              <div className="mt-2 text-center">
                <h3 className="text-lg font-bold">{pro.name}</h3>
                <div className="flex space-x-2 mt-2 justify-center">
                  <a
                    href={pro.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-blue-500 text-xl" />
                  </a>
                  <a
                    href={pro.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-blue-500 text-xl" />
                  </a>
                  {pro.twitter && (
                    <a
                      href={pro.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-blue-500 text-xl" />
                    </a>
                  )}
                </div>
                <div className="mt-2 flex justify-center">
                  <a
                    href={pro.tapology}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RetiredFighters;

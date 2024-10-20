import React from "react";
import schedule from "../assets/schedule.png";
import mma from "../assets/classes/mma.webp";
import thaiboxing from "../assets/classes/thaiboxing.webp";
import bjj from "../assets/classes/bjj.webp";
import grappling from "../assets/classes/grappling.webp";
import boxing from "../assets/classes/boxing.webp";
import wrestling from "../assets/classes/wrestling.webp";
import gym from "../assets/classes/gym.webp";
import fun from "../assets/classes/fun.webp";

const classes = [
  {
    title: "MMA",
    description:
      "MMA (Mixed Martial Arts) is one of the world's fastest-growing sports. It combines various fighting styles. Sweden has produced a whole bunch of stars—many of them are born and raised here at Allstar Training Center. MMA is also a fun way to get fit for all of us; come join our classes. We offer MMA for all levels.",
    image: mma,
  },

  {
    title: "Thaiboxing (Muay Thai)",
    description:
      "A favorite choice by many of our members. This old and traditional sport from Thailand is the perfect choice for everyone that wants to get fit and have fun. Classes are many and loaded with smiles and sweat. Ambitions of being the champ? Don't worry. Our coaches and their records can take you there. It's up to you!",
    image: thaiboxing,
  },

  {
    title: "Brazilian Jiu Jitsu (BJJ)",
    description:
      'The kids\' favorite. We have classes from the age of 4 and without limit upwards. We cover all levels from small kids, amateurs to the highest professional levels. Coaches and a venue that is second to none. Almost 1000 sqm of mats and world-class coaches. Come see for yourself. See you in the "gi"',
    image: bjj,
  },
  {
    title: "Submisson Wrestling/Grappling",
    description:
      'Submission wrestling is a masterful blend of a variety of grappling arts: it is very much like "BJJ," but with less friction as it\'s practiced in shorts and a rash guard rather than the traditional "gi" (used in "BJJ"). A sport easy to learn—takes a lifetime to master. Try it; you will like it.',
    image: grappling,
  },

  {
    title: "Boxing",
    description:
      "The noble art of self-defense. Classic boxing. We cover it all. From those who want to get/stay fit to the highest amateur and professional levels. Coaches, classes, and conditions for every wish you have. Welcome and challenge yourself and us. We are here for you. Your ambitions get us going!",
    image: boxing,
  },

  {
    title: "Wrestling",
    description:
      "Wrestling first appeared in the ancient Olympic Games as an event in 708 B.C.—but it goes back much further. Here at Allstars, we will teach you the exciting art of takedown and control. Wrestling is a great base for MMA but is also impressively effective and fun on its own. A great workout for beginners and everyone.",
    image: wrestling,
  },

  {
    title: "Gym",
    description:
      "The training center also contains a large, well-equipped, state-of-the-art gym area. Stair, rowing, ski ergs—traditional cardio—and weight training machines. Kettlebells, bars, and dumbbells, loaded with weights. More spectacular gear like sledgehammers and tires, weighted sleds. Don't worry. We've got it all!",
    image: gym,
  },

  {
    title: "Fun",
    description:
      "We do understand that the majority who enter our gyms come there to be inspired, to work out, to sweat, and to have fun. Pros and amateurs side by side. Kids and adults in various classes. Whether you want to be the next UFC champ or just get fit, hang out, and have fun meanwhile. Feel welcome. Join the family of Allstars.",
    image: fun,
  },
];

export const Classes = () => {
  return (
    <div className="flex flex-col items-center">
      <section>
        <h1 className="text-blue-800 text-5xl pt-10 pb-3">Classes</h1>
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-blue-800 text-3xl pt-10 pb-3">Schedule</h1>
        <div className="flex justify-center">
          <img
            src={schedule}
            alt="Class Schedule"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Classes;

import React from "react";
import memberships from "../assets/memberships/memberships.webp";
import trainingCamps from "../assets/memberships/trainingCamps.webp";
import personalTrainingPT from "../assets/memberships/personalTrainingPT.webp";
import allstarProProgram from "../assets/memberships/allstarProProgram.webp";
import swedishFlag from "../assets/memberships/swedishFlag.webp";

const items = [
  {
    title: "Membership/Medlemskap",
    description:
      "Here is what we offer. Anyone & everyone can be an Allstar. See you at our classes or in the gym.",
    image: memberships,
    link: "https://www.allstarsgym.se/_files/ugd/f3a250_4e50265cf303434e92b177900db3df39.pdf",
    linkSwe:
      "https://www.allstarsgym.se/_files/ugd/f3a250_d18b90b4412a4851a552c8973d8660af.pdf",
  },
  {
    title: "Training Camps",
    description:
      "We continuously arrange training camps for individuals, smaller or bigger groups. Program for 2023 up soon.",
    image: trainingCamps,
    link: "https://www.allstarsgym.se/_files/ugd/f3a250_a7a01b757cf5475982d9aa7ff6c8f314.pdf",
  },
  {
    title: "Personal Training / PT",
    description:
      "Do you want to hire a personal trainer? Check the link below to get started.",
    image: personalTrainingPT,
    link: "https://www.allstarsgym.se/_files/ugd/f3a250_8df444fcd058407fa8e688af346b9bbe.pdf",
  },
  {
    title: "Allstars Professional Program (APP)",
    description:
      "We have a development program for selected amateurs and up & coming pro's. If you think you got what it takes: apply here!",
    image: allstarProProgram,
    link: "magdishammas77@gmail.com",
  },
];

const Memberships = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <section className="w-4/5 mx-auto text-xl pb-10">
        <h1 className="text-blue-800 text-5xl pt-10 pb-5">Memberships</h1>
        <p>Founded in 2013. </p>
        <br />
        <p>Still on the same mission.</p>
        <br />
        <p>
          The go-to place for anyone and everyone who aims for championship
          titles and/or just wants to get inspired, get or stay fit in an
          environment that challenges you and gives you a laugh every now and
          then.
        </p>
      </section>
      <h1 className="text-3xl text-center mb-6 text-blue-800">Our Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <a
                href={item.link}
                className="bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-32 text-center"
              >
                Find out
              </a>
              {index === 0 && ( // Only show for the first item
                <a
                  href={item.linkSwe}
                  className="flex items-center mt-2 bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-32 text-center"
                >
                  <img
                    src={swedishFlag}
                    alt="Swedish Flag"
                    className="h-4 w-4 mr-2" // Adjust the size of the flag as needed
                  />
                  Find out
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memberships;

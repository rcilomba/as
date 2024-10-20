import React from "react";
import KidsSlider from "../components/KidsCarousel";
import kids1 from "../assets/kids/kids1.jpg";
import kids2 from "../assets/kids/kids2.png";
import kids3 from "../assets/kids/kids3.jpg";

export const Kids = () => {
  return (
    <div>
      <section className="max-w-2xl m-auto">
        <h1 className="text-blue-800 text-5xl pt-10 pb-3">Kids</h1>
        <h2 className="text-lg pb-5">
          Unlock the potential of your child from the age of 4 and up
        </h2>
        <p className="pb-5">
          At Allstars, we believe every child has a champion within them waiting
          to shine. Our dedicated kids' classes are designed to foster
          confidence, discipline, and fun in a safe and nurturing environment.
          Join us for an exciting journey where your child will learn new
          skills, make friends, and enjoy the thrill of martial arts
        </p>
      </section>
      <KidsSlider />
      <section>
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-blue-800 text-4xl pb-10 pt-28">
            Our kids classes
          </h2>
          {/* First Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-16">
            <img
              src={kids1}
              alt="Description 1"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl  text-blue-800">
                Brazilian Jiu Jitsu (BJJ)
              </h2>
              <p className="mt-2 text-gray-700">
                Brazilian Jiu Jitsu (BJJ) is a dynamic grappling art that
                teaches kids effective techniques for self-defense and
                competition. Through engaging drills and sparring, students
                learn to use leverage and technique to control opponents,
                fostering confidence and discipline
              </p>
            </div>
          </div>
          {/* Second Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-16">
            <img
              src={kids2}
              alt="Description 2"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl  text-blue-800">Striking Classes</h2>
              <p className="mt-2 text-gray-700">
                Our Striking Classes introduce kids to the fundamentals of
                striking techniques from various martial arts. Emphasizing
                footwork, balance, and accuracy, these classes help young
                athletes develop their skills while promoting fitness,
                coordination, and sportsmanship.
              </p>
            </div>
          </div>
          {/* Third Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-8">
            <img
              src={kids3}
              alt="Description 3"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl  text-blue-800">MMA for Kids</h2>
              <p className="mt-2 text-gray-700">
                MMA for Kids is a fun and safe way to learn mixed martial arts.
                Combining techniques from striking and grappling, this program
                helps children build confidence, strength, and agility. Kids
                will engage in age-appropriate training that promotes teamwork
                and respect.
              </p>
            </div>
          </div>
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default Kids;

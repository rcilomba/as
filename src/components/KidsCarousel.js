import React, { useState, useEffect } from "react";
import img1 from "../assets/kids/img1.jpeg";
import img2 from "../assets/kids/img2.jpeg";
import img3 from "../assets/kids/img3.jpeg";
import img4 from "../assets/kids/img4.jpeg";
import img5 from "../assets/kids/img5.jpeg";

const images = [img1, img2, img3, img4, img5];

const KidsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          className="w-3/5 max-h-auto object-cover m-auto"
        />
      </div>
      <div className="flex justify-between mt-4"></div>
    </section>
  );
};

export default KidsCarousel;

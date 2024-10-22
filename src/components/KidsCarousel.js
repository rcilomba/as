import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
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
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable mouse tracking for desktop use
  });

  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div className="overflow-hidden" {...handlers}>
        {" "}
        {/* Attach swipe handlers here */}
        <img
          src={images[currentIndex]}
          alt={`Kids class ${currentIndex + 1}`}
          className="w-3/5 h-auto object-cover m-auto"
        />
      </div>
      <div className="flex justify-between mt-4"></div>
    </section>
  );
};

export default KidsCarousel;
